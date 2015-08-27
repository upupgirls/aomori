$(function(){
  $(".ac dt").click(function(){
      if($(".ac dd").css("display")=="none"){
          $(".ac dd").slideDown("slow");
      }else{
          $(".ac dd").slideUp("fast");
      }     
  });
});