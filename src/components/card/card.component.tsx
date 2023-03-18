import { Monster } from "../../routes/types";
import { CardContainer } from "./card.styles";

type CardProps = {
  monster: Monster;
};

const Card = ({ monster }: CardProps) => {
  const { id, name, email } = monster;
  return (
    <CardContainer key={id}>
      <img src={`https://robohash.org/${id}?set=set1&size=180x180`} alt={`monster ${name}`} />
      <h2>{name}</h2>
      <p>{email}</p>
    </CardContainer>
  );
};

export default Card;
