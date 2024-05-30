function PetCard({ pet }) {
  // Display the pets likes and dislikes as lists.
  const petLikesList = pet.petLikes.map((petLikesItem, i) => {
    return <li key={`${pet.petName}-likes-${i}`}>{petLikesItem};</li>;
  });
  const petDislikesList = pet.petDislikes.map((petListItem, i) => {
    return <li key={`${pet.petName}-dislikes-${i}`}>{petListItem};</li>;
  });

  // Choose a random pet pic on card load.
  const petPicList = pet.petPic;
  const randomPetPic =
    petPicList[Math.floor(Math.random() * petPicList.length)];
  
  return (
    /** 
     * Set up verifications for most of the fields so they load but only if the pet object key has any values.
     */ 
    <article key={pet.id} id={`card-${pet.id}`}>
      <h2>{pet.petName}</h2>
      <figure>
        {pet.petPic.length > 0 && (
          <img src={process.env.PUBLIC_URL + `/assets/img/${randomPetPic}`} alt={pet.petName} />
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
          {pet.petRip && (
            <li>
            <strong>RIP:</strong> {pet.petRip}
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
