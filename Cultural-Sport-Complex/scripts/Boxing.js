let chooseForAccouunting = document.querySelector(".choose-btn");
let chooseForAccouunting2 = document.querySelector(".choose-btn2");
let indexForAccountingBoxing = {};

 let tysonFury = {
    sport : "بوکس",
    name : "تایسون فیوری",
    salary : "تومان" + 700
 };
 let mikeTyson = {
    sport : "بوکس",
    name : "مایک تایسون",
    salary : "نومان" + 2500
 };
 console.log(indexForAccountingBoxing)

 chooseForAccouunting.addEventListener("click" , ()=>{
    localStorage.removeItem("indexForAccountingBoxing");
    indexForAccountingBoxing = tysonFury ;
    localStorage.setItem("indexForAccountingBoxing" , JSON.stringify(indexForAccountingBoxing));
 });


 chooseForAccouunting2.addEventListener("click" , ()=>{
    localStorage.removeItem("indexForAccountingBoxing");
    indexForAccountingBoxing = mikeTyson;
    localStorage.setItem("indexForAccountingBoxing" , JSON.stringify(indexForAccountingBoxing));
 })

