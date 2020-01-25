import React from 'react';
import styled from 'styled-components';

import { Header } from './components';
import { ViewTracker } from './pages';

const ContentDiv = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 840px;
  margin: auto;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const PageDiv = styled.div`
  width: 100%;
`;

const App = () => {
  return (
    <>
      <Header />
      <ContentDiv>
        <PageDiv>
          <ViewTracker />
        </PageDiv>
      </ContentDiv>
    </>
  );
};

export default App;
