import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// PostCard will take header(username), body
const PostCard = (props) => {
  const {user, date, body} = props;
  return (
  <Card>
    <Card.Header>
      {user}
      <Card.Text>{date}</Card.Text>
    </Card.Header>
    <Card.Body>
      <Card.Text>
        {body}
      </Card.Text>
      <Button variant="primary">Like</Button>
    </Card.Body>
  </Card>
  );
}

export default PostCard;