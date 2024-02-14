import React, { createContext, useState } from "react";

const FavoritesContext = React.createContext({
  favoriteMealsIds: [],
  addFavoriteMeal: (id) => {},
  removeFavoriteMeal: (id) => {},
});

export const FavoritesContextProvider = ({ children }) => {
  const [favoriteMealsIds, setFavoriteMealsIds] = useState([]);

  console.log(favoriteMealsIds);

  const addFavoriteMeal = (id) => {
    setFavoriteMealsIds((prevState) => [...prevState, id]);
  };
  const removeFavoriteMeal = (id) => {
    setFavoriteMealsIds((prevState) =>
      prevState.filter((itemId) => itemId !== id),
    );
  };

  return (
    <FavoritesContext.Provider
      value={{ favoriteMealsIds, addFavoriteMeal, removeFavoriteMeal }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
