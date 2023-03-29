import { Monster } from '../../routes/types';

export function getData() {
  const monstersJson = localStorage.getItem('monsters');
  console.log(monstersJson)
  const monstersData = JSON.parse(monstersJson ?? '[]') as Monster[];
  return { monstersData };
}
