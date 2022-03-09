import Header from '../components/header';
import Footer from '../components/footer';
import styled from '@emotion/styled/macro';

const Title = styled.h1`
  text-align: center;
  padding: 10px;
`;

function Events() {
  return (
    <div>
	  <Header></Header>
      <Title>Events</Title>
      <Footer></Footer>
    </div>
  );
}

export default Events;