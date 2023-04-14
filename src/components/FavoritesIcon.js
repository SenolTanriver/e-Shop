import { Badge } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import fav from "../images/fav.svg";
import { getAllFavorites } from "../store/favoritesSlice";

const FavoritesIcon = () => {
  const favorites = useSelector(getAllFavorites);
  const favoritesCount = favorites.length;

  return (
    <Link to="/favorites" className="sm:mx-4 flex items-center">
      <Badge badgeContent={favoritesCount} color="error">
        <div className="relative">
          <img className="sm:w-8 w-7" src={fav} alt="fav" />
        </div>
      </Badge>
      <p className="ml-3">Favori Listesi</p>
    </Link>
  );
};

export default FavoritesIcon;
