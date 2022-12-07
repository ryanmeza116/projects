// Objective : Receive data from immutable array with map and filter : 

const pokémon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);

    const bListPkmn = pokémon.filter( i => i.name[0]=== "B"); 
    console.log(bListPkmn); 

    const pkmnIds = pokémon.map(i => i.id); 
    console.log(pkmnIds); 

    // an aray of pokemon objs where the id is evenly divisible by 3 

    const divisibleByThree = pokémon.filter( i => i.id % 3 === 0 ); 
    console.log(divisibleByThree); 

    // array of pokemon objs that are fire type 

    const fireType = pokémon.filter(i => i.types[0] == "fire"); 
    console.log(fireType); 

    // more than one type 
    const moreThanOne = pokémon.filter( i => i.types.length > 1); 
    console.log(moreThanOne); 
// only names 
    const namesOnly = pokémon.map( i => i.name); 
    console.log("names only" , namesOnly); 

    // array of pokemon with id greater than 99 
    const greaterThan99 = pokémon.reduce((i, pokemon) => {
        if(pokemon.id > 99) {
            i.push(pokemon.name);
        }
        return i 
    }, []);
    console.log(greaterThan99); 


    const onlyPoison = pokémon.reduce((i, pokemon) => {
        if(pokemon.types.includes("poison")) {
            i.push(pokemon.name);
        }
        return i 
    }, []);

    console.log(onlyPoison, "posion only"); 

const flyingPokemon = pokémon.reduce((i, pokemon) => {
    if(pokemon.types[1] === "flying") {
        i.push(pokemon.name, pokemon.types[0]); 
    }
    return i 
}, []); 
// all normals 
console.log(flyingPokemon); 
const normalPokes = pokémon.reduce( (i, pokemon) => {
    if(pokemon.types.includes('normal')) {
        i.push(pokemon.name);
    }
    return i
}, []); 

console.log(normalPokes); 





