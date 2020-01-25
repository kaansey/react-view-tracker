import React from 'react';
import styled from 'styled-components';

import { LiveEdit } from '../components';
import theme from '../utils/theme';
import { ViewTracker } from '../libs';

const Wrapper = styled.div`
  width: %100;
  margin: auto;
  padding: 10px;
`;

const Content = styled.div`
  width: 80%;
  height: 300px;
  background-color: red;
  margin: auto;
`;

const scope = { ViewTracker, Wrapper, Content };

const ViewTrackerDemo = `
const onStartObserving = (entry) =>{
  console.log('onStartObserving',entry)
}

const onStopObserving = (entry) =>{
  console.log('onStopObserving', entry)
}

const onShow = (entry) =>{
  console.log('onShow', entry)
}

const onHide = (entry) =>{
  console.log('onHide', entry)
}

render(
  <Wrapper>
    <div style={{height: '900px'}}></div>
    <ViewTracker 
      onShow={onShow}
      onHide={onHide}
      onStartObserving={onStartObserving}
      onStopObserving={onStopObserving}
      once={false}
      visiblePercentage={1}
    >
      <Content/> 
    </ViewTracker>
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
