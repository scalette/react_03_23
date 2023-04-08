import { Monster, PersonsSW } from '../../routes/types';
import { CardContainer } from './card.styles';

type CardProps = {
  monster: PersonsSW;
  monsterId: number;
  setIsModalOpen: (value: boolean) => void;
  setMonster: (monster: PersonsSW) => void;
};

const Card = ({ monster, monsterId, setIsModalOpen, setMonster }: CardProps) => {
  const { name, created, starships, homeworld, gender } = monster;
  const onClickHandler = () => {
    setMonster(monster);
    setIsModalOpen(true);
  };
  return (
    <CardContainer key={monsterId} onClick={onClickHandler}>
      <img
        src={`https://robohash.org/${monsterId}?set=set1&size=280x280`}
        alt={`monster ${name}`}
      />
      <h2>{name}</h2>
    </CardContainer>
  );
};

export default Card;
