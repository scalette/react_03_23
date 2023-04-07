import { Component, useEffect, useState } from 'react';
import Card from '../card/card.component';
import { CardListStyled } from './card.list.style';
import { Monster, PersonsSW } from '../../routes/types';
import { useLoaderData } from 'react-router-dom';
import { getPersons, getPersonWithSearch } from '../utils/starWarsApi';
import Modal from '../modal/modal';

type CardListProps = {
  monsters: Monster[];
  search: string;
  fundamentMonsters: Monster[];
};

const CardList = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const { monstersData } = useLoaderData() as { monstersData: Monster[] };
  const [monsters, setMonsters] = useState<Monster[]>(monstersData);
  const [searchString, setSearchString] = useState<string>('');
  const [personsSW, setPersonsSW] = useState<PersonsSW[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    console.log('searchString', searchString);
    console.log('personsSW', personsSW);
    const searchClick = async (e: Event): Promise<void> => {
      console.log('searchClick', e);
      // setIsLoading(true);
      const searchString = (e.target as HTMLTextAreaElement).firstChild?.value;
      console.log('searchString', searchString);
      setSearchString(searchString);
      //setPersonsSW(res);
      e.preventDefault();
    };
    const search = document.querySelector('#search-form');
    search?.addEventListener('submit', searchClick, false);
    const characters = async () => {
      const persons = await getPersons();
      setPersonsSW(persons);
      setIsLoading(false);
      console.log(persons);
    };
    characters();
    return function cleanUp() {
      if (search) {
        console.log('input');
        search.removeEventListener('submit', searchClick, false);
      }
    };
  }, []);

  useEffect(() => {
    const runEffect = async () => {
      setIsLoading(true);
      const res = await getPersonWithSearch(searchString);
      setPersonsSW(res);
      setIsLoading(false);
    };
    runEffect();
  }, [searchString]);
  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <h1>Monsters</h1>
          <CardListStyled>
            {personsSW
              .filter((person) => person.name.includes(searchString))
              .map((person, index) => {
                return <Card key={index} monster={person} monsterId={index} />;
              })}
          </CardListStyled>
        </>
      )}
      {isModalOpen && <Modal setIsOpen={setIsModalOpen} />}
    </>
  );
};

export default CardList;
