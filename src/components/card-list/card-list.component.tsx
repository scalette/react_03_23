import { Component, useEffect, useState } from 'react';
import Card from '../card/card.component';
import { CardListStyled } from './card.list.style';
import { Monster, PersonsSW } from '../../routes/types';
import { useLoaderData } from 'react-router-dom';
import { getPersons, getPersonWithSearch } from '../utils/starWarsApi';
import Modal from '../modal/modal';
import { useDispatch, useSelector } from 'react-redux';
import { searchStringUpdated } from '../../features/input/inputSlice';
import { useGetPersonsQuery } from '../../features/input/apiSlice';

type CardListProps = {
  monsters: Monster | null;
  search: string;
  fundamentMonsters: Monster[];
};

const CardList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { monstersData } = useLoaderData() as { monstersData: Monster[] };
  const [monster, setMonster] = useState<PersonsSW | null>(null);
  const [searchString, setSearchString] = useState<string>('');
  const [personsSW, setPersonsSW] = useState<PersonsSW[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  //@ts-ignore
  const { data, isFetching, isSuccess } = useGetPersonsQuery();
  console.log('reduxTest: ', data?.results);
  useEffect(() => {
    const searchClick = async (e: Event): Promise<void> => {
      const searchString = (e.target as HTMLTextAreaElement).firstChild?.value;
      dispatch(searchStringUpdated({ searchString }));
      setSearchString(searchString);
      e.preventDefault();
    };
    const search = document.querySelector('#search-form');
    search?.addEventListener('submit', searchClick, false);
    const characters = async () => {
      const persons = await getPersons();
      setPersonsSW(persons);
      setIsLoading(false);
    };
    characters();
    return function cleanUp() {
      if (search) {
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
      {isFetching ? (
        <div>Loading...</div>
      ) : (
        <>
          <h1>Monsters</h1>
          <CardListStyled>
            {data?.results
              .filter((person) => person.name.includes(searchString))
              .map((person, index) => {
                return (
                  <Card
                    key={index}
                    monster={person}
                    monsterId={index}
                    setIsModalOpen={setIsModalOpen}
                    setMonster={setMonster}
                  />
                );
              })}
          </CardListStyled>
        </>
      )}
      {isModalOpen && <Modal setIsOpen={setIsModalOpen} monster={monster} />}
    </>
  );
};

export default CardList;
