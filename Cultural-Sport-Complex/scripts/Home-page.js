localStorage.removeItem("accountIndex")
 let athleteCounter = document.querySelector(".athlete-counter-div");
 let athleteCounterArray = JSON.parse(localStorage.getItem("storedAccountsInLocal"));
 let hidingList = document.querySelector(".sport-majors-hiding-list");
 let popUpAlert = document.querySelector(".popup-alert");
 
 hidingList.addEventListener("click" , ()=>{
    alert("برای استفاده از خدمات سایت ابتدا ثبت نام کنید یا وارد سیستم شوید .")
 })








 athleteCounter.innerHTML += 
 '<div class="athlete-counter">' +"بیش از" + athleteCounterArray.length +"  نفر ورزشکار مهمان مجموعه ما !"+ '</div>'


 