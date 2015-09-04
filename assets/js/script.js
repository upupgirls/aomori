$(function(){
  $(".ac > dt").click(function(){
      if($("+dd",this).css("display")=="none"){
          $("+dd",this).slideDown("slow");
      }else{
          $("+dd",this).slideUp("fast");
      }     
  });
  $("section h1").click(function(){
      if($("+.container",this).css("display")=="none"){
          $("+.container",this).slideDown("slow");
      }else{
          $("+.container",this).slideUp("fast");
      }     
  });
});