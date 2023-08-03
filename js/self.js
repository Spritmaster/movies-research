
let key='8c8f0b3f'

async function getMovies(){
    let cinema=localStorage.getItem("main")
    const api=`https://www.omdbapi.com/?i=${cinema}&apikey=${key}`
    const res =await fetch(api)
    const data= await res.json()
    return data
}

let cinema=document.querySelector(".cinema_box")

function updateUI(data){
cinema.innerHTML=`
<img class="picture" src="${data.Poster}" alt=""  height="260">

<div class="cinema__info">
<h1 class="title__text">${data.Title}</h1>
<hr>
<h1>Year: <span>${data.Year}</span></h1>
<h1>Countries: <span>${data.Country}</span></h1>
<h1>Language: <span>${data.Language}</span></h1>
<h1>Actors: <span>${data.Actors}</span></h1>
<h1>Runtime: <span>${data.Runtime}</span></h1>
<h1>Discription:<span class="plot__text">${data.Plot}</span></h1>

<div class="ball">${data.imdbRating}</div>
</div>

`
}

getMovies()
.then((data)=>{
    console.log(data);
    updateUI(data)
})