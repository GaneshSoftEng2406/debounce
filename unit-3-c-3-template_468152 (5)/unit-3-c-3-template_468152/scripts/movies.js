// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

let booking = JSON.parse(localStorage.getItem("movie"))||[]
 
let amount_s = JSON.parse(localStorage.getItem("amount")) || [] ;
  document.querySelector("#wallet").innerText = amount_s

  let movies_div = document.getElementById("movies");
 let id;

  async function search_movies(){

    try{
      const search = document.getElementById("search").value;
       let res = await fetch
      //  (`http://www.omdbapi.com/?s=${search}&apikey=f55a276a`)
       (`https://www.omdbapi.com/?apikey=3391afd8&s=${search}`);
       let data = await res.json();
       console.log("data :", data)
       let Movies = data.Search;
       return Movies;
    }
    catch(err){
      console.log("err :", err)
    }
       
  }
   

   function appendData(data){
    
    data.forEach(function(el){
      let div = document.createElement("div");
      div.setAttribute("class", "movie_tab");
      let p = document.createElement("p");
      p.innerText = el.Title;

      let image = document.createElement("img");
      image.src = el.Poster;
      image.setAttribute("class", "img");
       

      let btn = document.createElement("button");
      btn.setAttribute("class", 'book_now' )
      btn.innerText = "Book Now"
      btn.addEventListener("click", function(){
        book_movie(el);
      } )
      div.append(image, p, btn)
     movies_div.append(div);

    })
  
   }

    async function main(){
       let data = await search_movies();
       if(data == undefined){
         return false;
       }
       appendData(data);
       console.log("data :", data);
    }
     function debounce(func, delay){
       if(id){
         clearTimeout(id);
       }
       id= setTimeout(() => {
         func();
       }, delay);
     }
   function book_movie(el){
     console.log(el);
     booking+(el);
     localStorage.setItem("movie", JSON.stringify(booking))
     alert("movie added");
     window.location.href = "checkout.html";
   }