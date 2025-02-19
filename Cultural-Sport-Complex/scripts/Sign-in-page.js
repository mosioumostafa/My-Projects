let usernameInput = document.getElementById("username");
let passwordInput = document.getElementById("password");
let signupButton = document.querySelector(".sign-up-button");

let accountIndex = [];

let accountsToCheckIn = JSON.parse(localStorage.getItem("storedAccountsInLocal"));
console.log(accountsToCheckIn);

signupButton.addEventListener("click" , ()=>{
    if(usernameInput.value.length == 0 || passwordInput.value.length == 0 ){
        alert("لطفا فرم ها را خالی نگذارید !")
    }else{
        checker(usernameInput , passwordInput)
    }
})

function checker( a, b){
    let isRight = 0 ;
    for( i = 0 ; i<accountsToCheckIn.length ; i++){
        if( a.value == accountsToCheckIn[i].username || b.value == accountsToCheckIn[i].password){
            isRight++;
            accountIndex.push(
                accountsToCheckIn[i]
            );
            localStorage.setItem("accountIndex" , JSON.stringify(accountIndex));
        }
    };
    if(isRight != 0 ){
        alert("با موفقیت وارد شدید !")
        window.location.href = "./Hp-after-R-or-Su.html"
    }else{
        alert("لطفا از صحیح بودن اطلاعات خود مطمِئن شوید !")
    }
}



 
 
 