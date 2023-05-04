import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Scotty from '../../assets/imgs/imgs2/scotty.png';
// import movieList from './movieList';
import './MoviesPage.css';
// https://www.timeout.com/london/film/star-wars-characters-list
const MoviesPage = () => {
  // const movies = sortBy(movieList, ['rank']);

  return (
    <Container>

      <img class='scotty' src={Scotty} alt='Scotty' />
      <p class="nono">No time for me to finish the extra page QQ </p>
      {/* <br />
      <h1>Star Wars Movies that we love...</h1>
      <Row>
        {movies.map((movie) => {
          return (
            <Col
              key={movie.id}
              tag={Link}
              to={`${appRoutes.movies}/${movie.id}`}
              lg={4}
              md={6}
              sm={12}
              className='EntryContainer'
            >
              <img src={movie.photo} alt={movie.name} />
              <h5 className='EntryName'>{movie.name}</h5>
            </Col>
          );
        })}
      </Row> */}
    </Container>
  );
};

export default MoviesPage;
