import React from 'react';
import styled from 'styled-components';

import { LiveEdit } from '../components';
import theme from '../utils/theme';
import { ViewTracker } from '../libs';

const Wrapper = styled.div`
  width: 300px;
  margin: auto;
  padding: 10px;
`;

const scope = { ViewTracker, Wrapper };

const ViewTrackerDemo = `

render(
  <Wrapper>
    <ViewTracker />
  </Wrapper>
)
`;

const Pie = () => {
  return (
    <>
      <LiveEdit noInline code={ViewTrackerDemo} scope={scope} theme={theme} />
    </>
  );
};

export default Pie;
