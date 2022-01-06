$(document).ready(function(){
  $(".icon-p").click(function(){
    $(".toggle1").toggle();
  })
})
$(document).ready(function(){
  $(".icon-s").click(function(){
    $(".toggle2").toggle();
  })

})

$(document).ready(function(){
  $(".icon-m").click(function(){
    $(".toggle3").toggle();
  })

})
$(document).ready(function(){
  $(".hoover1").mouseover(function(){
    $(".hide1").show();
  });
  $(".hoover1").mouseout(function(){
    $(".hide1").hide();
  });

});

