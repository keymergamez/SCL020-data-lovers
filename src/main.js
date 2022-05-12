// importamos la data de atletas y las Funciones
import data from "./data/athletes/athletes.js";
import {getRhythmicGymnastics, showAthletes} from "./data.js";

const rhythmicGymnastics = getRhythmicGymnastics(data.athletes);

const athletesContainer = document.querySelector(".show_athletes");
athletesContainer.innerHTML = showAthletes (rhythmicGymnastics);

  console.log (athletesContainer);














// const athletescontainer = document.querySelector("show_date");
// console.log(data.athletes)

//.filter(currentAthlete) => currentAthlete === "Rhythmic Gymnastics Women's Group",



// funcion = datafilter("Rhythmic Gymnastics Women's Group"=> "Rhythmic Gymnastics Women's Group"  );
// console.log(athletes);


//   let athletes= [ { lo que quiero }] // seria la categoria 