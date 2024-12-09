import React from 'react';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <StFooter>
      <StFooterContent>
        <StA>
          <StGitHubIcon />
          <h4>레시피 노트</h4>
        </StA>

        {/* copy right */}
        <StCopyRightText>
          <h4>© 2024 Recipe Notes. All rights reserved.</h4>
        </StCopyRightText>
      </StFooterContent>
    </StFooter>
  );
};

export default Footer;

const StFooter = styled.footer`
  width: 100%;
  height: 50px;
  background: var(--color-secondary);

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
`;

const StFooterContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0px 50px;
  width: 98%;
`;

const StGitHubIcon = styled(FaGithub)`
  font-size: 30px;
  margin-right: 5px;
`;

const StA = styled.a`
  color: var(--color-white);
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

const StCopyRightText = styled.div`
  height: 30px;

  color: var(--color-white);
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;
