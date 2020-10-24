import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import WriteForm from '../../components/write/WriteForm';
import { changeField, initialize, writePost } from '../../modules/write';

const PostWirteForm = () => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { write } = useSelector(({ write }) => ({
    write,
  }));

  const history = useHistory();

  const onChange = (e) => {
    const { name, value } = e.target;

    dispatch(
      changeField({
        key: name,
        value,
      }),
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const {
      title,
      youtubeLink,
      description,
      originalTitle,
      originalSinger,
      category,
    } = write;
    if ([title, youtubeLink, originalTitle, originalSinger].includes('')) {
      setError('빈 칸을 모두 입력하세요');
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

  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);

  useEffect(() => {
    if (write.postError) {
      if (write.postError.response.status === 400) {
        setError('잘못된 양식입니다.');
        return;
      }
      setError('게시물 작성 실패');
      return;
    }

    if (write.post) {
      console.log('게시물 작성 성공');
      console.log(write.post);
    }
  }, [write.postError, write.post]);

  useEffect(() => {
    if (write.post) {
      history.push('/');
    }
  }, [history, write.post]);

  return (
    <WriteForm
      form={write}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};
// TODO: button fix
export default PostWirteForm;
