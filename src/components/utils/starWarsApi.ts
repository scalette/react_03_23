import { PersonsSW } from "../../routes/types";

export const getPersons = async () => {
  const responce = await fetch('https://swapi.dev/api/people');
  const data = await responce.json();
  return data.results as PersonsSW[];
};


export const getPersonWithSearch = async (search: string) => {
  console.log(search);
  const responce = await fetch(`https://swapi.dev/api/people/?search=${search}`);
  const data = await responce.json();
  console.log('saadads', data);
  return data.results as PersonsSW[];
};