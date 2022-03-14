import Header from '../components/header';
import Footer from '../components/footer';
import Spinner from '../components/spinner';
import ErrorContainer from '../components/errorContainer';
import CreatorModal from '../components/creatorsModal';

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

function Creators() {
  
  const [ themeMode, setThemeMode ] = React.useState(true);
  
  const [offset, setOffset] = useState(0);
  const baseUrl = `https://gateway.marvel.com/v1/public/creators?offset=${offset*20}&`; // marvel api gives creators in 20 creator chunks
  const [ inputQuery, setInputQuery] = useState('') 
  const [ url, setUrl] = useState(baseUrl);

  useEffect(() => { // changes the URL depending on what the user searched for
      if (inputQuery === '') {
        setUrl(baseUrl); // use base URL when user doesnt search for a specific creator
      }
      else {        
        setUrl(`${baseUrl}nameStartsWith=${inputQuery}&`); // change URL when user searches for a specific creator
      }
    }, [inputQuery, offset])

  const [ creators, loadingAll, errorAll ] = useMarvelSearch(url);
  const [ creatorName, setCreatorName ] = useState('');
  const [ creatorStories, setCreatorStories ] = useState([]);
  const [ creatorComics, setCreatorComics ] = useState([]);
  const [ creatorSeries, setCreatorSeries ] = useState([]);
  const [ creatorEvents, setCreatorEvents ] = useState([]);
  const [ creatorToSearch, setCreatorToSearch ] = useState(''); // used for the search bar
  const [ modalShow, setModalShow ] = React.useState(false);
  
  return (
    <PageContainer theme={themeMode}>
	  <Header themeMode={themeMode} setThemeMode={setThemeMode}></Header>
      
      <Title theme={themeMode}>Creators</Title>
      
      {loadingAll ? ( <Loading> <Spinner /> </Loading> ) : (
        
        <StyledContainer theme={themeMode}>
          
          <StyledForm onSubmit={(e) => {
            e.preventDefault();
            setOffset(0); // reset off set when the user choses a specific creator so that they get creators in order
            setInputQuery(creatorToSearch);
          }}>
            <StyledSearch type="submit"><StyledIcon theme={themeMode} icon="search"/></StyledSearch>
            <StyledInput theme={themeMode} placeholder= 'Enter a creator name ' onChange={e => setCreatorToSearch(e.target.value)} /> 
          </StyledForm>
        
          <Row className="row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-xl-5 g-4">
            {creators.map(creator =>
              <Col key={creator.id}>
                <StyledCard onClick={() => {
                  setCreatorName(creator.fullName);
                  setCreatorStories(creator.stories.items);
                  setCreatorComics(creator.comics.items);
                  setCreatorSeries(creator.series.items);
                  setCreatorEvents(creator.events.items);
                  setModalShow(true);
                }}>
                  <img src={`${creator.thumbnail.path}/landscape_incredible.${creator.thumbnail.extension}`}className="card-img-top"alt=""></img>
                  <StyledCardBody theme={themeMode}>
                    {creator.fullName.length > 40 ? 
                      <StyledLongCardTitle theme={themeMode}>{creator.fullName}</StyledLongCardTitle> 
                      : 
                      <StyledCardTitle theme={themeMode}>{creator.fullName}</StyledCardTitle>
                    }
                  </StyledCardBody>
                </StyledCard>
              </Col>
            )}
          </Row>
          
          <CreatorModal 
            theme={themeMode}
            name={creatorName}
            stories={creatorStories}
            comics={creatorComics}
            series={creatorSeries}
            events={creatorEvents}
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
              disabled={creators.length < 20}
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

export default Creators;