import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const WriteAuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
  }
`;

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid ${palette.gray[7]};
  }
  & + & {
    margin-top: 1rem;
  }
`;

const textMap = {
  write: '게시물작성',
};

const WriteAuthForm = ({ type }) => {
  const text = textMap[type];
  return (
    <WriteAuthFormBlock>
      <h3>{text}</h3>
      <form>
        <StyledInput autoComplete="title" name="title" placeholder="제목" />
        <StyledInput
          autoComplete="youtubeLink"
          name="youtubeLink"
          placeholder="유튜브 영상 링크"
          type="string"
        />
        <StyledInput
          autoComplete="description"
          name="description"
          placeholder="간단한 영상 설명"
        />
        <StyledInput
          autoComplete="originalTitle"
          name="originalTitle"
          placeholder="원곡 제목"
        />
        <StyledInput
          autoComplete="originalSinger"
          name="originalSinger"
          placeholder="원곡 가수"
        />
      </form>
    </WriteAuthFormBlock>
  );
};

export default WriteAuthForm;
