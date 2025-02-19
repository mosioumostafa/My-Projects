let chooseForAccouunting = document.querySelector(".choose-btn");
let chooseForAccouunting2 = document.querySelector(".choose-btn2");
let indexForAccountingVolleyball = {};

 let bernardoResende = {
    sport : "والیبال" ,
    name : "برناردو رزنده",
    salary : "تومان" + 200
 };
 let julioVelasko = {
    sport : "والیبال" ,
    name : "خولیو ولاسکو",
    salary : "نومان" + 300
 };
 console.log(indexForAccountingVolleyball)

 chooseForAccouunting.addEventListener("click" , ()=>{
    localStorage.removeItem("indexForAccountingVolleyball");
    indexForAccountingVolleyball = bernardoResende ;
    localStorage.setItem("indexForAccountingVolleyball" , JSON.stringify(indexForAccountingVolleyball));
 });


 chooseForAccouunting2.addEventListener("click" , ()=>{
    localStorage.removeItem("indexForAccountingVolleyball");
    indexForAccountingVolleyball = julioVelasko;
    localStorage.setItem("indexForAccountingVolleyball" , JSON.stringify(indexForAccountingVolleyball));
 })

