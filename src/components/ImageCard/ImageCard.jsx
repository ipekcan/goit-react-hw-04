import ImageCardCss from "./ImageCard.module.css";

const ImageCard = ({ id, src, alt }) => {
  return (
    <li key={id}>
        <div className={`${ImageCardCss.imageCard}`}>
        
        <img src={src} alt={alt}  />
       </div>
    </li>
  );
};

export default ImageCard;
