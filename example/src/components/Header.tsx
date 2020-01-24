import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  padding: 8px 0;
  border-bottom: 1px solid #edf2f7;
`;

const ContentDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 840px;
  margin: auto;
  height: 35px;
`;

const TitleDiv = styled.div`
  font-size: 16px;
`;

const LinkDiv = styled.div`
  color: #718096;
`;

const LinkA = styled.a`
  margin-left: 10px;
`;

const Header: React.SFC = () => {
  return (
    <HeaderWrapper>
      <ContentDiv>
        <TitleDiv>React View Tracker</TitleDiv>
        <LinkDiv>
          <LinkA href="https://github.com/kaansey/react-view-tracker">Github</LinkA>
          <LinkA href="https://www.npmjs.com/package/react-view-tracker">Npm</LinkA>
        </LinkDiv>
      </ContentDiv>
    </HeaderWrapper>
  );
};

export default React.memo(Header);
