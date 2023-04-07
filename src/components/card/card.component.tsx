import { Monster, PersonsSW } from '../../routes/types';
import { CardContainer } from './card.styles';

type CardProps = {
  monster: PersonsSW;
  monsterId: number;
  setIsModalOpen: (value: boolean) => void;
};

const Card = ({ monster, monsterId, setIsModalOpen }: CardProps) => {
  const { name, created, starships, homeworld, gender } = monster;
  return (
    <CardContainer key={monsterId} onClick={() => setIsModalOpen(true)}>
      <img src={`https://robohash.org/${monsterId}?set=set1&size=280x280`} alt={`monster ${name}`} />
      <h2>{name}</h2>
    </CardContainer>
  );
};

export default Card;
