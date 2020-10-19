import React from 'react';
import WriteTemplate from '../components/write/WriteTemplate';
import Responsive from '../components/common/Responsive';
import WriteActionButtonsContainer from '../containers/write/WriteActionButtonsContainer';
import PostWirteForm from '../containers/write/PostWriteForm';

const WritePage = () => {
  return (
    <Responsive>
      <WriteTemplate>
        <PostWirteForm />
        <WriteActionButtonsContainer />
      </WriteTemplate>
    </Responsive>
  );
};

export default WritePage;
