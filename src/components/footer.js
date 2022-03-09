import React from 'react';
import { MDBFooter, MDBContainer, MDBIcon } from 'mdb-react-ui-kit';
import styled from '@emotion/styled/macro';

const StyledFooter = styled(MDBFooter)`
	position: relative;
	bottom: 0;
	width: 100%;
	margin-top: 25px;
`;

const CopyrightLink = styled.a`
	text-decoration: none;
`;

export default function Footer() {
  return (
    <StyledFooter className='bg-dark text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          
		  <a className='btn btn-outline-light btn-floating m-1' href='https://www.facebook.com/sharer/sharer.php?u=www.MarvelComicWiki.com' role='button'>
			<MDBIcon fab icon="facebook-f" />
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='https://twitter.com/intent/tweet?url=www.MarvelComicWiki.com' role='button'>
            <MDBIcon fab icon='twitter' />
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='https://www.instagram.com/' role='button'>
            <MDBIcon fab icon='instagram' />
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='https://www.linkedin.com/shareArticle?mini=true&url=www.MarvelComicWiki.com&title=Marvel%20Comic%20Wiki&summary=&source=' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='https://github.com/osu-cs499-w22/final-project-marvel-comic-wiki' role='button'>
            <MDBIcon fab icon='github' />
          </a>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 Copyright:
        <CopyrightLink className='text-white' href="home">
		  &nbsp;MarvelComicWiki.com
		</CopyrightLink>
      </div>
    </StyledFooter>
  );
}