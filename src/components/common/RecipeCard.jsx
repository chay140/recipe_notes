import { CiHeart } from 'react-icons/ci';
import styled from 'styled-components';

const defaultRecipe = {
  id: 0,
  title: 'test recipe',
  content:
    'Geckos are a group of usually small, usually nocturnal lizards. They are found on every continent except Antarctica.',
  user_id: 230,
  pictures: ['', '', ''],
};

const RecipeCard = ({ recipe = defaultRecipe }) => {
  return (
    <StCard>
      <StTitle>{recipe.title}</StTitle>
      <img src="/cutlery.svg" alt="no food image" />
      <p>{recipe.content}</p>
      <StLikeNums>
        <CiHeart size="30px" /> 56
      </StLikeNums>
    </StCard>
  );
};

export default RecipeCard;

const StCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 200px;
  margin: 20px 0;
  padding: 20px;

  background-color: var(--color-white);
  border-radius: var(--default-radius);
  border: 1px solid var(--color-gray3);
  font-size: 12px;

  img {
    width: 150px;
    height: auto;
  }

	p {
		margin: 5px 0;
	}
`;

const StTitle = styled.p`
  font-size: 20px;
  font-weight: 300;
`;

const StLikeNums = styled.p`
	text-align: center;
`
