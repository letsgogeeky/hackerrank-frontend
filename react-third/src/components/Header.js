import {Navbar, Container, Nav} from 'react-bootstrap';

export function Header(){
    return (
        <Navbar>
      <Container>
        <Navbar.Brand>
          Hackerrank
        </Navbar.Brand>
        <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
      </Nav>
      </Container>
    </Navbar>
    )
}

export function HugeHeader() {
    return (
        <h1>I'm big</h1>
    )
}

