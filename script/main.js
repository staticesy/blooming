
$(function(){

  $(window).scroll(function(){ //화면을 스크롤동작하면 아래내용을 실행

    let sPos = $(this).scrollTop(); //현재 세로스크롤값을 변수에 담는다.

    console.log(sPos);

    if(sPos>=900){
      $('.statice01').animate({"opacity":"1"},1000);
      $('.statice02').animate({"opacity":"1"},1000);
      $('.statice03').animate({"opacity":"1"},1000);
      $('.statice04').animate({"opacity":"1"},1000);
    }
  });

  $(window).scroll(function(){ //화면을 스크롤동작하면 아래내용을 실행

    let sPos = $(this).scrollTop(); //현재 세로스크롤값을 변수에 담는다.

    console.log(sPos);

    if(sPos>=3500){
      $('.peony01').animate({"bottom":"-166"},1000);
      $('.peony02').animate({"bottom":"-185"},1000);
      $('.peony03').animate({"bottom":"-257"},1000);
    }
  });

  //사용자가 마우스로 헤더영역에 오버하면 .on, .h_on 를 적용하고 마우스를 아웃하면 .on .h_on제거

  $('header').hover(function(){
    $(this).addClass('h_on');

  },function(){//아웃시 동작
    $('header').removeClass('h_on');
  });

  //스크롤이벤트를 사용하여 일정영역이상으로 내려가면 위 서식을 적용한다.
  $(window).scroll(function(){
    let sPos = $(this).scrollTop();
    console.log(sPos); //스크롤값 체크
    if(sPos >= 1000){ //영상콘테츠가 모두 올라가면
     
      $('header').addClass('h_on');

      $('header').mouseleave(function(){
        $(this).addClass('h_on');
      });
    }else{
      $('header').removeClass('h_on');

      $('header').mouseleave(function(){
        $(this).removeClass('h_on');
      });
    }
  });
  
});