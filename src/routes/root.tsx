import { ReactNode, Component } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

export function loader({ request }: { request: { url: string } }) {
  const url = new URL(request.url);
  console.log('laoder')
  const q = url.searchParams.get('q');
  return { q };
}

export default () => {
  const getSearch = useSelector((state) => state.input.searchString);
  console.log('getSearch:', getSearch);

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
              defaultValue={getSearch ?? ''}
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <form method="post">
            <button type="submit">
              <a href={`/forms`}>NEW</a>
            </button>
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
            <li>
              <a href={`/forms`}>Forms</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
};
