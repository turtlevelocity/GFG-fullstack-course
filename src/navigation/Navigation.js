import Nav from 'react-bootstrap/Nav';

const Navigation = () => {
  return (
    <Nav variant="underline">
      <Nav.Item>
        <Nav.Link href="/timeline">Timeline</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href='/'>Friends</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link >About</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navigation;