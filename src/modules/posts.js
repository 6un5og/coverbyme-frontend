import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as postsAPI from '../lib/api/posts';
import { takeLatest } from 'redux-saga/effects';

const [
  LIST_POST,
  LIST_POST_SUCCESS,
  LIST_POST_FAILURE,
] = createRequestActionTypes('posts/LIST_POSTS');

export const listPosts = createAction(LIST_POST, ({ page, username }) => ({
  page,
  username,
}));

const listPostsSaga = createRequestSaga(LIST_POST, postsAPI.listPosts);
export function* postsSaga() {
  yield takeLatest(LIST_POST, listPostsSaga);
}

const initialState = {
  posts: null,
  error: null,
};

const posts = handleActions(
  {
    [LIST_POST_SUCCESS]: (state, { payload: posts }) => ({
      ...state,
      posts,
    }),
    [LIST_POST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default posts;
