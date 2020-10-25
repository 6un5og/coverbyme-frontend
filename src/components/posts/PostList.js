import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import palette from '../../lib/styles/palette';
import SubInfo from '../common/SubInfo';
import { Link } from 'react-router-dom';
import youtubeIdParse from '../../lib/youtubeIdParse';

const PostListBlock = styled(Responsive)`
  margin-top: 3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
`;

const WritePostButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
`;

const PostItemBlock = styled.div`
  width: calc(33% - 2rem);
  padding: 1rem;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 4px 16px 0px;
  margin: 1rem;

  &:first-child {
    padding-top: 0;
  }
  & + & {
    border-top: 1px solid ${palette.gray[2]};
  }

  h4 {
    margin: 0.5rem 0;
  }
  img {
    width: 100%;
    height: auto;
  }
  h2 {
    font-size: 1.5rem;
    margin-bottom: 0;
    margin-top: 0;
    &:hover {
      color: ${palette.gray[6]};
    }
  }
  p {
    margin-top: 2rem;
  }
`;

const PostItem = ({ post }) => {
  const {
    _id,
    author: { username },
    createdAt,
    description,
    originalSinger,
    originalTitle,
    title,
    category,
    youtubeLink,
  } = post;
  const v_id = youtubeIdParse(youtubeLink);

  return (
    <PostItemBlock>
      <h4>{`CoveredBy[${category}]`}</h4>
      <Link to={`/@${username}/${_id}`}>
        <img
          src={`https://img.youtube.com/vi/${v_id}/0.jpg`}
          alt={youtubeLink}
        />
        <h2>{`${title} (${originalTitle} - ${originalSinger})`}</h2>
      </Link>
      <SubInfo username={username} publishedDate={createdAt} />
      <p>{description}</p>
    </PostItemBlock>
  );
};

const PostList = ({ posts, loading, error, showWriteButton }) => {
  // 에러 발생 시
  if (error) {
    return <PostListBlock>에러가 발생했습니다.</PostListBlock>;
  }

  return (
    <PostListBlock>
      <WritePostButtonWrapper>
        {showWriteButton && (
          <Button cyan to="/write">
            새 글 작성하기
          </Button>
        )}
      </WritePostButtonWrapper>
      {/* 로딩 중이 아니고, 포스트 배열이 존재할 때만 보여 줌 */}
      {!loading && posts && (
        <>
          {posts.map((post) => (
            <PostItem post={post} key={post._id} />
          ))}
        </>
      )}
    </PostListBlock>
  );
};

export default PostList;
