const pokemons = [
    { id: 3, name: 'Bulbasaur', type: 'Grass', experience: 64 },
    { id: 7, name: 'Charmander', type: 'Fire', experience: 62 },
    { id: 13, name: 'Squirtle', type: 'Water', experience: 63 },
    { id: 56, name: 'Caterpie', type: 'Bug', experience: 39 },
    { id: 1408, name: 'Ekans', type: 'Poison', experience: 58 },
    { id: 63, name: 'Eevee', type: 'Normal', experience: 65 },
    { id: 27, name: 'Pikachu', type: 'Electric', experience: 112 },
    { id: 31, name: 'Pidgey', type: 'Flying', experience: 50 },
    { id: 21, name: 'Meowth', type: 'Normal', experience: 58 },
    { id: 22, name: 'Snorlax', type: 'Normal', experience: 154 },
    { id: 35, name: 'Psyduck', type: 'Water', experience: 64 },
];
/*-----------------------------------------------------------------------------------------------------------------------------------------------*/
//Yukarıdaki dizi içinde bulunan "Water" türündeki Pokemonları `filter` kullanarak filtrelemek istiyoruz.
//Filtreleme işlemi sonucunda kaç "Water" türündeki Pokemon olduğunu ve bu Pokemon'ların isimlerini bulmanız gerekiyor.

const waterPokemons = pokemons.filter(pokemon => pokemon.type === 'Water');
console.log(`"Water" türündeki Pokemon sayısı: ${waterPokemons.length}`);
console.log(`"Water" türündeki Pokemon isimleri: ${waterPokemons.map(waterPokemon => waterPokemon.name).join('-')}`);
/*-----------------------------------------------------------------------------------------------------------------------------------------------*/
//Yukarıdaki dizide bulunan her bir Pokemon'un deneyim puanını 2 katına çıkarmak ve bu işlem sonucunda yeni bir dizi oluşturmak istiyorsunuz.
//Bu yeni dizi, her Pokemon'un adını ve yeni deneyim puanını içermelidir.

const doubledExperience = pokemons.map(pokemon => ({
    name: pokemon.name,
    experience: pokemon.experience * 2
}));
console.log(doubledExperience);
/*-----------------------------------------------------------------------------------------------------------------------------------------------*/
//Pokemon dizisinde, tüm "Water" türündeki Pokemonlar deneyim puanlarının en az 60 olduğu bir koşulu karşılıyor mu ?
// Ayrıca, "Fire" türündeki Pokemonlar içinden en az birinin deneyim puanı 70 veya daha fazla mı ?
// Bu iki koşulu kontrol eden ve sonuçları ekrana yazdıran bir kod yazın.
const allWaterPokemonsHighExperience = waterPokemons.every(pokemon => pokemon.experience >= 60);
const someFirePokemonHighExperience = pokemons.some(pokemon => pokemon.type === 'Fire' && pokemon.experience >= 70);
console.log(
    "Tüm 'Water' türündeki Pokemonlar deneyim puanı en az 60 mı?",
    allWaterPokemonsHighExperience
);
console.log(
    "'Fire' türündeki Pokemonlardan en az biri deneyim puanı 70 veya daha fazla mı?",
    someFirePokemonHighExperience
);
/*-----------------------------------------------------------------------------------------------------------------------------------------------*/
//Pokemon dizisinde bulunan "Electric" türündeki Pokemon'ların deneyim puanlarının toplamını
//kullanarak hesaplamak istiyorsunuz.

const totalElectricExperience = pokemons
    .filter(pokemon => pokemon.type === 'Electric')
    .reduce((total, pokemon) => total + pokemon.experience, 0);

console.log(
    "Electric türündeki Pokemon'ların toplam deneyim puanı: " +
    totalElectricExperience
);
/*-----------------------------------------------------------------------------------------------------------------------------------------------*/
//Pokemon dizisinde, her türdeki Pokemon'ların deneyim puanlarının ortalamasını hesaplamak istiyorsunuz.

//Her türdeki Pokemon'ların ayrı ayrı deneyim puanlarının ortalaması
function calculateTypeExperienceAverages(pokemons) {
    const typeSums = {};
    const typeCounts = {};

    pokemons.forEach(pokemon => {
        const { type, experience } = pokemon;

        if (!typeSums[type]) {
            typeSums[type] = 0;
            typeCounts[type] = 0;
        }

        typeSums[type] += experience;
        typeCounts[type] += 1;
    });

    const typeAverages = {};

    for (const type in typeSums) {
        typeAverages[type] = typeSums[type] / typeCounts[type];
    }

    return typeAverages;
}

const typeExperienceAverages = calculateTypeExperienceAverages(pokemons);
console.log(typeExperienceAverages);
//Her türdeki Pokemon'ların toplam deneyim puanlarının ortalaması
function calculateTotalAverageExperience(pokemons) {
    const totalExperience = pokemons.reduce((acc, pokemon) => acc + pokemon.experience, 0);
    const averageExperience = totalExperience / pokemons.length;

    return averageExperience;
}

console.log(calculateTotalAverageExperience(pokemons));