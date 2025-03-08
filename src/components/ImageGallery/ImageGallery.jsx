import ImageCard from "../ImageCard/ImageCard.jsx";
import ImageGalleryCss from "./ImageGallery.module.css";

const ImageGallery = (images) => {
  const imgArr = images.images;

  const newArrId = imgArr.map((a) => a.id);
  const newArrUrlSmall = imgArr.map((a) => a.urls.small);
  const newArrAlt = imgArr.map((a) => a.alt_description);

  let resultArr = newArrId.map((v, i) => ({
    id: newArrId[i],
    urlSmall: newArrUrlSmall[i],
    alt_description: newArrAlt[i],
  }));

  if (imgArr == []) {
    return;
  } else {
    {
      return (
        <ul className={`${ImageGalleryCss.imageGallery}`}>
          {resultArr.map((r) => {
            return (
              <ImageCard id={r.id} src={r.urlSmall} alt={r.alt_description} />
            );
          })}
        </ul>
      );
    }
  }
};
export default ImageGallery;
