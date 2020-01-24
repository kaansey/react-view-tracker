import React from 'react';
import styled from 'styled-components';

const MenuDiv = styled.div`
  width: 145px;
  padding: 24px 15px 0 0;
`;

const ContentDiv = styled.div`
  width: 130px;
  color: #718096;
  font-size: 13px;
`;

const Menu: React.SFC = () => {
  return (
    <MenuDiv>
      <ContentDiv></ContentDiv>
    </MenuDiv>
  );
};

export default React.memo(Menu);
