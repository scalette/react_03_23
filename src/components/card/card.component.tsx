import { Monster } from '../../routes/types';
import { CardContainer } from './card.styles';

type CardProps = {
  monster: Monster;
};

const Card = ({ monster }: CardProps) => {
  const { id, name, date, permitions, fruit, gender, file } = monster;
  return (
    <CardContainer key={id}>
      <img src={`https://robohash.org/${id}?set=set1&size=180x180`} alt={`monster ${name}`} />
      <h2>{name}</h2>
      <p>Date: {date}</p>
      <p>
        Permitions ReadWriteExecute: {permitions.read ? '+' : '-'}
        {permitions.write ? '+' : '-'} {permitions.execute ? '+' : '-'}
      </p>
      <p>Gender: {gender}</p>
      <p>Favourite fruit: {fruit}</p>
      <p>Files: {file}</p>
    </CardContainer>
  );
};

export default Card;
