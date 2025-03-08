
import SearchCss from "./Search.module.css";


const Search = ({children, placeholder, type, searchInput}) => {
        
    
  return (
    <div className={`${SearchCss.wrap}`}>
      <div className={`${SearchCss.iconWrap}`}>{children}</div>
        <input type={type} placeholder={placeholder} className={`${SearchCss.input}`} ref={searchInput}/>

    </div>
  );
};

export default Search;
