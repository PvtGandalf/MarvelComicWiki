import Header from '../components/header';
import Footer from '../components/footer';
import styled from '@emotion/styled/macro';

const Title = styled.h1`
  text-align: center;
  padding: 10px;
`;

function Creators() {
  return (
    <div>
	  <Header></Header>
      <Title>Creators</Title>
      <Footer></Footer>
    </div>
  );
}

export default Creators;