import Header from '../components/header';
import Footer from '../components/footer';
import Spinner from '../components/spinner';
import ErrorContainer from '../components/errorContainer';
import CharacterModal from '../components/characterModal';

import useMarvelSearch from '../hooks/useMarvelSearch';

import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled/macro';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { MDBIcon } from "mdb-react-ui-kit";

const PageContainer = styled.div`
  background: ${props => props.theme ? 'white' : '#181A1B'};
`;

const Title = styled.h1`
  text-align: center;
  padding: 10px;
  margin-bottom: -42px;
  @media (max-width: 700px) {
    margin-bottom: 0px;
  }
  color: ${props => props.theme ? 'black' : '#E8E6E3'};
`;

const Loading = styled.div`
  text-align: center;
  padding-top: 50px;
`;

const StyledContainer = styled(Container)`
  max-width: 95%;
  background: ${props => props.theme ? 'white' : '#181A1B'};
`;

const StyledCard = styled(Card)`
  border: 1px solid rgba(0, 0, 0, 0.2);
  &:hover {
    transform: scale(1.05);
  }
`;

const StyledCardBody = styled(Card.Body)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100px;
  background: ${props => props.theme ? 'white' : '#181A1B'};
`;

const StyledCardTitle = styled(Card.Title)`
  text-align: center;
  padding-bottom: 5px;
  color: ${props => props.theme ? 'black' : '#E8E6E3'};
`;

const StyledLongCardTitle = styled(Card.Title)`
  text-align: center;
  padding-bottom: 5px;
  font-size: 0.97rem;
  color: ${props => props.theme ? 'black' : '#E8E6E3'};
`;

const StyledForm = styled.form`
  text-align: right;
  padding-right: 5px;
  padding-bottom: 25px;
  @media (max-width: 700px) {
    text-align: center;
    padding-right: 0px;
  }
`;

const StyledInput = styled.input`
  border: 0;
  border-bottom: 1px solid grey;
  &:focus {
    outline: none;
  }
  color: ${props => props.theme ? 'black' : '#E8E6E3'};
  background: ${props => props.theme ? 'white' : '#181A1B'};
`;

const StyledIcon = styled(MDBIcon)`
  margin-right: 5px;
  filter: ${props => props.theme ? 'initial' : 'invert(0.85)'};
`;

const StyledBtnsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
`;

const StyledButton = styled(Button)`
  margin-right: 10px;
  margin-left: 10px;
  border: 1px solid;
  &:hover {
    border-color: rgba(0, 0, 0, .125);
    background-color: #efefef;
  }
  color: ${props => props.theme ? 'black' : '#E8E6E3'};
  background: ${props => props.theme ? 'white' : '#181E1F'};
  border-color: ${props => props.theme ? 'rgba(0, 0, 0, .125);' : '#8C8273'};
  &:disabled {
    color: ${props => props.theme ? 'black' : '#E8E6E3'};
    background: ${props => props.theme ? 'white' : '#181E1F'};
    border-color: ${props => props.theme ? 'rgba(0, 0, 0, .125);' : '#8C8273'};
  }
`;

const StyledSearch = styled.button`
  border:none;
  background-color: Transparent;
  background-repeat:no-repeat;
  border: none;
`;

function Characters() {
  
  const [ themeMode, setThemeMode ] = React.useState(true);
  
  const [ offset, setOffset ] = useState(0);
  const baseUrl = `https://gateway.marvel.com/v1/public/characters?offset=${offset*20}&`; // marvel api gives characters in 20 character chunks
  const [ inputQuery, setInputQuery ] = useState('') 
  const [ url, setUrl ] = useState(baseUrl);

  useEffect(() => { // changes the URL depending on what the user searched for
      if (inputQuery === '') {
        setUrl(baseUrl); // use base URL when user doesnt search for a specific character
      }
      else {        
        setUrl(`${baseUrl}nameStartsWith=${inputQuery}&`); // change URL when user searches for a specific character
      }
    }, [inputQuery, offset])

  const [ characters, loadingAll, errorAll ] = useMarvelSearch(url);
  const [ characterName, setCharacterName ] = useState('');
  const [ characterDescription, setCharacterDescription ] = useState('');
  const [ characterComics, setCharacterComics ] = useState([]);
  const [ characterEvents, setCharacterEvents ] = useState([]);
  const [ characterSeries, setCharacterSeries ] = useState([]);
  const [ characterToSearch, setCharacterToSearch] = useState(''); // used for the search bar
  const [ modalShow, setModalShow ] = React.useState(false);
 
  return (
    <PageContainer theme={themeMode}>
	  <Header themeMode={themeMode} setThemeMode={setThemeMode}></Header>

      <Title theme={themeMode}>Characters</Title>
      
      {loadingAll ? ( <Loading> <Spinner /> </Loading> ) : (
        
        <StyledContainer theme={themeMode}>
          
          <StyledForm onSubmit={(e) => {
            e.preventDefault();
            setOffset(0); // reset off set when the user choses a specific character so that they get characters in order
            setInputQuery(characterToSearch);
          }}>
            <StyledSearch type="submit"><StyledIcon theme={themeMode} icon="search"/></StyledSearch>
            <StyledInput theme={themeMode} placeholder= 'Enter a character name ' onChange={e => setCharacterToSearch(e.target.value)} /> 
          </StyledForm>
         
          <Row className="row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-xl-5 g-4">
            {characters.map(character =>
              <Col key={character.id}>
                <StyledCard onClick={() => {
                  setCharacterName(character.name);
                  setCharacterDescription(character.description);
                  setCharacterComics(character.comics.items);
                  setCharacterEvents(character.events.items);
                  setCharacterSeries(character.series.items);
                  setModalShow(true);
                }}>
                  <img src={`${character.thumbnail.path}/standard_fantastic.${character.thumbnail.extension}`}className="card-img-top"alt=""></img>
                  <StyledCardBody theme={themeMode}>
                    {character.name.length > 40 ? 
                      <StyledLongCardTitle theme={themeMode}>{character.name}</StyledLongCardTitle> 
                      : 
                      <StyledCardTitle theme={themeMode}>{character.name}</StyledCardTitle>
                    }
                  </StyledCardBody>
                </StyledCard>
              </Col>
            )}
          </Row>
          
          <CharacterModal
            theme={themeMode}
            name={characterName}
            description={characterDescription || "Not Available"}
            comics={characterComics}
            events={characterEvents}
            series={characterSeries}
            show={modalShow} 
            onHide={() => setModalShow(false)} 
          />
          
          <StyledBtnsContainer>
            
            <StyledButton 
              theme={themeMode}
              disabled={offset === 0}
              variant="light"
              onClick={() => offset !== 0 ? setOffset(offset - 1) : setOffset(offset)}
            >
              &lt; Previous
            </StyledButton>
            
            <StyledButton
              theme={themeMode}
              disabled={characters.length < 20}
              variant="light"
              onClick={() => setOffset(offset + 1)}
            >
              Next &gt;
            </StyledButton>
            
          </StyledBtnsContainer>
          
        </StyledContainer>
      )}
      
      {errorAll && <ErrorContainer>Error!</ErrorContainer>}
      
      <Footer></Footer>
    </PageContainer>
  )
}

export default Characters;