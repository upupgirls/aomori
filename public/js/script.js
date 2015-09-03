$(function(){
  $(".ac > dt").click(function(){
      if($("+dd",this).css("display")=="none"){
          $("+dd",this).slideDown("slow");
      }else{
          $("+dd",this).slideUp("fast");
      }     
  });
});