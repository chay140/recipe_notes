import React from 'react';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <StFooter>
      <StFooterContent>
        <StA
          href="https://github.com/chay140/recipe_notes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StGitHubIcon />
          <p>레시피 노트</p>
        </StA>

        {/* copy right */}
        <StCopyRightText>
          <p>© 2024 Recipe Notes. All rights reserved.</p>
        </StCopyRightText>
      </StFooterContent>
    </StFooter>
  );
};

export default Footer;

const StFooter = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;

  width: 100%;
  height: 50px;
  background: var(--color-secondary);
`;

const StFooterContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0px auto;
  width: var(--inner-width);
  font-size: 12px;
`;

const StGitHubIcon = styled(FaGithub)`
  font-size: 24px;
  margin-right: 5px;
`;

const StA = styled.a`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

const StCopyRightText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;

  height: 30px;
`;
