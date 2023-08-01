import React from 'react';
import {
  HomeDescr,
  HomeTitle,
  StyledHomeDiv,
} from './StyledPages/StyledHomePage';

const Home = () => {
  return (
    <StyledHomeDiv>
      <div>
        <HomeTitle>Hi there 👋🏻</HomeTitle>
        <HomeDescr>
          Welcome to Phonebook app. <br />
          Here you can create your personal account and manage your contacts.
          For your privacy we made protect Contacts page so unwanted guests will
          not be able to see your personal data. <br />
        </HomeDescr>
      </div>
    </StyledHomeDiv>
  );
};

export default Home;
