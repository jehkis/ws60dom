// -------------------------------------------------- TEHTÄVÄ 1: SISÄLLÖN MUUTTAMINEN

const taskOneHeading = document.querySelector("#taskOneHeading");
const animalText = document.querySelector("#animalText");

const changeHeadingButton = document.querySelector("#changeHeadingButton");
const changeStyleButton = document.querySelector("#changeStyleButton");
const changeTextButton = document.querySelector("#changeTextButton");

changeHeadingButton.addEventListener("click", function () {
    taskOneHeading.textContent = "Muokattu otsikko!";
});

changeStyleButton.addEventListener("click", function () {
    taskOneHeading.classList.toggle("highlight");
});

const originalAnimalText = "Elefantit ovat maailman suurimpia maaeläimiä.";
const alternativeAnimalText = "Tiikerit ovat suurimpia kissaeläimiä maailmassa.";
let animalTextChanged = false;

changeTextButton.addEventListener("click", function () {
    animalTextChanged = !animalTextChanged;
    animalText.textContent = animalTextChanged
        ? alternativeAnimalText
        : originalAnimalText;
});

// --- Bonus: uusi lause lisätään loppuun alkuperäistä poistamatta ---

const taskOneButtons = document.querySelector(".buttons");

const addSentenceButton = document.createElement("button");
addSentenceButton.type = "button";
addSentenceButton.textContent = "Lisää lause";
taskOneButtons.append(addSentenceButton);

addSentenceButton.addEventListener("click", function () {
    animalText.textContent += " Ne elävät luonnossa Afrikassa ja Aasiassa.";
});

// --- Bonus: koko sivun taustavärin vaihtaminen ---

const backgroundColors = ["#f5f5f5", "#e8f7f0", "#fdf3e7", "#f0eef8"];
let backgroundColorIndex = 0;

const changeBackgroundButton = document.createElement("button");
changeBackgroundButton.type = "button";
changeBackgroundButton.textContent = "Vaihda taustaväri";
taskOneButtons.append(changeBackgroundButton);

changeBackgroundButton.addEventListener("click", function () {
    backgroundColorIndex = (backgroundColorIndex + 1) % backgroundColors.length;
    document.body.style.backgroundColor = backgroundColors[backgroundColorIndex];
});

// -------------------------------------------------- TEHTÄVÄ 2: ELEMENTTIEN LUOMINEN

const animalContent = document.querySelector("#animalContent");
const hideAnimalButton = document.querySelector("#hideAnimalButton");
const showAnimalButton = document.querySelector("#showAnimalButton");

const animalOfTheDayHeading = document.createElement("h3");
animalOfTheDayHeading.textContent = "Päivän eläin";
animalOfTheDayHeading.classList.add("animal-heading");

const animalOfTheDayParagraph = document.createElement("p");
animalOfTheDayParagraph.textContent =
    "Panda syö päivittäin jopa 12 tuntia bambua ja painaa aikuisena noin 100 kiloa.";

const animalOfTheDayImage = document.createElement("img");
animalOfTheDayImage.src = "images/panda.png";
animalOfTheDayImage.alt = "Panda";

animalContent.append(
    animalOfTheDayHeading,
    animalOfTheDayParagraph,
    animalOfTheDayImage
);

hideAnimalButton.addEventListener("click", function () {
    animalContent.hidden = true;
});

showAnimalButton.addEventListener("click", function () {
    animalContent.hidden = false;
});

// -------------------------------------------------- TEHTÄVÄ 3: ELÄIMEN VALITSEMINEN

const animalSelect = document.querySelector("#animalSelect");
const animalName = document.querySelector("#animalName");
const animalImage = document.querySelector("#animalImage");
const animalDescription = document.querySelector("#animalDescription");

const animalsData = {
    elephant: {
        name: "Elefantti",
        image: "images/elephant.png",
        alt: "Elefantti",
        description: "Elefantit ovat maailman suurimpia maaeläimiä.",
    },
    tiger: {
        name: "Tiikeri",
        image: "images/tiger.png",
        alt: "Tiikeri",
        description: "Tiikerit ovat suurimpia kissaeläimiä maailmassa.",
    },
    penguin: {
        name: "Pingviini",
        image: "images/penguin.png",
        alt: "Pingviini",
        description:
            "Pingviinit ovat lentokyvyttömiä lintuja, jotka ovat erinomaisia uimareita.",
    },
    panda: {
        name: "Panda",
        image: "images/panda.png",
        alt: "Panda",
        description: "Pandat syövät ravinnostaan lähes yksinomaan bambua.",
    },
};

