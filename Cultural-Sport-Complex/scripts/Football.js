let chooseForAccouunting = document.querySelector(".choose-btn");
let chooseForAccouunting2 = document.querySelector(".choose-btn2");
let indexForAccountingFootball = {};

 let zinedineZidane = {
    sport : "فوتبال" ,
    name : "زین الدین زیدان",
    salary : "تومان" + 1000
 };
 let pepGuardiola = {
    sport : "فوتبال" ,
    name : "پپ گواردیولا",
    salary : "نومان" + 500
 };
 console.log(indexForAccountingFootball)

 chooseForAccouunting.addEventListener("click" , ()=>{
    localStorage.removeItem("indexForAccountingFootball");
    indexForAccountingFootball = zinedineZidane ;
    localStorage.setItem("indexForAccountingFootball" , JSON.stringify(indexForAccountingFootball));
 });


 chooseForAccouunting2.addEventListener("click" , ()=>{
    localStorage.removeItem("indexForAccountingFootball");
    indexForAccountingFootball = pepGuardiola;
    localStorage.setItem("indexForAccountingFootball" , JSON.stringify(indexForAccountingFootball));
 })

