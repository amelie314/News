// $(".usea").mouseenter(
//   function(){
//    $(".usea").css("background-color", "#999");
//   }
// );
// $(".usea").mouseleave(
//   function(){
//    $(".usea").css("background-color", "white");
//   }
// );
$(".use").hover(
  function(){
   // $(".usea").css("background-color", "#999");
   $(this).toggleClass("change");
  }
);

$("#backtotop").click(
  function(){
   $(window).scrollTop(0);
  }
);

$("#small").click(
  function(){
    $(".title").removeClass("verybig");
    $(".use").removeClass("big");
    $(".title").addClass("small");
    $(".use").addClass("verysmall");
  }
);
$("#medium").click(
  function(){
    $(".title").removeClass("small");
    $(".use").removeClass("verysmall");
    $(".title").removeClass("verybig");
    $(".use").removeClass("big");
    }
);
$("#big").click(
  function(){
    $(".title").addClass("verybig");
    $(".use").addClass("big");
    }
);