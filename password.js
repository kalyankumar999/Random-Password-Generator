const specials = ["!","@","#","$","%","^","&","*"];

const alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l',
'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

let upperCaseArr = alphabets.map(word => word.toUpperCase());
console.log(upperCaseArr);

const numbers = ["0","1","2","3","4","5","6","6","7","8","9"];

const ambigious = ["[","]","(",")",":",";",",","<",">","{","}"];

let password= "";

document.getElementById("form").onsubmit = function() {
  let input1 = document.getElementById("special").value;
  let input2 = document.getElementById("numeric").value;
  let input3 = document.getElementById("alphabates").value;
  let input4 = document.getElementById("ambigious").value;
  let input5 = document.getElementById("uppercase").value;

  handleSpecialChar(input1);
  handleNumeric(input2);
  handleAlphabates(input3);
  handleAmbigious(input4);
  handleupperCaseArr(input5);
  heartCount4(password)

  localStorage.setItem("textvalue",password1);
  return false;

};

//Taking inputs

function handleSpecialChar(input1) {

  if (input1 > 0){
      
        for(let i=1; i<=input1; i++){
          let randomIndex = Math.floor(Math.random() * specials.length);
          let randomValue = specials[randomIndex];
          password += randomValue
          
        }
    }

}

function handleNumeric(input2) {
  
    if (input2 > 0){
        
          for(let i=1; i<=input2; i++){
            let randomIndex = Math.floor(Math.random() * numbers.length);
            let randomValue = numbers[randomIndex];
            password += randomValue
          }
          
      }

  }

  function handleAlphabates(input3) {
      
      if (input3> 0){
          
            for(let i=1; i<=input3; i++){
              let randomIndex = Math.floor(Math.random() * alphabets.length);
              let randomValue = alphabets[randomIndex];
              password += randomValue
            }
        }
    }
    
    function handleAmbigious(input4) {
        
        if (input4> 0){
            
              for(let i=1; i<=input4; i++){
                let randomIndex = Math.floor(Math.random() * ambigious.length);
                let randomValue = ambigious[randomIndex];
                password += randomValue
              }
          }
      }

      function handleupperCaseArr(input5) {
        
        if (input5> 0){
            
              for(let i=1; i<=input5; i++){
                let randomIndex = Math.floor(Math.random() * upperCaseArr.length);
                let randomValue = upperCaseArr[randomIndex];
                password += randomValue
              }
          }
         
      }
//displaying Password
      
      let password1;
      const  heartCount4 = (password) =>{
        console.log("password",password)
        password1='';
        const arr = password.split('');
      
        arr.sort(() => Math.random() - 0.5);
       
        password1= arr.join('');
      
      
        
      }
  


// burger bars
    const div = document.getElementById("bars");
    function burgerMenue() {
    
    if (div.style.display == "none") {
      div.style.display = "block";
      console.log("1")
    } else {
      console.log("2")
      div.style.display = "none";
    }
  }

  

    