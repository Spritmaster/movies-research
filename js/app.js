
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



getMovies()
.then((data)=>{
    console.log(data.Search);
    data.Search.forEach(el=>{
        console.log(el.Title);
    })
    updateUI(data.Search)
})




