
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

  const modal01 = '<div class="intro_modal"><div class="intro_m_box"><img src="./img/intro_modal.jpg" alt="모달창"><p><label for="ch">오늘 하루 열지않음</label><a href="#" title="닫기" class="c_btn">닫기</a></p></div></div>'

  //body태그 안쪽의 맨 뒤에 내용을 추가한다.
  $('body').append(modal01);


  //쿠키
  const $ex = $('#ch') //체크박스를 변수에 담는다.

  //1. 만약에 쿠키가 현재 브라우저에 존재한다면 모달을 나오지 않게 숨긴다.
  if($.cookie('popup')=='none'){
  $('.intro_modal').hide();
  }

  //2.사용자가 오늘 하루 열지 않음 버튼을 클릭하면 popup 함수를 호출하여 쿠키를 생성
  $('.intro_modal label').click(function(){
  $.cookie('popup', 'none', {expires:1, path:'/'});
  $('.intro_modal').hide();
  });

  //3. 닫기 버튼을 클릭하면 모달 숨기기
  $('.intro_modal a').click(function(){
  $('.intro_modal').hide();
  return false;
  });

  
});