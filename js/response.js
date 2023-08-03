
let key='8c8f0b3f'

async function getMovies(){
    const api=`https://www.omdbapi.com/?s=tom&apikey=${key}`
    const res =await fetch(api)
    const data= await res.json()
    return data
}

getMovies()
let inp=document.querySelector(".research")
document.addEventListener("keyup",(e)=>{
    if(e.key=="Enter"){
        async function qidirish(){
            const api=`https://www.omdbapi.com/?s=${inp.value}&apikey=${key}`
            const response =await fetch(api)
            if (response.status !== 200) {
              throw new Error("errer");
            }
            const dataQ= await response.json()
            inp.value=" "
            return dataQ
        }

      
let posters=document.querySelector(".details")




const updateUI = (movieArr) => {

  const ul = document.createElement("ul");
  const docFrag = document.createDocumentFragment();

  movieArr.forEach((movie) => {
    const box = document.createElement("a")
    box.href="./single.html";
    box.classList.add("m-box");
    box.id=movie.imdbID
    box.innerHTML = `
      <img class="pos" src="${movie.Poster}" alt=""  height="260">

      <div class="info">
      <h1>${movie.Title}</h1>
      <p>Year: <span>${movie.Year}</span></p>
      </div>

    `;
    box.addEventListener("click",()=>{
        localStorage.setItem("main",`${box.id}`)
    })


    docFrag.appendChild(box);


   
  });
  ul.appendChild(docFrag)
  posters.appendChild(ul)

 };;


qidirish()
.then((data)=>{
  posters.innerHTML=" " 
  console.log(data.Search);
  data.Search.forEach(el=>{
      console.log(el.Title);
  })
  updateUI(data.Search)
})
.catch((err) => {console.log(Error);})






    }
})












