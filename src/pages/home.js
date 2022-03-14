import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import styled from '@emotion/styled/macro';

const PageContainer = styled.div`
  background: ${props => props.theme ? 'white' : '#181A1B'};
`;

const Title = styled.h1`
  text-align: center;
  padding: 20px;
  color: ${props => props.theme ? 'black' : '#D1CDC7'};
`;

const MarvelImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;

const Description = styled.h2`
  text-align: center;
  padding-top: 40px;
  color: ${props => props.theme ? 'black' : '#D1CDC7'};
`;

const Information = styled.p`
  text-align: center;
  padding-top: 10px;
  padding-right: 5%;
  padding-left: 5%;
  color: ${props => props.theme ? 'black' : '#D1CDC7'};
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: ${props => props.theme ? 'white' : '#181A1B'};
`;

const FooterContainer = styled.div`
  height: 50px;
  margin-top: auto;
`;

function Home() {
    
  const [ themeMode, setThemeMode ] = React.useState(true);
    
  return (
    <PageContainer theme={themeMode}>
	  <Header themeMode={themeMode} setThemeMode={setThemeMode}></Header>
      
      <BodyContainer theme={themeMode}>
        <Title theme={themeMode}>Welcome to the Marvel Comic Wiki</Title>
        <MarvelImage src="https://wallpapercave.com/wp/wp1829345.jpg" alt="" width="50%"/>
        <Description theme={themeMode}>This is your one-stop shop for all Marvel related information.</Description>
        <Information theme={themeMode}>Marvel was started in 1939 by Martin Goodman as Timely Comics, and by 1951 had generally become known as Atlas Comics. The Marvel era began in 1961, the year that the company launched The Fantastic Four and other superhero titles created by Stan Lee, Jack Kirby, Steve Ditko and many others. The Marvel brand, which had been used over the years, was solidified as the company's primary brand.</Information>
        
        <Description theme={themeMode}>Features</Description>
        <Information theme={themeMode}>View all characters, comics, creators, events, or series within the Marvel Universe.</Information>
        <Information theme={themeMode}>Search for a character, comic, creator, event, or series by their name or title.</Information>
        <Information theme={themeMode}>Search for a group of characters, comics, creators, events, or series by their name or title.</Information>
        <Information theme={themeMode}>View detailed descriptions of characters, comics, creators, events, or series, along with related work.</Information>
      
      </BodyContainer>
      
      <FooterContainer>
        <Footer></Footer>
      </FooterContainer>
      
	</PageContainer>
  );
}

export default Home;