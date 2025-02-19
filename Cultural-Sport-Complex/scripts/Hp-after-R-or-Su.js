 let userInfoDiv = document.querySelector(".user-info");
 let logOutButton = document.querySelector(".logout-button");
 let athleteCounter = document.querySelector(".athlete-counter-div");
 let athleteCounterArray = JSON.parse(localStorage.getItem("storedAccountsInLocal"));
 accountIndexInUse =  JSON.parse(localStorage.getItem("accountIndex"));
  userInfoDiv.innerHTML += 
  '<span>'+ accountIndexInUse[0].firstname +'</span>' + 
  '<span class ="m-ed-span-in-header">'+ accountIndexInUse[0].lastname +'</span>' +
  '<span>' + "خوش آمدید !" + '</span>';

  logOutButton.addEventListener("click" , ()=>{
    localStorage.removeItem("accountIndex");
    window.location.href = "./Home-page.html"
  })














  athleteCounter.innerHTML += 
  '<div class="athlete-counter">' +"بیش از" + athleteCounterArray.length +"  نفر ورزشکار مهمان مجموعه ما !"+ '</div>'
 
  
 
