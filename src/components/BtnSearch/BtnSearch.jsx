import { FaMagnifyingGlass } from "react-icons/fa6";
import BtnSrchCss from "./BtnSearch.module.css"



const BtnSearch = ({onSearch}) => {
    

  return (
    <button type="submit" className={`${BtnSrchCss.button}`} onClick={onSearch}>
      <FaMagnifyingGlass />
    </button>
  );
};

export default BtnSearch;
