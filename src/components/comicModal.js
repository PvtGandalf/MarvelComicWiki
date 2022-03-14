import { Modal, Button, Accordion } from 'react-bootstrap';
import styled from '@emotion/styled/macro';

const StyledModalHeader = styled(Modal.Header)`
  color: ${props => props.theme ? 'black' : '#E8E6E3'};
  background: ${props => props.theme ? 'white' : '#181A1B'};
  & .btn-close {
    filter: ${props => props.theme ? 'initial' : 'invert(1)'};
  };
`;

const StyledModalBody = styled(Modal.Body)`
  color: ${props => props.theme ? 'black' : '#E8E6E3'};
  background: ${props => props.theme ? 'white' : '#181A1B'};
`;

const StyledModalFooter = styled(Modal.Footer)`
  color: ${props => props.theme ? 'black' : '#E8E6E3'};
  background: ${props => props.theme ? 'white' : '#181A1B'};
`;

const StyledAccordionItem = styled(Accordion.Item)`
  color: ${props => props.theme ? 'black' : '#E8E6E3'};
  background: ${props => props.theme ? 'white' : '#181A1B'};
  & .accordion-button {
    color: ${props => props.theme ? 'black' : '#E8E6E3'};
    background: ${props => props.theme ? 'white' : '#181E1F'};
  };
  & .accordion-button::after {
    filter: ${props => props.theme ? 'initial' : 'invert(1)'};
  };
`;

const StyledModalTitle = styled(Modal.Title)`
	padding-left: 20px;
`;

export default function ComicModal(props) {
	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
			scrollable={true}
		>
		
			<StyledModalHeader theme={props.theme} closeButton>
				<StyledModalTitle id="contained-modal-title-vcenter">
					{props.title}
				</StyledModalTitle>
			</StyledModalHeader>
			
			<StyledModalBody theme={props.theme}>
			
				<Accordion flush>
					<StyledAccordionItem theme={props.theme} eventKey="Description">
						<Accordion.Header><h4>Description</h4></Accordion.Header>
						<Accordion.Body>
							<p>{props.description}</p>
						</Accordion.Body>
					</StyledAccordionItem>
				</Accordion>
			
				<Accordion flush>
					<StyledAccordionItem theme={props.theme} eventKey="Characters">
						<Accordion.Header><h4>Characters</h4></Accordion.Header>
						<Accordion.Body>
							{(!props.characters.length) ? 
								<p>Not Available</p>
								:
								<ul>
									{props.characters.map(item => 
										<li key={item.resourceURI}>{item.name}</li>
									)}
								</ul>
							}
						</Accordion.Body>
					</StyledAccordionItem>
				</Accordion>
			
				<Accordion flush>
					<StyledAccordionItem theme={props.theme} eventKey="Creators">
						<Accordion.Header><h4>Creators</h4></Accordion.Header>
						<Accordion.Body>
							{(!props.creators.length) ? 
								<p>Not Available</p>
								:
								<ul>
									{props.creators.map(item => 
										<li key={item.resourceURI}>{item.name}</li>
									)}
								</ul>
							}
						</Accordion.Body>
					</StyledAccordionItem>
				</Accordion>
			
				<Accordion flush>
					<StyledAccordionItem theme={props.theme} eventKey="Events">
						<Accordion.Header><h4>Events</h4></Accordion.Header>
						<Accordion.Body>
							{(!props.events.length) ? 
								<p>Not Available</p>
								:
								<ul>
									{props.events.map(item => 
										<li key={item.resourceURI}>{item.name}</li>
									)}
								</ul>
							}
						</Accordion.Body>
					</StyledAccordionItem>
				</Accordion>
			
			</StyledModalBody>
		  
			<StyledModalFooter theme={props.theme}>
				<Button onClick={props.onHide}>Close</Button>
			</StyledModalFooter>
		
		</Modal>
	);
}