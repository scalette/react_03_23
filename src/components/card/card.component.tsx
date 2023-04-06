import { Monster, PersonsSW } from '../../routes/types';
import { CardContainer } from './card.styles';

type CardProps = {
  monster: PersonsSW;
  monsterId: number;
};

const Card = ({ monster, monsterId }: CardProps) => {
  const { name, created, starships, homeworld, gender, file } = monster;
  return (
    <CardContainer key={monsterId}>
      <img
        src={`https://robohash.org/${monsterId}?set=set1&size=180x180`}
        alt={`monster ${name}`}
      />
      <h2>{name}</h2>
      <p>Created: {created}</p>
      <p>Gender: {gender}</p>
      <p>Starships:</p>
      {starships.map((starship, index) => (
        <p key={index}>{starship}</p>
      ))}
      <p>Homeworld: {homeworld}</p>
    </CardContainer>
  );
};

export default Card;