animalSelect.addEventListener("change", function () {
    const selectedAnimal = animalsData[animalSelect.value];

    animalName.textContent = selectedAnimal.name;
    animalImage.src = selectedAnimal.image;
    animalImage.alt = selectedAnimal.alt;
    animalDescription.textContent = selectedAnimal.description;
});

animalImage.addEventListener("mouseenter", function () {
    animalImage.classList.add("image-highlight");
});

animalImage.addEventListener("mouseleave", function () {
    animalImage.classList.remove("image-highlight");
});

// -------------------------------------------------- TEHTÄVÄ 4: ELÄINHAVAINNOT

const animalForm = document.querySelector("#animalForm");
const observationTable = document.querySelector("#observationTable");
const observationTableBody = document.querySelector("#observationTableBody");

const observationAnimalInput = document.querySelector("#observationAnimal");
const observationLocationInput = document.querySelector("#observationLocation");
const observationDateInput = document.querySelector("#observationDate");

// --- Bonus: poistopainike jokaiselle riville ---

function addDeleteButtonToRow(row) {
    const deleteCell = document.createElement("td");
    const deleteButton = document.createElement("button");

    deleteButton.type = "button";
    deleteButton.textContent = "Poista";

    deleteButton.addEventListener("click", function () {
        row.remove();
    });

    deleteCell.append(deleteButton);
    row.append(deleteCell);
}

const observationTableHeaderRow = observationTable.querySelector("thead tr");
const deleteHeaderCell = document.createElement("th");
deleteHeaderCell.textContent = "Poista";
observationTableHeaderRow.append(deleteHeaderCell);

observationTableBody
    .querySelectorAll("tr")
    .forEach(addDeleteButtonToRow);

animalForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const animalValue = observationAnimalInput.value.trim();
    const locationValue = observationLocationInput.value.trim();
    const dateValue = observationDateInput.value.trim();

    if (!animalValue || !locationValue || !dateValue) {
        alert("Täytä kaikki kentät ennen havainnon lisäämistä.");
        return;
    }

    const newRow = document.createElement("tr");

    const animalCell = document.createElement("td");
    animalCell.textContent = animalValue;

    const locationCell = document.createElement("td");
    locationCell.textContent = locationValue;

    const dateCell = document.createElement("td");
    dateCell.textContent = dateValue;

    newRow.append(animalCell, locationCell, dateCell);
    addDeleteButtonToRow(newRow);

    observationTableBody.append(newRow);

    animalForm.reset();
});

// -------------------------------------------------- BONUSTEHTÄVÄT

const bonusSection = document.querySelector("#bonusSection");
const bonusButtons = document.createElement("div");
bonusButtons.classList.add("buttons");
bonusSection.append(bonusButtons);

// --- Kuvan siirtäminen sivulla ---

const moveImageButton = document.createElement("button");
moveImageButton.type = "button";
moveImageButton.textContent = "Siirrä kuvaa";
bonusButtons.append(moveImageButton);

moveImageButton.addEventListener("click", function () {
    animalImage.classList.toggle("image-moved");
});

// --- Yksinkertainen CSS-animaatio ---

const animateImageButton = document.createElement("button");
animateImageButton.type = "button";
animateImageButton.textContent = "Pyöritä kuvaa";
bonusButtons.append(animateImageButton);

animateImageButton.addEventListener("click", function () {
    animalImage.classList.toggle("image-spin");
});

// --- Kuvan häivyttäminen ---

const fadeImageButton = document.createElement("button");
fadeImageButton.type = "button";
fadeImageButton.textContent = "Häivytä kuva";
bonusButtons.append(fadeImageButton);

fadeImageButton.addEventListener("click", function () {
    animalImage.classList.toggle("image-faded");
});

// --- Kuvan poistaminen DOM-rakenteesta ---

const removeImageButton = document.createElement("button");
removeImageButton.type = "button";
removeImageButton.textContent = "Poista kuva";
bonusButtons.append(removeImageButton);

removeImageButton.addEventListener("click", function () {
    animalImage.remove();
});

// --- Kaikkien li-elementtien läpikäynti ---

const highlightListItemsButton = document.createElement("button");
highlightListItemsButton.type = "button";
highlightListItemsButton.textContent = "Korosta listat";
bonusButtons.append(highlightListItemsButton);

highlightListItemsButton.addEventListener("click", function () {
    const listItems = document.querySelectorAll("li");

    listItems.forEach(function (listItem) {
        listItem.classList.toggle("list-highlighted");
    });
});
