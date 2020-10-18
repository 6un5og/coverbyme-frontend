import React from 'react';
import WriteTemplate from '../components/write/WriteTemplate';
import WriteAuthForm from '../components/write/WriteAuthForm';
import Responsive from '../components/common/Responsive';
import WriteActionButtonsContainer from '../containers/write/WriteActionButtonsContainer';

const WritePage = () => {
  return (
    <Responsive>
      <WriteTemplate>
        <WriteAuthForm type="Write" />
        <WriteActionButtonsContainer />
      </WriteTemplate>
    </Responsive>
  );
};

export default WritePage;
