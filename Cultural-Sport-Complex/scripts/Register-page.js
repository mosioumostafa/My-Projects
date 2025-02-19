let newFirstName = document.querySelector(".new-firstname");
let newLastName = document.querySelector(".new-lastname");
let newUserName = document.querySelector(".new-username");
let newPassword = document.querySelector(".new-password");
let submitButton = document.querySelector(".form-submit-button");

 let storedAccounts = [];
 let accountIndex = [];

 if(localStorage.getItem("storedAccountsInLocal") != null){
    storedAccounts = JSON.parse(localStorage.getItem("storedAccountsInLocal"))
 };

submitButton.addEventListener("click" , ()=>{
    if(newUserName.value.length == 0 || newPassword.value.length == 0){
        alert("please enter your information correctly!");
    }else{
        alert("ثبت نام با موفقیت انجام شد!")
        registerNewUser(newFirstName , newLastName , newUserName , newPassword);
        window.location.href = "./Hp-after-R-or-Su.html"
    }
});



function registerNewUser(a , b , c , d){
    storedAccounts.push({
        firstname : a.value,
        lastname : b.value,
        username : c.value,
        password : d.value,
        balance : 10000 + "تومان"
    });
    accountIndex.push({
        firstname : a.value,
        lastname : b.value,
        username : c.value,
        password : d.value,
        balance : 10000 + "تومان"
    });
    localStorage.setItem("storedAccountsInLocal" , JSON.stringify(storedAccounts));
    localStorage.setItem("accountIndex" , JSON.stringify(accountIndex))
}