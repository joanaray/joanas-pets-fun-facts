import { useState } from "react";

const pets = [];

const Pet = {
  active: false,
  petName: "",
  petBirthdate: "",
  petBreed: "",
  petLikes: [],
  petDislikes: [],
  petBio: "",
  petColor: "",
  petPic: [],
  petType: "",
  petQuantity: 1,
  addToPets() {
    pets.push(this);
  },
};

const Leia = Object.create(Pet);
Leia.petName = "Leia";
Leia.petBirthdate = "June 2011";
Leia.petBreed = "rafeira";
Leia.petLikes = ["naps", "food", "cuddles"];
Leia.petBio =
  "Leia is Miya's sister, she fell of the window when she was 1year old which resulted in a broken paw and chipped tooth";
Leia.petColor = "White, black and orange";
Leia.petPic = ["leia-01.jpg"];
Leia.petType = "cat";
Leia.addToPets();

const Miya = Object.create(Pet);
Miya.petName = "Miya";
Miya.petBirthdate = "June 2011";
Miya.petBreed = "rafeira";
Miya.petLikes = ["naps", "food", "cuddles", "exploring the garden"];
Miya.petBio = "Miya is Leia's sister";
Miya.petColor = "Black and white";
Miya.petPic = ["miya-01.jpg"];
Miya.petType = "cat";
Miya.addToPets();

const Nico = Object.create(Pet);
Nico.petName = "Nico";
Nico.petBirthdate = "August 2015";
Nico.petBreed = "rafeiro";
Nico.petLikes = ["naps", "food", "exploring the garden"];
Nico.petBio = "Nico is a spooky cat";
Nico.petColor = "Black and white";
Nico.petPic = ["nico-01.jpg"];
Nico.petType = "cat";
Nico.addToPets();

const Tito = Object.create(Pet);
Tito.petName = "Tito";
Tito.petBirthdate = "March 2020";
Tito.petBreed = "rafeiro";
Tito.petLikes = ["naps", "food", "exploring the garden", "playing with toys"];
Tito.petDislikes = ["Belly rubs"];
Tito.petBio = "Tito is a very playful cat, the youngest of the gang";
Tito.petColor = "Black with two white spots";
Tito.petPic = ["tito-01.jpg"];
Tito.petType = "cat";
Tito.addToPets();

const Miriams = Object.create(Pet);
Miriams.petName = "Miriams";
Miriams.petLikes = [
  "exploring the garden",
  "eating worms",
  "eating weeds and grass",
];
Miriams.petBio = "Miriams are two chicken Joana can't tell appart.";
Miriams.petColor = "Grey";
Miriams.petType = "chicken";
Miriams.petQuantity = 2;
Miriams.addToPets();

function PetCard({ pet }) {
  const petLikesList = pet.petLikes.map((petLikesItem) => {
    return <li>{petLikesItem}</li>;
  });
  const petDislikesList = pet.petDislikes.map((petListItem) => {
    return <li>{petListItem}</li>;
  });
  return (
    <article>
      <h2>{pet.petName}</h2>
      <figure>
        <img src={`assets/img/${pet.petPic}`} alt={pet.petName} />
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

export default function App() {
  let currentPet = pets[Math.floor(Math.random() * pets.length)];
  currentPet.active = true;
  let isActive;
  const [chosenPet, setChosenPet] = useState(currentPet);

  const listPets = pets.map((pet, i) => {
    if (chosenPet === pet) {
      isActive = "active";
    } else {
      isActive = "";
    }
    return (
      <li key={i} id={i}>
        <button
          type="button"
          className={isActive}
          onClick={() => onPetClick(pet)}
        >
          {pet.petName}
        </button>
      </li>
    );
  });

  function onPetClick(clickedPet) {
    for (let i = 0; i < pets.length; i++) {
      if (pets[i].active === true) {
        pets[i].active = false;
      }
    }
    clickedPet.active = true;
    setChosenPet(clickedPet);
    console.log("Clicked the current pet: " + currentPet.petName);
  }

  return (
    <div className="content">
      <div>
        <h3>Choose pet:</h3>
        <ul>{listPets}</ul>
      </div>
      <div className="pet-card">
        <PetCard pet={chosenPet} />
      </div>
    </div>
  );
}
