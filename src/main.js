// importamos la data de atletas y las Funciones
import data from "./data/athletes/athletes.js";
import { getRhythmicGymnastics, filterTeam, sortDataName } from "./data.js"; // traigo la funcion desde el archivo data.js

const showAthletes = (rhythmicGymnastics) => {
  return rhythmicGymnastics
    .map(
      (currentAthlete) =>
        `<div class="athlete">
        <img/>
        <h3>${currentAthlete.name}</h3>
        <p>${currentAthlete.team}</p>
        <button>Ver Atletas</button>
      </div>`
    )
    .join("");
};

const rhythmicGymnastics = getRhythmicGymnastics(data.athletes);

const athletesContainer = document.querySelector(".show_athletes");
athletesContainer.innerHTML = showAthletes(rhythmicGymnastics);

const uniqueArrayTeams = [
  ...new Set(rhythmicGymnastics.map((currentAthlete) => currentAthlete.team)),
];

const teamAthletesSelector = (uniqueArrayTeams) => {
  return uniqueArrayTeams
    .map((currentTeamOption) => `<option>${currentTeamOption}</option>`)
    .join("");
};

const filterTeamContainer = document.querySelector("#filter_country");
filterTeamContainer.innerHTML = teamAthletesSelector(uniqueArrayTeams);

const filterTeamContainerInput = document.querySelector(
  "#filter_country_input"
);

console.log(uniqueArrayTeams);

filterTeamContainerInput.addEventListener("change", (event) => {
  const athletesFiltered = filterTeam(rhythmicGymnastics, event.target.value);
  if (event.target.value === "") {
    athletesContainer.innerHTML = showAthletes(rhythmicGymnastics);
  } else {
    athletesContainer.innerHTML = showAthletes(athletesFiltered);
  }
  console.log(athletesFiltered.length);
});

// sortOrder

const orderTeamContainerInput = document.querySelector("#order_name_input");

orderTeamContainerInput.addEventListener("change", (eventOrder) => {
  const athletesOrganized = sortDataName(
    rhythmicGymnastics,
    eventOrder.target.value
  );
  if (eventOrder.target.value === "") {
    athletesContainer.innerHTML = showAthletes(rhythmicGymnastics);
  } else {
    athletesContainer.innerHTML = showAthletes(athletesOrganized);
  }
  console.log(sortDataName(rhythmicGymnastics, eventOrder.target.value));
});

// console.log(sortDataName(rhythmicGymnastics, rhythmicGymnastics.name));
