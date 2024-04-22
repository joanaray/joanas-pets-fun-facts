import { useState } from "react";

import PetCard from "./components/pet-card";

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
Leia.petBreed = "Mutt";
Leia.petLikes = ["naps", "food", "cuddles"];
Leia.petBio =
  "Leia is Miya's sister, she fell of the window when she was 1year old which resulted in a broken paw and chipped tooth";
Leia.petColor = "White, black and orange";
Leia.petPic = ["leia-01.jpg","leia-02.jpg"];
Leia.petType = "cat";
Leia.addToPets();

const Miya = Object.create(Pet);
Miya.petName = "Miya";
Miya.petBirthdate = "June 2011";
Miya.petBreed = "Mutt";
Miya.petLikes = ["naps", "food", "cuddles", "exploring the garden", "hunting"];
Miya.petBio = "Miya is Leia's sister";
Miya.petColor = "Black and white";
Miya.petPic = ["miya-01.jpg", "miya-02.jpeg"];
Miya.petType = "cat";
Miya.addToPets();

const Nico = Object.create(Pet);
Nico.petName = "Nico";
Nico.petBirthdate = "August 2015";
Nico.petBreed = "Mutt";
Nico.petLikes = ["naps", "food", "exploring the garden"];
Nico.petBio = "Nico is a spooky cat";
Nico.petColor = "Black and white";
Nico.petPic = ["nico-01.jpg", "nico-02.jpg"];
Nico.petType = "cat";
Nico.addToPets();

const Tito = Object.create(Pet);
Tito.petName = "Tito";
Tito.petBirthdate = "March 2020";
Tito.petBreed = "Mutt";
Tito.petLikes = ["naps", "food", "exploring the garden", "playing with toys", "hunting"];
Tito.petDislikes = ["Belly rubs"];
Tito.petBio = "Tito is a very playful cat, the youngest of the gang";
Tito.petColor = "Black with two white spots";
Tito.petPic = ["tito-01.jpg", "tito-02.jpg"];
Tito.petType = "cat";
Tito.addToPets();

const Tita = Object.create(Pet);
Tita.petName = "Tita";
Tita.petBirthdate = "March 2020";
Tita.petBreed = "Mutt";
Tita.petLikes = ["naps", "food", "exploring the garden", "playing with toys", "hunting"];
Tita.petBio = "Tita was Tito's sister. She was a bit blind but still a good hunter! She got sick in 2022 and didn't make it. She was a really cute pet.";
Tita.petColor = "White, beige and black striped tail and face.";
Tita.petPic = ["tita-01.jpg", "tita-02.jpg"];
Tita.petType = "cat";
Tita.addToPets();

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

const Julia = Object.create(Pet);
Julia.petName = "Julia";
Julia.petLikes = [
  "exploring the garden",
  "eating worms",
  "eating weeds and grass",
];
Julia.petBio = "Julia is a black chicken. My friend Inês gave her that name.";
Julia.petColor = "Black and golden";
Julia.petPic = ['julia-01.jpg'];
Julia.petType = "chicken";
Julia.addToPets();

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
      <div className="pet-list">
        <h3>Choose pet:</h3>
        <ul>{listPets}</ul>
      </div>
      <div className="pet-card">
        <PetCard pet={chosenPet} />
      </div>
    </div>
  );
}
