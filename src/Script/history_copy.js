$(document).ready(() => { //가장 먼저 실행


  // Trigger Navigation toggle button
  //JQuery - animation 이벤트(toggleClass(), trigger())
  $('.trigger').on('click', function () {
    $(this).toggleClass('active')
    $('.gnb').toggleClass('active')
  })
  // Trigger .gnb a 클릭 시 해당 위치로 스크롤 후 네비게이션 닫힘.
  $('.gnb a').on('click', function () {
    $('.gnb, .trigger').removeClass('active')
  })

  // jQuery.scrollTo
  $('.gnb a, .goToTop').on('click', function (e) {
    $.scrollTo(this.hash || 0, 800) //window.scrollTo(x-좌표, y-좌표)
    e.preventDefault()
  })

  // scroll down 시 active class 추가
  $(window).on('scroll', () => {
    $(window).scrollTop() > 50 ? $('header, .goToTop').addClass('active') : $('header, .goToTop').removeClass('active')
  })
})


//=========================바닐라 js========================================
window.addEventListener('load',function (){
  let datas={
    "items": [
      {
        "title": "2022",
        "year" :"2022",
        "content": " MONTREUX JAZZ FESTIVAL WHERE LEGENDS ARE BORN ",
        "image": "../Assets/images/historyimg/2022 LARGE-1800x0-c-default.jpg"
       },
      {
        "title": "2019",
        "year" :"2019",
        "content": "Elton John offers a historic show at Saussaz Stadium before 15,000 people.",
        "image": "../Assets/images/historyimg/2019 Elton-John_square-1536x1536.jpg"
      },
      {
        "title": "2016",
        "year" :"2016",
        "content": "The Festival celebrates its fiftieth anniversary with numerous special projects and nods to its history.",
        "image": "../Assets/images/historyimg/2016 MJF_20160702_AMBIANCE_EmilienItim_24-e1578996746941.jpg"
      },
      {
        "title": "2013",
        "year" :"2013",
        "content": "Claude Nobs passes away in January.",
        "image": "../Assets/images/historyimg/2013ClaudeNobsCarré-copie-1-2048x2048.jpg"
      },
      {
        "title": "2007",
        "year" :"2007",
        "content": " Prince serves up a surprise jam session after his first concert in Montreux. He will return in 2009, then for three nights in 2013.",
        "image": "../Assets/images/historyimg/2007_Prince-©-2013-FFJM-Marc-Ducrest-scaled-e1578995552841.jpg"
       },
      {
        "title": "2002",
        "year" :"2002",
        "content": " A great friend of Claude Nobs, David Bowie gives one of he most emblematic concerts of the Festival. For a curtain call, he plays his Berlin album “Low” in its entirety",
        "image": "../Assets/images/historyimg/2002_David-Bowie-©-2002-scaled-e1578995315714.jpg"
      },
      {
        "title": "1991",
        "year" :"1991",
        "content": "Quincy Jones co-produces the Festival from 1991 to 1993. Miles Davis performs for the 10th and final time in Montreux, alongside Quincy Jones. First concerts recorded in HD.",
        "image": "../Assets/images/historyimg/1991 QuincyxMiles_1991_Edouard-Curchod-1536x1536.jpg"
      },
      {
        "title": "1986",
        "year" :"1986",
        "content": "Two of New York’s greatest artists, Keith Haring and Andy Warhol,<br> create in tandem the poster for the 20th anniversary of the Montreux Jazz Festival.",
        "image": "../Assets/images/historyimg/1986 Poster_Keith-Haring-Andy-Warhol.jpg"
      },
      {
        "title": "1982",
        "year" :"1982",
        "content": "          Swiss artist Jean Tinguely imagines the poster of the Montreux Jazz Festival and creates the highly recognizable logo.",
        "image": "../Assets/images/historyimg/1982 mjf-poster-1982-1536x1536.jpg"
      },
      {
        "title": "1980",
        "year" :"1980",
        "content": "Marvin Gaye gives his only performance at Montreux Jazz Festival. After watching concert recordings at Claude Nobs’",
        "image": "../Assets/images/historyimg/1980 Marvin-Gaye-2048x2045.jpg"
       },
      {
        "title": "1976",
        "year" :"1976",
        "content": "The incredibly intense Nina Simone concert becomes one of the most legendary performances of her career. ",
        "image": "../Assets/images/historyimg/1976_NinaSimone.jpg"
      },
      {
        "title": "1971",
        "year" :"1971",
        "content": "The fire at the Montreux Casino during a Frank Zappa concert inspires Deep Purple to write the hit “Smoke on the Water”. That same year, Claude Nobs convinces Aretha Franklin to perform at the Festival by offering her a box of chocolates! ",
        "image": "../Assets/images/historyimg/1971Alain_Bettex-1536x1536.jpg"
      },
      {
        "title": "1970",
        "year" :"1970",
        "content": " Less than one year after his Woodstock performance, Carlos Santana gives his first concert at Montreux.",
        "image": "../Assets/images/historyimg/1970_Santana-1502x1536.jpg"
      },
      {
        "title": "1969",
        "year" :"1969",
        "content": "Ella Fitzgerald plays at the Festival for the first time. Les McCann & Eddie Harris record the live album “Swiss Movement”, which becomes the first jazz record to sell over a million copies.",
        "image": "../Assets/images/historyimg/1969_Ella-1536x1536.jpg"
      },
  
      {
        "title": "1968",
        "year" :"1968",
        "content": "Bill Evans’ concert at the Festival is immortalized on an album and earns a Grammy Award.The Chillon Castle is pictured on the cover.",
        "image": "../Assets/images/historyimg/1968 41A6K85D4SL._SY400_.jpg"
       },
      {
        "title": "1967",
        "year" :"1967",
        "content": " A great friend of Claude Nobs, David Bowie gives one of the most emblematic concerts of the Festival. For a curtain call, he plays his Berlin album “Low” in its entirety",
        "image": "../Assets/images/historyimg/2002_David-Bowie-©-2002-scaled-e1578995315714.jpg"
      }
    ]
  }
  //--------<li> SetAttribute-------------
  function setAttriLi(items){
    return `
    <li class="item">
        <img src="${items.image}" alt="${items.title}" class="item__thumbnail" />
        <div class ="barDiv"></div>
        <button> ${items.year} </button>
        <br>
        <span class="item__description">${items.content}</span>
    </li>
    `;
  }

//--------버튼 setAttri-------------
  function setAttriBtn(titleYear){
        let createBtn=document.createElement("button");
        createBtn.classList.add("btn", "colorBtn", `${titleYear}`);
        createBtn.setAttribute("data-key", `${titleYear}`);
        createBtn.setAttribute("data-value", `${titleYear}`);
        //createBtn.setAttribute("onclick", "clickInner()");  //setAttribute로 onclick을 넣고 싶다면 함수를 통을 넣자! ""로 넣은 스트링으로 들어간다!
        createBtn.innerText=titleYear;    //제발까먹지 말자! =해야 넣는다!
        // console.log(createBtn);
        return createBtn;
      }

//--------json타이틀로 Append-------------
function yearBtnCreate(){
  let data;
  let btnDiv=document.querySelector(".btns");
  for (let i = 0; i <datas.items.length; i++) {
    data=datas.items[i]
    let title=data.title;
    //let createBtn=document.createElement("button");
    let resBtn=setAttriBtn(title);
    btnDiv.append(resBtn);
  }
}      
yearBtnCreate();

let btn=document.querySelectorAll(".colorBtn");
for (let i = 0; i < btn.length; i++) {
  //console.log(btn[i]);
  btn[i].addEventListener("click", function () {
    let liDiv=document.querySelector(".items");  //console.log(liDiv);  
    let lidata=datas.items[i]
    console.log(lidata);
  });
} //버튼생성 확인을 위한 for 확인완료



// let btn=document.querySelectorAll(".colorBtn");
// for (let i = 0; i < btn.length; i++) {
//   btn[i].addEventListener("click", function () {
//     let data=datas.items[i]
//      let liDiv=document.querySelector(".items");
     
//      console.log(btn);
//      //console.log(liDiv);
//      for (let i = 0; i <datas.items.length; i++) {
      
//       let resLi=setAttriLi(data);
//       liDiv.append(resLi);
//     }
//    });
// }


// let btn=document.querySelectorAll("button");
// console.log(btn);



});//close
