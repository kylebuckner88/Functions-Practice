/* 
  For this practice assignment, make a new JavaScript file that you can use to write code that meets the below requirements.
*/

// Create an array of your favorite movies

const favoriteMovies = [
{
  id: 1,
  title: "The Shining",
  director: "Stanley Kubrick",
  release_date: 1980
},
{
  id: 2,
  title: "The Big Lebowski",
  director: "Joel Coen",
  release_date: 1998
},
{
  id: 3,
  title: "Chinatown",
  director: "Roman Polanski",
  release_date: 1974
}
]


// Create a function to add a movie to the array
const ThereWillBeBlood = {
  title: "There Will Be Blood",
  director: "Paul Thomas Anderson",
  release_date: 2007
}


const addMovieToList = (movieObject) => {
  const lastIndex = favoriteMovies.length - 1
  const currentLastMovie = favoriteMovies[lastIndex]
  const maxId = currentLastMovie.id
  const idForNewMovie = maxId + 1

  movieObject.id = idForNewMovie
  favoriteMovies.push(movieObject)
}

// Invoke the above function to add a movie to the array

addMovieToList(ThereWillBeBlood)

console.log(favoriteMovies)

// Create a function that loops through your movie array.  Add a conditional statement to differentiates one or more movies from the array.
const findEarliestMovie = () => {
const earliestMovie = []
  
for (const favoriteMovie of favoriteMovies) {
    if (favoriteMovie.release_date >= 1995) {
    earliestMovie.push(favoriteMovie)
    }
  }
  return earliestMovie
}

// Create a function that concatinates three stings and returns that value

let str1 = "The Shining is a beautiful film because it perfectly combines cinematography and storyline.";
let str2 = "The Big Lebowski uses elements of humor and suspense to create a thought-provoking story.";
let str3 = "Chinatown uses golden era film noir elements to paint a vivid modern mystery. ";
let str4 = "There Will Be Blood is a story of greed, corruption and human experience that is still applicable today.";
let res = str1.concat(str2, str3, str4);
// Invoke the function and console log the output
console.log(res)
// Create a function that console logs the multiplicative of 2 numbers

function multiplicative(favoriteMovies, ThereWillBeBlood) {

}
// Invoke the function

return multiplicative

// Bonus DataType Practice:
// create a ternary and console log it.