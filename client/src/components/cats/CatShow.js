import { Card, Image, Icon } from 'semantic-ui-react';

const CatShow = ({ nombre, avatar, age, breed, color }) => {

  return(
    <Card>
      <Image src={avatar} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{nombre}</Card.Header>
        <Card.Meta>
          <span className='date'>{age}</span>
          <span className='date'>{color}</span>
        </Card.Meta>
        <Card.Description>
          {breed}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          update
          Delete
        </a>
      </Card.Content>
    </Card>
  )
}

export default CatShow;