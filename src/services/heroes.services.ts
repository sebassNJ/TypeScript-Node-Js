import {heroes} from "../data/superHeroes"


export  const usuario  = (id:number)=>{

   return heroes.find((hero) => hero.id === id)
}


