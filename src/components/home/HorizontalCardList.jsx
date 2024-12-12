import styled from 'styled-components';
import RecipeCard from '../common/RecipeCard';

const HorizontalCardList = ({ label, icon, list = [] }) => {
  return (
    <StListSection>
      <h1>
        {label} {icon}
      </h1>
      <StHrline />
      {/* map part to be added later */}
      <StListWrapper>
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </StListWrapper>
    </StListSection>
  );
};

export default HorizontalCardList;

const StListSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0px;
	width: var(--inner-width);
`

const StHrline = styled.hr`
  border: 2px solid var(--color-black);
	width: 100%;
`;

const StListWrapper = styled.div`
  display: flex;
  flex-direction: row;
`
