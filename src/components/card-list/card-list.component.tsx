import { Component, useEffect, useState } from 'react';
import Card from '../card/card.component';
import { CardListStyled } from './card.list.style';
import { Monster } from '../../routes/types';
import { useLoaderData } from 'react-router-dom';

type CardListProps = {
  monsters: Monster[];
  search: string;
  fundamentMonsters: Monster[];
};

const CardList = () => {
  const { monstersData } = useLoaderData() as { monstersData: Monster[] };
  const [monsters, setMonsters] = useState<Monster[]>(monstersData);
  const [searchString, setSearchString] = useState<string>('');
  useEffect(() => {
    const search = document.querySelector('#search-form');
    search?.addEventListener(
      'input',
      (e: Event): void => {
        setSearchString((e.target as HTMLTextAreaElement).value);
      },
      false
    );
  }, []);

  return (
    <>
      <h1>Monsters</h1>
      <CardListStyled>
        {monsters
          .filter((monster) => monster.name.includes(searchString))
          .map((monster) => {
            return <Card key={monster.id} monster={monster} />;
          })}
      </CardListStyled>
    </>
  );
};

export default CardList;
