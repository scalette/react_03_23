import { Component } from "react";
import Card from "../card/card.component";
import { CardListStyled } from "./card.list.style";
import { Monster } from "../../routes/types";

type CardListProps = {
  monsters: Monster[];
};

const CardList = ({ monsters }: CardListProps) => (
  <CardListStyled>
    {monsters.map((monster) => {
      return <Card key={monster.id} monster={monster} />;
    })}
  </CardListStyled>
);

export default CardList;
