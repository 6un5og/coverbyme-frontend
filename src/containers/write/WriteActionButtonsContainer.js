import React, { useEffect } from 'react';
import WriteActionButtons from '../../components/write/WriteActionButtons';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { writePost, updatePost } from '../../modules/write';

const WriteActionButtonsContainer = ({ history }) => {
  const dispatch = useDispatch();
  const {
    title,
    youtubeLink,
    description,
    originalTitle,
    originalSinger,
    category,
    post,
    postError,
    originalPostId,
  } = useSelector(({ write }) => ({
    title: write.title,
    youtubeLink: write.youtubeLink,
    description: write.description,
    originalTitle: write.originalTitle,
    originalSinger: write.originalSinger,
    category: write.category,
    post: write.post,
    postError: write.postError,
    originalPostId: write.originalPostId,
  }));

  const onPublish = () => {
    if (originalPostId) {
      dispatch(
        updatePost({
          title,
          youtubeLink,
          description,
          originalTitle,
          originalSinger,
          category,
          id: originalPostId,
        }),
      );
      return;
    }
    dispatch(
      writePost({
        title,
        youtubeLink,
        description,
        originalTitle,
        originalSinger,
        category,
      }),
    );
  };

  const onCancel = () => {
    history.goBack();
  };

  useEffect(() => {
    if (post) {
      const {
        _id,
        author: { username },
      } = post;
      history.push(`/@${username}/${_id}`);
    }
    if (postError) {
      console.log(postError);
    }
  }, [history, post, postError]);
  return (
    <WriteActionButtons
      onPublish={onPublish}
      onCancel={onCancel}
      isEdit={!!originalPostId}
    />
  );
};

export default withRouter(WriteActionButtonsContainer);
