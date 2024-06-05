import { useState } from "react";

import PetCard from "./components/pet-card";
import Nav from "./components/nav";
import Dialog from "./components/Dialog";

/**
 * Creating Pet objects and adding them to a list.
 */
const pets = [];

const Pet = {
  id: 0,
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
    pets.push(this); // add them to a Pet list
  },
  petRip: "",
};

const Leia = Object.create(Pet);
Leia.petName = "Leia";
Leia.petBirthdate = "June 2011";
Leia.petBreed = "Calico mutt";
Leia.petLikes = ["naps", "food", "cuddles"];
Leia.petBio =
  "Leia is one of the indoor cats and Miya's sister. She fell of the 2nd floor window when she was 1year old which resulted in a broken paw and chipped tooth. She likes going outside but not for long since she doesn't get along that well with the outdoor cats.";
Leia.petColor = "White, black and orange";
Leia.petPic = ["leia-01.jpg", "leia-02.jpg"];
Leia.petType = "cat";
Leia.addToPets();

const Miya = Object.create(Pet);
Miya.petName = "Miya";
Miya.petBirthdate = "June 2011";
Miya.petBreed = "Tuxedo mutt";
Miya.petLikes = [
  "naps",
  "food",
  "cat treats",
  "cuddles",
  "exploring the garden",
  "hunting",
  "playing hide and seek",
];
Miya.petBio =
  "Miya, short for Miyagi, is Leia's sister and one of the indoor cats.  She's a very chill cat but sometimes goes into 'play mode' and starts running around the house. She loves being outside and exploring the garden and sort of gets along with the outdoor cats... sort of. She responds to Miya, Mimi, Mima and Miola. Sometimes she sleeps with her eyes slightly open, which is a bit creepy.";
Miya.petColor = "Black and white";
Miya.petPic = ["miya-01.jpg", "miya-02.jpg"];
Miya.petType = "cat";
Miya.addToPets();

const Nico = Object.create(Pet);
Nico.petName = "Nico";
Nico.petBirthdate = "August 2015";
Nico.petBreed = "Tuxedo mutt";
Nico.petLikes = [
  "naps",
  "food",
  "exploring the garden",
  "rubbing himself all over the place",
];
Nico.petDislikes = ["sudden movements", "being pestered by Tito"];
Nico.petBio =
  "Nico is a nervous outdoor cat! He came around when he was about 1 year old. Sometimes he gets in fights with Tito because Tito's too excited and makes him a bit anxious. But he's usually very nice and chill. Now that I think about it, he might be Tito's dad. [insert Luke Skywalker scene]";
Nico.petColor = "Really dark brown and white";
Nico.petPic = ["nico-01.jpg", "nico-02.jpg"];
Nico.petType = "cat";
Nico.addToPets();

const Tito = Object.create(Pet);
Tito.petName = "Tito";
Tito.petBirthdate = "March 2021";
Tito.petBreed = "Mutt";
Tito.petLikes = [
  "naps",
  "food",
  "exploring the garden",
  "playing with toys",
  "hunting",
  "hanging around with Nico",
];
Tito.petDislikes = ["Belly rubs"];
Tito.petBio =
  "Tito is a very playful cat, the youngest of the current cat gang and Tita's brother. His mother was around for about 2 years and he and Tita were born while she was here. She disappeared in the meantime but the babbies stayed here. He's a really active cat, always playing around (which sometimes upsets Nico) and climbing stuff.";
Tito.petColor = "Black with two white spots";
Tito.petPic = ["tito-01.jpg", "tito-02.jpg"];
Tito.petType = "cat";
Tito.addToPets();

const Tita = Object.create(Pet);
Tita.petName = "Tita";
Tita.petBirthdate = "March 2021";
Tita.petBreed = "Mutt";
Tita.petLikes = [
  "naps",
  "food",
  "exploring the garden",
  "playing with Tito",
  "hunting",
];
Tita.petDislikes = ["sudden movements"];
Tita.petBio =
  "Tita was Tito's sister and was also born around here to a stray mom who has since disappeared. She was a bit blind but still a good hunter!";
