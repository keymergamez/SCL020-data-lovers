import { getRhythmicGymnastics, filterTeam, sortDataName, getMedals } from '../src/data.js';

const atleta = [{
  name: "Sandra Aguilar Navarro",
  sport: "Rhythmic Gymnastics",
  team: "Spain",
  noc: "ESP",
  age: 23,
  event: "Rhythmic Gymnastics Women's Group",
  medal: "Bronze",
},

{
  name: "Denis Mikhaylovich Ablyazin",
  sport: "Gymnastics",
  team: "Brazil",
  noc: "RUS",
  age: 24,
  event: "Gymnastics Men's Team All-Around",
  medal: "Silver"
},
{
  name: "Vera Leonidovna Biryukova",
  sport: "Rhythmic Gymnastics",
  team: "Russia",
  noc: "RUS",
  age: 18,
  event: "Rhythmic Gymnastics Women's Group",
  medal: "Gold",
},
]

describe('tests de data,js', () => {
  describe('funcion que deberia retornar getRhythmicGymnastics', () => {
    it('getRhythmicGymnastics debería ser una función', () => {
      expect(typeof getRhythmicGymnastics).toBe('function'); // tobe debe ser
    });
    it('getRhythmicGymnastics deberia retornar las atletas de Gimnasia ritmica', () => {
      expect(getRhythmicGymnastics(atleta)).toHaveLength(2);
    });

  });


  describe('tests que filtra los atletas por pais', () => {  // la funcion get retorna
    it('filterTeam debería ser una función', () => {
      expect(typeof filterTeam).toBe('function');
    });

    it(' Debe retornar los atletas de los paises filtrados', () => {
      expect(filterTeam(atleta, 'Spain')).toHaveLength(1);
    });
  });



  describe('tests que filtra sortDataName', () => {
    it('sortdataname deberia ser una funcion', () => {
      expect(typeof sortDataName).toBe('function');
    });
    it('sortdatname Debe retornar las atletas de A-Z', () => {
      expect(sortDataName(atleta, 'A-Z')).toEqual([
        {
          name: "Denis Mikhaylovich Ablyazin",
          sport: "Gymnastics",
          team: "Brazil",
          noc: "RUS",
          age: 24,
          event: "Gymnastics Men's Team All-Around",
          medal: "Silver",
        },

        {
          name: "Sandra Aguilar Navarro",
          sport: "Rhythmic Gymnastics",
          team: "Spain",
          noc: "ESP",
          age: 23,
          event: "Rhythmic Gymnastics Women's Group",
          medal: "Bronze",
        },
        {
          name: "Vera Leonidovna Biryukova",
          sport: "Rhythmic Gymnastics",
          team: "Russia",
          noc: "RUS",
          event: "Rhythmic Gymnastics Women's Group",
          medal: "Gold",
        },]);
    });
    it('sortdatname Debe retornar atleta de Z-A', () => {
      expect(sortDataName(atleta, 'Z-A')).toEqual([
        {
          name: "Vera Leonidovna Biryukova",
          sport: "Rhythmic Gymnastics",
          team: "Russia",
          noc: "RUS",
          age: 18,
          event: "Rhythmic Gymnastics Women's Group",
          medal: "Gold",
        },
        {
          name: "Sandra Aguilar Navarro",
          sport: "Rhythmic Gymnastics",
          team: "Spain",
          noc: "ESP",
          age: 23,
          event: "Rhythmic Gymnastics Women's Group",
          medal: "Bronze",
        },

        {
          name: "Denis Mikhaylovich Ablyazin",
          sport: "Gymnastics",
          team:"Brazil",
          noc: "RUS",
          age: 24,
          event: "Gymnastics Men's Team All-Around",
          medal: "Silver"
        },
      ]);

      // test Estadistica
      describe('tests que filtra getMedals', () => {
        it('getMedals deberia ser una funcion', () => {
          expect(typeof getMedals).toBe('function');
        });
        it('getMedals Debe retornar el pais por medalla ', () => {
          expect(getMedals(atleta, "team")).toEqual([
            {
              name: "Vera Leonidovna Biryukova",
              sport: "Rhythmic Gymnastics",
              team: "Russia",
              noc: "RUS",
              age: 18,
              event: "Rhythmic Gymnastics Women's Group",
              medal: "Gold",

            },

            {
              name: "Sandra Aguilar Navarro",
              sport: "Rhythmic Gymnastics",
              team: "Spain",
              noc: "ESP",
              age: 23,
              event: "Rhythmic Gymnastics Women's Group",
              medal: "Bronze",
            },

            {
              name: "Denis Mikhaylovich Ablyazin",
              sport: "Gymnastics",
              team: "Russia",
              noc: "RUS",
              age: 24,
              event: "Gymnastics Men's Team All-Around",
              medal: "Silver"
            },
          ]);
        });
      });
    });
  });
  describe('tests que filtra getMedals', () => {
    it('getMedals deberia ser una funcion', () => {
      expect(typeof getMedals).toBe('function');
    });
    it('getMedals Debe retornar la cantidad medalla por pais', () => {
      expect(getMedals(atleta, "medal")).toHaveLength(3)

    });
  });
});




