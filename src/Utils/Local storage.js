export const getFavorites = () => JSON.parse(localStorage.getItem("favorites") || "[]");

export const addFavorite = (id) => {
  const favorites = getFavorites();
  if (!favorites.includes(id)) {
    favorites.push(id);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
};

export const removeFavorite = (id) => {
  const favorites = getFavorites().filter(fav => fav !== id);
  localStorage.setItem("favorites", JSON.stringify(favorites));
};