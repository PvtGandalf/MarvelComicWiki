import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

function Header() {
	
	return (
		<Navbar bg="dark" expand="lg" variant="dark">
			<Container fluid>
				<Navbar.Brand href="home">Marvel Comic Wiki</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="characters">Characters</Nav.Link>
						<Nav.Link href="comics">Comics</Nav.Link>
						<Nav.Link href="creators">Creators</Nav.Link>
						<Nav.Link href="events">Events</Nav.Link>
						<Nav.Link href="series">Series</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Header;