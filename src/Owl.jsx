import "./Owl.css";

/**
 * Composant Owl
 * -Il permettra d'afficher une image d'un hibou et une description.
 */
function Owl({ image, description }) {
  return (
    <div className="owl-container">
     
      {image ? (
        <img
          src={image}
          className="owl-image"
        />
      ) : (
        <p className="owl-warning">
          Aucune image fournie
        </p>
      )}

      {description && (
        <p className="owl-description">{description}</p>
      )}
    </div>
  );
}

export default Owl;
