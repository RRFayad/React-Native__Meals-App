import React, { createContext, useState } from "react";

const FavoritesContext = React.createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

export const FavoritesContextProvider = ({ children }) => {
  const [favoriteMealsIds, setFavoriteMealsIds] = useState([]);
  const addFavorite = (id) => {
    setFavoriteMealsIds((prevState) => [...prevState, id]);
  };
  const removeFavorite = (id) => {
    setFavoriteMealsIds((prevState) =>
      prevState.filter((itemId) => itemId !== id),
    );
  };

  return (
    <FavoritesContext.Provider
      value={{ ids: favoriteMealsIds, addFavorite, removeFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
