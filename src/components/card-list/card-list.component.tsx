import { Component } from "react";
import Card from "../card/card.component";
import { CardListStyled } from "./card.list.style";
import { Monster } from "../../routes/types";

type CardListProps = {
  monsters: Monster[];
  search: string;
  fundamentMonsters: Monster[];
};
class CardList extends Component<CardListProps, CardListProps> {
  public monsters: Monster[];
  constructor(props: CardListProps) {
    super(props);
    const { monsters, search } = props;
    this.monsters = monsters;
    console.log("srch:", search);
    this.state = {
      monsters,
      search,
      fundamentMonsters: monsters,
    };
  }
  componentDidMount(): void {
    const search = document.querySelector("#search-form");
    search?.addEventListener(
      "input",
      (e: Event): void => {
        console.log("setState", localStorage.getItem("search") as string);
        console.log("setState", this.state);
        this.setState({
          monsters: this.state.fundamentMonsters.filter((monster) =>
            monster.name.includes(localStorage.getItem("search") as string)
          ),
        });
        localStorage.setItem("search", (e.target as HTMLTextAreaElement).value);
      },
      false
    );
  }

  render() {
    const getSearch = localStorage.getItem("search");
    console.log("from CardList LS: ", getSearch);

    return (
      <CardListStyled>
        {this.state.monsters.map((monster) => {
          return <Card key={monster.id} monster={monster} />;
        })}
      </CardListStyled>
    );
  }
}

export default CardList;
