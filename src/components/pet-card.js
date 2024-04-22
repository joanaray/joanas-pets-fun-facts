function PetCard({ pet }) {
  const petLikesList = pet.petLikes.map((petLikesItem) => {
    return <li>{petLikesItem}</li>;
  });
  const petDislikesList = pet.petDislikes.map((petListItem) => {
    return <li>{petListItem}</li>;
  });
  const petPicList = pet.petPic;
  const randomPetPic =
    petPicList[Math.floor(Math.random() * petPicList.length)];
  return (
    <article>
      <h2>{pet.petName}</h2>
      <figure>
        {pet.petPic.length > 0 && (
          <img src={`assets/img/${randomPetPic}`} alt={pet.petName} />
        )}
      </figure>
      <div className="pet-bio">
        <h3>
          About {pet.petQuantity > 1 ? "these" : "this"} {pet.petType}
        </h3>
        <p>{pet.petBio}</p>
        <ul className="pet-props">
          {pet.petBirthdate && (
            <li>
              <strong>birth date:</strong> {pet.petBirthdate};
            </li>
          )}
          {pet.petColor && (
            <li>
              <strong>color:</strong> {pet.petColor};
            </li>
          )}
          {pet.petBreed && (
            <li>
              <strong>breed:</strong> {pet.petBreed};
            </li>
          )}
        </ul>
      </div>
      {!(pet.petLikes.length === 0) && (
        <div className="pet-prefs">
          <h4>Likes</h4>
          <ul>{petLikesList}</ul>
        </div>
      )}
      {!(pet.petDislikes.length === 0) && (
        <div className="pet-prefs">
          <h4>Dislikes</h4>
          <ul>{petDislikesList}</ul>
        </div>
      )}
    </article>
  );
}

export default PetCard;
