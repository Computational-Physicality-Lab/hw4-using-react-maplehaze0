import React from 'react';
// import { sortBy } from 'lodash';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import appRoutes from '../../shared/appRoutes';
// import characterList from './characterList';
import shirtList from './shirtList';
import './shirt.css'
// https://www.timeout.com/london/film/star-wars-characters-list
const CharactersPage = () => {
  // const chars = sortBy(characterList, ['rank']);
  const shirts = shirtList;
  return (
    <Container>
      <br />
      <h1>Our T-Shirts ...</h1>
      <Row>
        {shirts.map((shirt) => {
          return (
            <Col
              key={shirts.name}
              tag={Link}
              to={`${appRoutes.characters}/${shirt.name}`}
              xl={4}
              lg={3}
              md={6}
              sm={12}
              className='EntryContainer'
            >
              <div className='shirt'>
                <img className='shirt_image' src={shirt.colors.white.front} alt={shirt.default.front} />
                <h5 className='EntryName'>{shirt.name}</h5>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default CharactersPage;


