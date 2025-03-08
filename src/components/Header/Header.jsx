import HeaderCss from "./Header.module.css";
import Search from "../Search/Search";
import BtnSearch from "../BtnSearch/BtnSearch";
import { useRef } from "react";

const Header = ({ searchInput, fetchImages, setPage }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
    fetchImages();
  };

  return (
    <div className={`${HeaderCss.header}`}>
      <Search
        placeholder="Search images and photos"
        type="text"
        className={`${HeaderCss.search}`}
        searchInput={searchInput}
      >
        <BtnSearch onSearch={handleSearch} />
      </Search>
    </div>
  );
};

export default Header;
