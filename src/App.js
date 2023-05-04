import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import appRoutes from './shared/appRoutes';

import NavBar from './containers/NavBar/NavBar';
import Footer from './containers/Footer/Footer';
import HomePage from './containers/HomePage/HomePage';
import CharactersPage from './containers/CharactersPage/CharactersPage';
import CharacterPage from './containers/CharactersPage/CharacterPage/CharacterPage';
import MoviesPage from './containers/MoviesPage/MoviesPage';
import MoviePage from './containers/MoviesPage/MoviePage/MoviePage';
import { CartPage } from './containers/CharactersPage/CharacterPage/CartPage';
import './App.css';

const app = () => {
  const [cart, setCart] = useState([]);
  const handleAddToCart = () => {
    const newCartItem = {
      color: selectedColor,
      // side: selectedSide,
      size: selectedSize,
      quantity: selectedQuantity
    };
    //．．．展開並加入新的項目
    setCart([...cart, newCartItem]);
    console.log([...cart, newCartItem]);
  };
  return (
  
    <div className='App'>
      <NavBar />

      <div className='MainContent'>
        <Switch>

          <Route exact path={appRoutes.home}>
            <HomePage />
          </Route>

          <Route exact path={appRoutes.movies}>
            <MoviesPage />
          </Route>

          <CharacterPage cart={cart} setCart={setCart} />
          <Route exact path={appRoutes.cart} render={() => <CartPage cartItems={cart} handleQuantityChange={handleQuantityChange} />} />
          
          {/* <Route exact path={appRoutes.cart}>
            <CartPage />
          </Route> */}
          
          <Route exact path={appRoutes.movie}>
            <MoviePage />
          </Route>

          <Route exact path={appRoutes.characters}>
            <CharactersPage />
          </Route>

          <Route exact path={appRoutes.character}>
            <CharacterPage />
          </Route>
          
          <Redirect to={appRoutes.home} />
        </Switch>
      </div>

      <Footer />
    </div>
  );
};

export default app;
