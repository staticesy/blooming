

$(function(){

       //1. 첫번째 탭메뉴에 서식 추가적용하기
       $('#tab_con ul li:first-child a').addClass('t_on');

       //2. 첫번째 탭메뉴의 콘텐츠 내용 보이게하기
       $('#tab_con .c01').show();
       // $('#tab_con .c01').css('display','block');
 
       //3. 사용자가 탭메뉴를 클릭시 해당 메뉴에 서식을 적용하고 해당 콘텐츠도 보이게 한다. 
       //(선택하지 않은 콘텐츠 숨김, 메뉴서식도 제거)
       const tab_mnu = $('#tab_con ul li .tab_btn');
       tab_mnu.click(function(){
         //1. 
         // $('#tab_con a').removeClass('t_on');
         // $(this).addClass('t_on');
 
         //2. 현재 내가 선택한 메뉴(a)에 서식을 적용하고, 부모(li)의 형제요소(siblings)들을 찾아 그 자식요소인 a요소들에 서식을 제거한다.
         $(this).addClass('t_on').parent().siblings().find('.tab_btn').removeClass('t_on');
 
         // $('#tab_con ul .con').hide(); //보이는 콘텐츠 모두 숨기고
         // $(this).next().show(); //내가 선택한 a요소의 다음 요소(콘텐츠)가 보이도록 한다.
 
         $(this).next().show().parent().siblings().find('.con').hide();
 
         return false; //#때문에 새로고침 방지하기 위함
       });
});