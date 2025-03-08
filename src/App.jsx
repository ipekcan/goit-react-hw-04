import Header from "./components/Header/Header";
import axios from "axios";
import "./App.css";
import { useEffect, useRef, useState } from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ScaleLoader from "react-spinners/ScaleLoader";


function App() {
  axios.defaults.baseURL = "https://api.unsplash.com/search/photos";
  const API_URL = axios.defaults.baseURL;
  const imagesPerPage = 12;
  const searchInput = useRef(null);

  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [errMsg, setErrMsg] = useState("");
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchImages();
  }, [page]);

  const fetchImages = async () => {
    try {
      if (searchInput.current.value) {
        setLoading(true);
        setErrMsg("");
        const data = await axios.get(
          `${API_URL}?query=${
            searchInput.current.value
          }&page=${page}&per_page=${imagesPerPage}&client_id=8HqQOAfaoMRW_ToW1XYeMy8fLVd6Qo0dG4EtAAOEOKM`
        );
        setImages(data.data.results);
        setTotalPages(data.data.total_pages);
        
      }
    } catch (error) {
      setErrMsg("HTTP request error!!!");
      
    }
    finally 
    {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="content">
        <Header
          searchInput={searchInput}
          fetchImages={fetchImages}
          setPage={setPage}
        />
        {errMsg && <p className="error">{errMsg}</p>}
        <ScaleLoader
          className="loader"
          loading={loading}
          margin={10}
          radius={10}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        <ImageGallery images={images} />
      </div>
      <div className="pagination">
        {page > 1 && (
          <button onClick={() => setPage(page - 1)}>Previous</button>
        )}
        {page < totalPages && (
          <button onClick={() => setPage(page + 1)}>Next</button>
        )}
      </div>
    </>
  );
}

export default App;
