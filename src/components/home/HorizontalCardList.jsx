import styled from 'styled-components';
import RecipeCard from '../common/RecipeCard';
import { useUserStore } from '../../zustand/userStore';
import theme from '../../styles/theme'

const HorizontalCardList = ({ label, icon, list = [] }) => {
  const { isAuthenticated } = useUserStore();

  return (
    <StListSection>
      <h1>
        {label} {icon}
      </h1>
      <StHrline />
      {/* map part to be added later */}
      <StListWrapper>
        {isAuthenticated ? (
          <>
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
          </>
        ) : (
          <StP>저장된 레시피가 없습니다</StP>
        )}
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
`;

const StHrline = styled.hr`
  border: 2px solid var(--color-black);
  width: 100%;
`;

const StListWrapper = styled.ul`
  padding-top: 10px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;

  @media ${theme.device.start} {
    grid-template-columns: repeat(6, 1fr);
  }
  @media ${theme.device.laptop} {
    grid-template-columns: repeat(4, 1fr);
  }
  @media ${theme.device.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }

  li {
    transition: transform 0.2s, box-shadow 0.2s;
    &:hover {
      border: var(--color-primary) 1px solid;
      box-shadow: rgba(0, 0, 0, 0.6) 0px 4px 8px;
      transform: translateY(-7px);
    }
  }
`;

const StP = styled.p`
  margin-top: 20px;
`
