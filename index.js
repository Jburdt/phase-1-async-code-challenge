//LOADS PAGE
document.addEventListener('DOMContentLoaded', () => {
    getShows()
   renderShowToDom()
});
const showsUrl =  "http://localhost:3000/shows"

//Grabs shows
function getShows() {
   fetch(showsUrl)
   .then(res => res.json())
   .then(showData => showData.forEach(show => renderShowToDom(show)))
}
//ADDS SHOWS UNDER SHOWS HEADER
function renderShowToDom(shows) {
   console.log(shows.title)
   const listUl = document.getElementById('list')
   const titleLi = document.createElement('li')
   const qList = document.getElementById('queued')
   const qLi = document.createElement('li')
   titleLi.textContent = shows.title;
   listUl.append(titleLi)

   //MOVES SHOW TO QUEUED LIST
   titleLi.addEventListener('click', (e) => {
       qLi.textContent = shows.title
       qList.append(qLi)
       //DELETS ITSELF FROM THE LIST
       qLi.addEventListener('click', function() {
           this.parentNode.removeChild(this)
       })
   })
};

//FILTERS SEARCH
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search');

//RETURNS THE SEARCHED INPUT
searchButton.addEventListener('click', (e) => {
   const value = searchInput.value;
   let filter = value.toUpperCase();
   let i = 0;
   let ul = document.getElementById("list");
   let li = ul.getElementsByTagName('li');
   for (i = 0; i < li.length; i++) {
       let a = li[i];
       let txtValue = a.textContent 
       if (txtValue.toUpperCase().indexOf(filter) > -1) {
         li[i].style.display = "";
       } else {
         li[i].style.display = "none";
       }
     }
});
