window.addEventListener("load", function(){

    let todoForm=document.querySelector("#todoForm");
    let todoInput=document.querySelector("#todoInput");
    let ul=document.querySelector("ul");
    
    todoForm.addEventListener("submit", function () {
       let memo=todoInput.value;
       let Tag=`<li>${memo}</li>`
       ul.innerHTML(Tag);
    });



});