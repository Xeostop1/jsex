    window.addEventListener('load',function (){

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
          console.log("check");
        }
        ddayView();
        setInterval(ddayView, 1000);
        //setInterval 에러

        //=====================전광판==================
        const marqueeDiv=document.querySelector(".marqueeDiv marquee");
        const singer="LINEUP  David Bowie, James Brown, BB King, Geese Jarrett, Carlos Santana, Etta James, Patty Smith, Massive Attack, Viyok, Radiohead, Leonard Cohen, Deep Purple," 
        +"and Prince, Jack White, Questlove, Quincy Jones";
        function marquee(){
          marqueeDiv.innerText=singer;
        }
        marquee();






})//close
      