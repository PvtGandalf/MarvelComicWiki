import Header from '../components/header';
import Footer from '../components/footer';
import styled from '@emotion/styled/macro';

const Title = styled.h1`
  text-align: center;
  padding: 10px;
`;

function Comics() {
  return (
    <div>
	  <Header></Header>
      <Title>Comics</Title>
      <Footer></Footer>
    </div>
  );
}

export default Comics;