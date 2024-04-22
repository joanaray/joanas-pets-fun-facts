function PetCard({ pet }) {
  const petLikesList = pet.petLikes.map((petLikesItem) => {
    return <li>{petLikesItem}</li>;
  });
  const petDislikesList = pet.petDislikes.map((petListItem) => {
    return <li>{petListItem}</li>;
  });
  const petPicList = pet.petPic;
  const randomPetPic = petPicList[Math.floor(Math.random() * petPicList.length)];
  return (
    <article>
      <h2>{pet.petName}</h2>
      <figure>
        {pet.petPic.length>0 && <img src={`assets/img/${randomPetPic}`} alt={pet.petName} />}
      </figure>
      <h3>
        About {pet.petQuantity > 1 ? "these" : "this"} {pet.petType}
      </h3>
      <ul>
        {pet.petBirthdate && <li>birth date: {pet.petBirthdate}</li>}
        {pet.petColor && <li>color: {pet.petColor}</li>}
        {pet.petBreed && <li>breed: {pet.petBreed}</li>}
      </ul>
      <p>{pet.petBio}</p>
      {!(pet.petLikes.length === 0) && (
        <>
          <h3>Likes:</h3>
          <ul>{petLikesList}</ul>
        </>
      )}
      {!(pet.petDislikes.length === 0) && (
        <>
          <h3>Dislikes:</h3>
          <ul>{petDislikesList}</ul>
        </>
      )}
    </article>
  );
}

export default PetCard;