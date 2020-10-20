import React, { useEffect } from 'react';
import WriteActionButtons from '../../components/write/WriteActionButtons';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { writePost } from '../../modules/write';

const WriteActionButtonsContainer = ({ history }) => {
  const dispatch = useDispatch();
  const {
    title,
    youtubeLink,
    description,
    originalTitle,
    originalSinger,
    post,
    postError,
  } = useSelector(({ write }) => ({
    title: write.title,
    youtubeLink: write.youtubeLink,
    description: write.description,
    originalTitle: write.originalTitle,
    originalSinger: write.originalSinger,
    post: write.post,
    postError: write.postError,
  }));

  const onPublish = () => {
    dispatch(
      writePost({
        title,
        youtubeLink,
        description,
        originalTitle,
        originalSinger,
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
  return <WriteActionButtons onPublish={onPublish} onCancel={onCancel} />;
};

export default withRouter(WriteActionButtonsContainer);
