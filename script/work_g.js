
$(function(){

  $(".work_g li").click(function(){
    $(".modal").show();

    let modal=`
    <div class="modal">
    <i class="fas fa-times"></i>
      <div class="m_box">
        <img src="" alt="">
      </div>
    </div>`

    const img_src = $(this).find("img").attr("src");
    const img_alt = $(this).find("img").attr("alt");

    $(".m_box img").attr("src",img_src);
    $(".m_box img").attr("alt",img_alt);
  });

  $(".modal i.fas").click(function(){
    $(".modal").fadeOut();
    return false;
  });
});