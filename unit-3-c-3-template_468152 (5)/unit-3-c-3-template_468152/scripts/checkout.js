// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let booking = JSON.parse(localStorage.getItem("movie"))||[]

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