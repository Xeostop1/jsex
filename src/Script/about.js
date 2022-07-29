    window.addEventListener('load',function (){
      //=========배경화면정리==================
      const introBg=this.document.querySelector(".intro");
      introBg.style.backgroundImage=`url("")`;


      $(".sliderWrap").slick({
          slidesToShow: 1,
          centerMode: true,
          variableWidth: true,
          slidesToScroll: 1,
          autoplay: true,
          infinite : true, 
          autoplaySpeed: 5000,
          pauseOnHover : true,
          arrows: false
          // dots : true
      })
      
        //==============디데이======================== 구현불가!! 
      const dDayDiv=document.querySelector(".dDay > span");
      const today=new Date(); //현재 날짜
      const dday=new Date(" 1967-6-18 00:00:00").getTime(); //디데이 날짜 

      function ddayView(){
        const gap=today-dday
        const gapDay =Math.floor(gap/(1000*60*60*24)); //내림 사용. 이건 일만 사용한거네! 1000밀리초=1초 *60 1분 *60 1시간 *24 일 
        const gapHour =(String)(Math.floor(gap/(1000*60*60)%24)).padStart(2,"0");   //시
        const gapMinute=(String)(Math.floor(gap/(1000*60)%60)).padStart(2,"0");   //분 
        const gapSecond=(String)(Math.floor(gap/(1000)%60)).padStart(2,"0");    //초 //얘는 나머지로 계산했네.
        dDayDiv.innerHTML=`From 1967-6-18 D+${gapDay} ${gapHour}:${gapMinute}:${gapSecond}`;
        // console.log("check");
      }
      ddayView();
      setInterval(ddayView, 1000);    //setInterval 에러

      //=====================전광판==================
      const marqueeDiv=document.querySelector(".marqueeDiv marquee");
      const singer="LINEUP:  David Bowie, James Brown, BB King, Geese Jarrett, Carlos Santana, Etta James, Patty Smith, Massive Attack, Viyok, Radiohead, Leonard Cohen, Deep Purple," 
      +"and Prince, Jack White, Questlove, Quincy Jones";
      function marquee(){
        marqueeDiv.innerText=singer;
      }
      marquee();

      //================이미지크게보기, 모달사용==================  
      const modalMain= document.querySelector(".galleryModal");   //전체모달
      const delImg= document.querySelector(".gallery img"); 
      const closeModal= document.querySelector(".closeBtn");      //닫기버튼
      const innerImg= document.querySelectorAll(".inner_gallery img"); //버튼용
      const modalImg= document.querySelector(".modalImg");

      // ======On==== 반복문 미사용
      innerImg[0].addEventListener("click", e=>{
        innerImg[0].classList.add("hidden");
        const imgUrl=innerImg[0].src;
        modalImg.style.backgroundImage=`url("${imgUrl}")`;
        modalMain.style.display="flex";
        })
      innerImg[1].addEventListener("click", e=>{
          innerImg[1].classList.add("hidden");
          const imgUrl=innerImg[1].src;
          const check=modalImg.style.backgroundImage=`url("${imgUrl}")`;
          modalMain.style.display="flex";
        })
      innerImg[2].addEventListener("click", e=>{
          innerImg[2].classList.add("hidden");
          const imgUrl=innerImg[2].src;
          const check=modalImg.style.backgroundImage=`url("${imgUrl}")`;
          modalMain.style.display="flex";
        })
      innerImg[3].addEventListener("click", e=>{
          innerImg[3].classList.add("hidden");
          const imgUrl=innerImg[3].src;
          const check=modalImg.style.backgroundImage=`url("${imgUrl}")`;
          modalMain.style.display="flex";
        })

        //======Off====
        window.onload= closeModal.addEventListener("click", e=>{
          modalMain.style.display="none";
          for (let i = 0; i < innerImg.length; i++) {
            innerImg[i].classList.remove("hidden");
          }
          //closeBtn위치를 상대위치로 변경하고 싶은데 구현불가
        })
})//close
      