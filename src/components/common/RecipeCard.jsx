import { CiHeart } from 'react-icons/ci';
import styled from 'styled-components';

const defaultRecipe = {
  id: 0,
  title: 'test recipe lkjlkjlkjlkj qwoeifjoasidjf;alsdkfjf',
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
      <StContentWrapper>
        <p>{recipe.content}</p>
      </StContentWrapper>
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

  max-width: 250px;
  margin: 20px 0;
  padding: 20px;

  background-color: var(--color-white);
  border-radius: var(--default-radius);
  border: 1px solid var(--color-gray3);
  font-size: 12px;
  overflow: hidden;

  img {
    width: 150px;
    height: auto;
    border: 0.5px solid var(--color-gray2);
  }
`;

const StTitle = styled.p`
  align-self: flex-start;
  font-size: 20px;
  font-weight: 300;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  // ellipsis 를 해도 안되던 이슈 해결 과정
  width: 100%;
  box-sizing: border-box;
`;

const StContentWrapper = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  white-space: normal;
  overflow: hidden;
  word-break: keep-all;
  text-overflow: ellipsis;

  p {
    margin: 5px 0;
  }
`;

const StLikeNums = styled.p`
  text-align: center;
`;
