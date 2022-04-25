// Store the wallet amount to your local storage with key "amount"
let amount_s = JSON.parse(localStorage.getItem("amount")) ||[] ;

    function add_wallet(){
   
     let amount_s1 = document.getElementById("amount").value;
     console.log(amount_s1);

     amount_s = Number(amount_s1);
     let x = localStorage.getItem('amount');

     if(x == null){
       Number(x=0)
     }
     let sum = Number(amount)+Number(x);
     amount_s= sum;

     document.querySelector("#wallet").innerText = amount_s1
      
   localStorage.setItem("amount", JSON.stringify(Number(amount_s))  )

    }