import React, { useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { MDBIcon } from "mdb-react-ui-kit";
import styled from '@emotion/styled/macro';

const NavbarContainer = styled.div`
	display: grid;
	grid-template-areas: "Brand Spacer Theme Toggle";
	grid-template-columns: auto calc(100vw - 320px) auto 55px;
	align-items: center;
	@media (min-width: 992px) {
		grid-template-areas: "Brand Spacer Nav Theme";
		grid-template-columns: auto auto auto calc(100vw - 580px);
	}
`;

const StyledNavbarBrand = styled(Navbar.Brand)`
	grid-area: Brand;
`;

const StyledIcon = styled(MDBIcon)`
	grid-area: Theme;
	justify-self: end;
	margin-right: 15px;
	&:hover {
    	cursor: pointer;
	}
	filter: ${props => props.theme ? 'hue-rotate(0deg) saturate(1) brightness(1)' : 'hue-rotate(350deg) saturate(100) brightness(1)'}
`;

const StyledNavbarToggle = styled(Navbar.Toggle)`
	grid-area: Toggle;
	justify-self: end;
`;

const StyledNav = styled(Nav)`
	grid-area: Nav;
`;

const Spacer = styled.div`
	grid-area: Spacer;
`;

function Header( {themeMode, setThemeMode} ) {
	
	function handleClick() {
    	setThemeMode(!themeMode);
	}
	
	// Persist current theme toggle through local storage
	useEffect(() => {
		setThemeMode(JSON.parse(window.localStorage.getItem('themeMode')));
	}, []);
	
	useEffect(() => {
		window.localStorage.setItem('themeMode', themeMode);
	}, [themeMode]);
	
	return (
		<Navbar bg="dark" expand="lg" variant="dark">
			<Container fluid>
				<NavbarContainer>
					<StyledNavbarBrand href="home">Marvel Comic Wiki</StyledNavbarBrand>
					<Spacer>&nbsp;</Spacer>
					<StyledNavbarToggle aria-controls="basic-navbar-nav" />
					<StyledIcon theme={themeMode} color="secondary" icon="adjust" onClick={handleClick} />
					<Navbar.Collapse id="basic-navbar-nav">
						<StyledNav className="me-auto">
							<Nav.Link href="characters">Characters</Nav.Link>
							<Nav.Link href="comics">Comics</Nav.Link>
							<Nav.Link href="creators">Creators</Nav.Link>
							<Nav.Link href="events">Events</Nav.Link>
							<Nav.Link href="series">Series</Nav.Link>
						</StyledNav>
					</Navbar.Collapse>
				</NavbarContainer>
			</Container>
		</Navbar>
	);
}

export default Header;