Tita.petColor = "White, beige and black striped tail and face";
Tita.petPic = ["tita-01.jpg", "tita-02.jpg"];
Tita.petType = "cat";
Tita.petRip =
  "She got sick in 2022 and didn't make it. She was a really sweet pet.";
Tita.addToPets();

const Miriams = Object.create(Pet);
Miriams.petName = "Miriams";
Miriams.petLikes = [
  "exploring the garden",
  "eating worms",
  "eating weeds and grass",
];
Miriams.petDislikes = ["being picked up", "being petted"];
Miriams.petBio = "The Miriams are two chicken Joana can't tell appart.";
Miriams.petColor = "Grey";
Miriams.petPic = ["miriams-01.jpg", "miriams-02.jpg"];
Miriams.petType = "chicken";
Miriams.petQuantity = 2;
Miriams.petRip = ["The Miriams were also victims of the ", <Dialog />, " and only one of them survived."]
Miriams.addToPets();

const Julia = Object.create(Pet);
Julia.petName = "Júlia";
Julia.petLikes = [
  "exploring the garden",
  "eating worms",
  "eating weeds and grass",
];
Julia.petdislikes = ["being picked up"];
Julia.petBio =
  "Júlia is a black chicken who was named by my friend Inês. She lays eggs and will let you pet her but you must approach very carefully to do it.";
Julia.petColor = "Black and golden";
Julia.petPic = ["julia-01.jpg", "julia-02.jpg"];
Julia.petType = "chicken";
Julia.addToPets();

const Lisa = Object.create(Pet);
Lisa.petName = "Lisa";
Lisa.petLikes = [
  "exploring the garden",
  "eating worms",
  "eating weeds and grass",
];
Lisa.petdislikes = ["being picked up"];
Lisa.petBio =
  "Lisa is a black chicken who was also named by my friend Inês. She was brought here at the same time as Júlia. She will let you pet her but you must approach very carefully to do it.";
Lisa.petColor = "Black and golden";
Lisa.petPic = ["lisa-01.jpg", "lisa-02.jpg"];
Lisa.petType = "chicken";
Lisa.petRip = ["Lisa was one of the victims of the ", <Dialog />, '.'];
Lisa.addToPets();

export default function App() {
  // Sort pets alphabetically and update their ID according to the new position in the list.
  const sortedPets = pets.sort((a, b) => a.petName.localeCompare(b.petName));
  for (let i = 0; i < sortedPets.length; i++) {
    sortedPets[i].id = i;
  }

  /**
   * Choose a random pet for the first load and set it as the chosen pet.
   * Chosen pet state will be used to update the card info and the buttons behaviours
   */
  let currentPet = sortedPets[Math.floor(Math.random() * sortedPets.length)];
  const [chosenPet, setChosenPet] = useState(currentPet);

  /**
   * Create the pet menu from the sorted list.
   * Set up a class to highlight the currently displayed pet in the menu.
   * Set the clicked pet as the currently displayed pet.
   */
  let isActive;

  const listPets = sortedPets.map((pet) => {
    if (pet === chosenPet) {
      isActive = "active";
    } else {
      isActive = "";
    }
    return (
      <li key={pet.id} id={pet.id}>
        <button
          type="button"
          className={isActive}
          onClick={() => handlePetClick(pet)}
        >
          {pet.petName}
        </button>
      </li>
    );
  });

  function handlePetClick(clickedPet) {
    setChosenPet(clickedPet);
  }

  return (
    <div className="content">
      <div className="pet-list">
        <p>
          <strong>Choose pet:</strong>
        </p>
        <ul>{listPets}</ul>
      </div>
      <div className="pet-card">
        <PetCard pet={chosenPet} />
        <Nav
          chosenPet={chosenPet}
          sortedPets={sortedPets}
          Pet={Pet}
          setPetState={setChosenPet}
        />
      </div>
    </div>
  );
}
