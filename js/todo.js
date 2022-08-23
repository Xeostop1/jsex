window.addEventListener("load", function(){

    let todoForm=document.querySelector("#todoForm");
    let todoInput=document.querySelector("#todoInput");
    let ul=document.querySelector("ul");
    let liTag=document.querySelector("ul li");
    let memoArr=[];
    //노드에 넣을 때 마다 push!로 넣어줌 arrryList.add(data); 처럼
    

    //왜 함수를 따로 만드는가?! 여러가지 역할이 들어가게 되면 
    //코드가 꼬일 수 있음 동작에 대해서만 하자!

    //form 서브밋하지 않게 하는 함수
    todoForm.addEventListener("submit", function (event) {
        event.preventDefault();      //서브밋을 통해 전달되지 않게 함수처리
        let memo=todoInput.value;
        memoArr.push(memo);
        todoInput.value="";
        createTag(memo);//위의 벨류값을 통해 넣어줌
        saveMemo();
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
    
    //이벤트가 직접들어간 곳에 target찾아와서 삭제
    function delMemo(event){
        //지금은 리턴만 해준상태임 값을 파라미터로 세팅하지 않았음
        let li= event.target.parentElement;
        //아 타켓을 가져와야 클릭한 li가 가져올수 있구나
        //그런데 리무브는 파라미터가 없이도 쓸수 있음??? 
        //리무브는 요소을 삭제하는거라서 노드 자체를 없애는거고
        //리무브차일드는 부모에게서 자식 객체를 삭제하는것
        //그래서 정확하게 프로퍼티에 명시해줘야함
        li.remove();
        //버튼 부모의 어떤것이 클릭되었는지 알수 있는것
    }
   
    //인풋은 꼭!!!!! 폼안에 들어가야 잡히네몰랐음;;; 
    //화면 만들때도 꼭 주의, 버튼은 폼 안에 없어도 돔요소가 잡힘

   function saveMemo() {
        localStorage.setItem("memos", memoArr);//키랑 벨류
        //로컬스토리지에 세팅하기
   }

});