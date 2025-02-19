let headerDetails = document.querySelector(".header-details");
let accountIndex = JSON.parse(localStorage.getItem("accountIndex"));
let listOfAccounts = document.querySelector(".list-of-accounts");
let vg = document.querySelector(".vg");

indexForAccountingBoxing = JSON.parse(localStorage.getItem("indexForAccountingBoxing"));
indexForAccountingVolleyball = JSON.parse(localStorage.getItem("indexForAccountingVolleyball"));
indexForAccountingFootball = JSON.parse(localStorage.getItem("indexForAccountingFootball"));
headerDetails.innerHTML +=
 '<span>' + accountIndex[0].firstname + accountIndex[0].lastname + '</span>';
listOfAccounts.innerHTML +=
        '<div class="salary-lists ">'+
            '<span style="flex: 0.5;">'+ 1 + '</span>'+
            '<span>' + indexForAccountingBoxing.sport + '</span>' +
            '<span>' + indexForAccountingBoxing.name + '</span>' + 
            '<span>' + indexForAccountingBoxing.salary + '</span>' +
            '<div class="d-flex flex-row justify-content-around">' + 
            '<button class="btn btn-danger">' + "حذف" + '</button>' +
            '<button class="btn btn-success vg">' + "پرداخت" + '</button>' +
            '</div>' +
         '</div>' +
         '<div class="salary-lists ">'+
            '<span style="flex: 0.5;">'+ 2 + '</span>'+
            '<span>' + indexForAccountingFootball.sport + '</span>' +
            '<span>' + indexForAccountingFootball.name + '</span>' + 
            '<span>' + indexForAccountingFootball.salary + '</span>' +
            '<div class="d-flex flex-row justify-content-around">' + 
            '<button class="btn btn-danger">' + "حذف" + '</button>' +
            '<button class="btn btn-success vvg">' + "پرداخت" + '</button>' +
            '</div>' +
         '</div>' +
         '<div class="salary-lists ">'+
            '<span style="flex: 0.5;">'+ 3 + '</span>'+
            '<span>' + indexForAccountingVolleyball.sport + '</span>' +
            '<span>' + indexForAccountingVolleyball.name + '</span>' + 
            '<span>' + indexForAccountingVolleyball.salary + '</span>' +
            '<div class="d-flex flex-row justify-content-around">' + 
            '<button class="btn btn-danger">' + "حذف" + '</button>' +
            '<button class="btn btn-success vvvg">' + "پرداخت" + '</button>' +
            '</div>' +
         '</div>';

