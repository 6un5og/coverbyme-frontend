import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const WriteFormBlock = styled.div`
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

const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

const WriteForm = ({ form, onSubmit, onChange, error }) => {
  return (
    <WriteFormBlock>
      <h3>게시물 작성</h3>
      <form onSubmit={onSubmit}>
        <StyledInput
          autoComplete="title"
          name="title"
          placeholder="제목"
          value={form.title}
          onChange={onChange}
        />
        <StyledInput
          autoComplete="youtubeLink"
          name="youtubeLink"
          placeholder="유튜브 영상 링크"
          type="string"
          value={form.youtubeLink}
          onChange={onChange}
        />
        <StyledInput
          autoComplete="description"
          name="description"
          placeholder="간단한 영상 설명"
          value={form.description}
          onChange={onChange}
        />
        <StyledInput
          autoComplete="originalTitle"
          name="originalTitle"
          placeholder="원곡 제목"
          value={form.originalTitle}
          onChange={onChange}
        />
        <StyledInput
          autoComplete="originalSinger"
          name="originalSinger"
          placeholder="원곡 가수"
          value={form.originalSinger}
          onChange={onChange}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </form>
    </WriteFormBlock>
  );
};

export default WriteForm;
