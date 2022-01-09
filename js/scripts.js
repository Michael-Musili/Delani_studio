$(document).ready(function(){
  $(".icon-p").click(function(){
    $(".toggle1").toggle();
  });
});
$(document).ready(function(){
  $(".icon-s").click(function(){
    $(".toggle2").toggle();
  });

});

$(document).ready(function(){
  $(".icon-m").click(function(){
    $(".toggle3").toggle();
  });

});
//hoover

$(document).ready(function(){
  $(".hoover1").mouseover(function(){
    $(".hide1").show();
  });
  $(".hoover1").mouseout(function(){
    $(".hide1").hide();
  });

});

$(document).ready(function(){
  $(".hoover2").mouseover(function(){
    $(".hide2").show();
  });
  $(".hoover2").mouseout(function(){
    $(".hide2").hide();
  });

});

$(document).ready(function(){
  $(".hoover3").mouseover(function(){
    $(".hide3").show();
  });
  $(".hoover3").mouseout(function(){
    $(".hide3").hide();
  });

});

$(document).ready(function(){
  $(".hoover4").mouseover(function(){
    $(".hide4").show();
  });
  $(".hoover4").mouseout(function(){
    $(".hide4").hide();
  });

});

$(document).ready(function(){
  $(".hoover5").mouseover(function(){
    $(".hide5").show();
  });
  $(".hoover5").mouseout(function(){
    $(".hide5").hide();
  });

});

$(document).ready(function(){
  $(".hoover6").mouseover(function(){
    $(".hide6").show();
  });
  $(".hoover6").mouseout(function(){
    $(".hide6").hide();
  });

});

$(document).ready(function(){
  $(".hoover7").mouseover(function(){
    $(".hide7").show();
  });
  $(".hoover7").mouseout(function(){
    $(".hide7").hide();
  });

});

$(document).ready(function(){
  $(".hoover8").mouseover(function(){
    $(".hide8").show();
  });
  $(".hoover8").mouseout(function(){
    $(".hide8").hide();
  });

});


//hoover end

$(document).ready(function(){
  $("#btn1").click(function(){
    alert($("#input1").val() + " We have received your message.Thank you for reaching out to us.")

});

//Subscribe a new account holder to a MailChimp list
function subscribeSomeoneToMailChimpList()
{
  var options =
  {
    "apikey": "745fd192cfb9106d26d396b9683107a1-us20",
    "id": " 7a8f751124.",
    "email":-
    {
      "email": "me@example.com"
    },
    "send_welcome": false
  };
  var mcSubscribeRequest = UrlFetchApp.fetch("https://us4.api.mailchimp.com/2.0/lists/subscribe.json", options);
  var mcListObject = Utilities.jsonParse(mcSubscribeRequest.getContentText());
}
});