import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const WriteTemplateBlock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: ${palette.gray[2]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WhiteBox = styled.div`
  .write-area {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
  }
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  padding: 2rem;
  width: 360px;
  background: white;
  border-radius: 2px;
`;

const WriteTemplate = ({ children }) => {
  return (
    <WriteTemplateBlock>
      <WhiteBox>
        <div className="write-area">게시물 작성 보드</div>
        {children}
      </WhiteBox>
    </WriteTemplateBlock>
  );
};

export default WriteTemplate;
