
$(function(){

  $(".work_g li").click(function(){
    $(".modal").fadeIn();
    
    var imgsrc = $(this).children("img").attr("src");
    var imgalt = $(this).children("img").attr("alt");

    $(".m_box img").attr("src", imgsrc);
    $(".m_box img").attr("alt", imgalt);

  });
  $(".modal i.fas.fa-times").click(function(){
    $(".modal").fadeOut();
    return false;
  });
  $(".modal").click(function(e){
    if(e.target.className !="modal"){
      return false;}else{
        $(".modal").fadeOut();
      }
  });
});

