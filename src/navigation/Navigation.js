import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userInfo');
    navigate('/login');
  }


  return (
    <Nav variant="underline">
      <Nav.Item>
        <Nav.Link href="/timeline">Timeline</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href='/friends'>Friends</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href='/home'>Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navigation;