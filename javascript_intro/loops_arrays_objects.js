// let sports = ['football', 'tennis', 'rugby']
// console.log(sports.length);

// let firstSport = sports[0];
// // console.log(firstSport);

// let secondSport = sports[1];
// // console.log(secondSport);

// sports.push('curling');
// console.log(sports);
// //push adds an item at the end

// // sports.pop();
// // console.log(sports);

// // let removedSport=sports.pop();
// // console.log(removedSport);
// // 
// sports.unshift('basketball');
// console.log(sports);
// // unshift removes something else

// sports.shift();
// console.log(sports);
// //shift removes first entry

// let removedSport2 = sports.splice(1, 1)
// console.log(removedSport2);
// //first number determines index start, second determnes number of items after to remove, splice funct returns another list with removed items


// for (let currentSport of sports) {
//     let uppercasedSport = currentSport.toUpperCase();
//     console.log(uppercasedSport);
// }

// for (let i = 0; i < sports.length; i++) {
//     let uppercasedSport = sports[i].toUpperCase();
//     console.log(i,uppercasedSport);

// }

let movie = {
    title: 'It\'s a Wonderful Life',
    year: 1946,
    language: 'Arabic'
};
// console.log(movie)
// let title=movie.title;
// console.log('title:', title);

movie.cast = ['James Stewart', 'Donna Reed'];
// console.log(movie);

// movie.language = "Chinese"; intechangable with the one on the next line
// movie['language']='French'
// console.log(movie)


movie['subtitle-language'] = "German";

delete movie.year;
// console.log(movie)

movie.ratings = {
    critic: 94,
    audience: [95, 88]
}
// console.log(movie);
// console.log(movie.ratings.audience[0])

// FOR OF is to loop over an array
// FOR IN is to loop over an object

for (let i in movie) {
    let value=movie[i]

    console.log(`The ${i} is ${value}`);

}

let keys=Object.keys(movie)
console.log(keys)
