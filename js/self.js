
let key='263d22d8'

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
<h1>Title: <span>${data.Title}</span></h1>
<h1>Language: <span>${data.Language}</span></h1>
<h1>Countries: <span>${data.Country}</span></h1>
<h1>Title: <span>${data.Title}</span></h1>

<div class="ball">${data.imdbRating}</div>
</div>

`
}

getMovies()
.then((data)=>{
    console.log(data);
    updateUI(data)
})