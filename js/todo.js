window.addEventListener("load", function(){

    let todoForm=document.querySelector("#todoForm");
    let todoInput=document.querySelector("#todoInput");
    let ul=document.querySelector("ul");
    

    //왜 함수를 따로 만드는가?! 여러가지 역할이 들어가게 되면 
    //코드가 꼬일 수 있음 동작에 대해서만 하자!

    //form 서브밋하지 않게 하는 함수
    todoForm.addEventListener("submit", function (event) {
        event.preventDefault();      //서브밋을 통해 전달되지 않게 함수처리
        let memo=todoInput.value;
        todoInput.value="";
        createLi(memo);//위의 벨류값을 통해 넣어줌
    });

    //innerHTML 인자를 통해 tag를 넣어줌 
    function createLi(memo) {
        //console.log("인자로 받아왔음 "+memo);
        let li=document.createElement("li");
        let span=document.createElement("sapn");
        //태그에 넣고 싶다면 어팬드를 꼭 써주자!
        li.appendChild(span);
        span.innerText=memo;
        ul.appendChild(li) //이렇게 연결 해도 들어가지네 우왕!
    }
    
    let delBtn=document.querySelector(".delbtn");

    delBtn.addEventListener("click", function () {
        console.log("check");
        
    });


});