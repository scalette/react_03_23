import { ReactNode, Component } from "react";
import { Outlet, Form, useLoaderData } from "react-router-dom";

export function loader({ request }: { request: { url: string } }) {
  const url = new URL(request.url);
  console.log(url);
  const q = url.searchParams.get("q");
  console.log(q);
  return { q };
}

class RootClassComponent extends Component {
  render(): ReactNode {
    const getSearch = localStorage.getItem("search");
    console.log("from LS: ", getSearch);

    return (
      <>
        <div id="sidebar">
          <h1>
            <a href={`https://github.com/scalette`}>Git Hub</a>
          </h1>
          <div>
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
                defaultValue={getSearch ?? ""}
              />
              <div id="search-spinner" aria-hidden hidden={true} />
              <div className="sr-only" aria-live="polite"></div>
            </form>
            <form method="post">
              <button type="submit">New</button>
            </form>
          </div>
          <nav>
            <ul>
              <li>
                <a href={`/about`}>About Us</a>
              </li>
              <li>
                <a href={`/`}>Main</a>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail">
          <Outlet />
        </div>
      </>
    );
  }
}

export default RootClassComponent;
