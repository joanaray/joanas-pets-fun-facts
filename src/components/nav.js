function Nav({ chosenPet, sortedPets, Pet, setPetState }) {
  const previousPet = Object.create(Pet);
  const nextPet = Object.create(Pet);

  function handlePetNav(setWay, setPet) {
    // Figuring out the index on the pet list for the previous or next pet to display.
    let setIndex;
    for (let i = 0; i < sortedPets.length; i++) {
      if (chosenPet === sortedPets[i]) {
        setWay === "previous" ? (setIndex = i - 1) : (setIndex = i + 1);
      }
    }

    // Set up the loop, in case the user reaches the first pet on the list or the last.
    if (setWay === "previous" && setIndex < 0) {
      setIndex = sortedPets.length - 1;
    } else {
      if (setIndex === sortedPets.length) {
        setIndex = 0;
      }
    }
    setPet = sortedPets[setIndex];
    handlePetState(setPetState, setPet);
  }

  // Updating the chosen pet state in order to update the pet card and the menu.
  function handlePetState(setPetState, newPet) {
    setPetState(newPet);
  }

  return (
    <nav>
      <button
        type="button"
        onClick={() => handlePetNav("previous", previousPet)}
        aria-label="Go to previous pet"
      >
        <span class="material-symbols-outlined">arrow_back</span>
      </button>
      <button type="button" onClick={() => handlePetNav("next", nextPet)}  aria-label="Go to next pet">
      <span class="material-symbols-outlined">arrow_forward</span>
      </button>
    </nav>
  );
}

export default Nav;
