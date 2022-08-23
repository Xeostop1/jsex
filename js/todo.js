window.addEventListener("load", function(){

    let todoForm=document.querySelector("#todoForm");
    let todoInput=document.querySelector("#todoInput");
    let ul=document.querySelector("ul");
    let liTag=document.querySelector("ul li");
    

    //왜 함수를 따로 만드는가?! 여러가지 역할이 들어가게 되면 
    //코드가 꼬일 수 있음 동작에 대해서만 하자!

    //form 서브밋하지 않게 하는 함수
    todoForm.addEventListener("submit", function (event) {
        event.preventDefault();      //서브밋을 통해 전달되지 않게 함수처리
        let memo=todoInput.value;
        todoInput.value="";
        createTag(memo);//위의 벨류값을 통해 넣어줌
    });

    //innerHTML 인자를 통해 tag를 넣어줌 
    function createTag(memo) {
        //console.log("인자로 받아왔음 "+memo);
        let li=document.createElement("li");
        let span=document.createElement("sapn");
        let delBtn=document.createElement("input");
        let tag=delBtn.type="button";
        tag+=delBtn.value="🔙";

        delBtn.addEventListener("click", delMemo);

        //태그에 넣고 싶다면 어팬드를 꼭 써주자!
        li.appendChild(span);
        li.appendChild(delBtn);
        span.innerText=memo;
        ul.appendChild(li) //이렇게 연결 해도 들어가지네 우왕!
    }
    
    function delMemo(){
        console.log("펑션 만들기 전에 항상 생각하자!");
    }
   
    //인풋은 꼭!!!!! 폼안에 들어가야 잡히네몰랐음;;; 
    //화면 만들때도 꼭 주의, 버튼은 폼 안에 없어도 돔요소가 잡힘

   

});