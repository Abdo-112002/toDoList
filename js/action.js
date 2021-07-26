

// ****************************************start simple to do list ****************************

var myAdd = document.querySelector("#myAdd");
var myInput = document.querySelector("#yourText");
var toDoList = document.querySelector("#toDoList");

var arrOfItem = ["Add item like this","hello my friend"];
function showarrOfItem(element){

    toDoList.innerHTML ="";

   for(let e=0 ; e<element.length ; e++){
        toDoList.innerHTML += `<li> 
            ${element[e]} 
        <span onclick= 'mYdelete(${element[e].length-1})' ></span>
        </li>`;
   }
}

window.onload = function() {
    showarrOfItem(arrOfItem);
};



// add item
myAdd.onclick = function(){
    if(myInput.value == ""){
        document.querySelector("#mYerror").innerHTML="error! the input must be valid";
     }else{
        document.querySelector("#mYerror").innerHTML=""; 
         arrOfItem.push(myInput.value);
         var lastItem = arrOfItem[arrOfItem.length-1];
         toDoList.innerHTML += `<li> 
            ${lastItem} 
        <span onclick= 'mYdelete(${lastItem.length-1})' ></span>
        </li>`;
         myInput.value="";
         myInput.focus();
     }
};


//deleted
function mYdelete(ul) {
   for(let m=0 ; m<arrOfItem.length ; m++){
       if(arrOfItem[m].length-1 == ul)
       arrOfItem.splice(m,1);
   }

   showarrOfItem(arrOfItem);
}
