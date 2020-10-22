import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';
import qs from 'qs';

const PostViewerBlock = styled(Responsive)`
  margin-top: 4rem;
`;
const PostHead = styled.div`
  border-bottom: 1px solid ${palette.gray[2]};
  padding-bottom: 3rem;
  margin-bottom: 3rem;
  h1 {
    font-size: 3rem;
    line-height: 1.5;
    margin: 0;
  }
`;
const SubInfo = styled.div`
  margin-top: 1rem;
  color: ${palette.gray[6]};

  span + span:before {
    color: ${palette.gray[6]};
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    content: '\\B7';
  }
`;

const PostContent = styled.div`
  font-size: 1.3125rem;
  color: ${palette.gray[8]};
`;

const PostViewer = ({ post, error, loading, actionButtons }) => {
  if (error) {
    if (error.response && error.response.status === 404) {
      return <PostViewerBlock>존재하지 않는 포스트입니다.</PostViewerBlock>;
    }
    return <PostViewerBlock>오류 발생!</PostViewerBlock>;
  }

  if (loading || !post) {
    return null;
  }
  // TODO: get link, des, ori_singer, ori_title
  const {
    author: { username },
    createdAt,
    description,
    originalSinger,
    originalTitle,
    title,
    youtubeLink,
  } = post;

  const { v: v_id } = qs.parse(youtubeLink.split('?')[1]);

  return (
    <PostViewerBlock>
      <PostHead>
        <h1>{`${title} (${originalTitle} - ${originalSinger})`}</h1>
        <SubInfo>
          <span>
            <b>{username}</b>
          </span>
          <span>{new Date(createdAt).toLocaleDateString()}</span>
        </SubInfo>
      </PostHead>
      {actionButtons}
      <iframe
        title={title}
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${v_id}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <PostContent>{description}</PostContent>
    </PostViewerBlock>
  );
};

export default PostViewer;
