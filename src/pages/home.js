import Header from '../components/header';
import Footer from '../components/footer';
import styled from '@emotion/styled/macro';

const Title = styled.h1`
  text-align: center;
  padding: 10px;
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
`;

const Information = styled.p`
  text-align: center;
  padding-top: 10px;
  padding-right: 5%;
  padding-left: 5%;
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const FooterContainer = styled.div`
  height: 50px;
  margin-top: auto;
`;

function Home() {
  return (
    <div>
	  <Header></Header>
      
      <BodyContainer>
        <Title>Welcome to the Marvel Comic Wiki</Title>
        <MarvelImage src="https://wallpapercave.com/wp/wp1829345.jpg" alt="" width="50%"/>
        <Description>This is your one-stop shop for all Marvel related information.</Description>
        <Information>Marvel was started in 1939 by Martin Goodman as Timely Comics, and by 1951 had generally become known as Atlas Comics. The Marvel era began in 1961, the year that the company launched The Fantastic Four and other superhero titles created by Stan Lee, Jack Kirby, Steve Ditko and many others. The Marvel brand, which had been used over the years, was solidified as the company's primary brand.</Information>
        
        <Description>Features</Description>
        <Information>View all characters, comics, creators, events, or series within the Marvel Universe.</Information>
        <Information>Search for a character, comic, creator, event, or series by their name or title.</Information>
        <Information>Search for a group of characters, comics, creators, events, or series by their name or title.</Information>
        <Information>View detailed descriptions of characters, comics, creators, events, or series, along with related work.</Information>
      
      </BodyContainer>
      
      <FooterContainer>
        <Footer></Footer>
      </FooterContainer>
      
	</div>
  );
}

export default Home;