    // // estas son funciones 
export const getRhythmicGymnastics = (data) => { 
    return data.filter(
     (currentAthlete) => 
       currentAthlete.event === "Rhythmic Gymnastics Women's Group"

    );
};

export const showAthletes = (athletes) => {
  return athletes
    .map(
      (currentAthlete) => 
      `<div class="athlete">
        <img athlete/>
        <h3>${currentAthlete.name}</h3>
        <p>${currentAthlete.team}</p>
        <button> Ver Atletas </button>
      </div>`
    )
    .join("");
}; 
  
/* 
 console.log(getElementsByType(athletes, "team"))
 console.log(getAthletesByTeam(athletes, "Italy"))
console.log(sortData(athletes, "name", "Desc")) */




