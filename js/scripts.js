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

$(document).ready(function(){
  $("#btn1").click(function(){
    alert($("#input1").val() + " "+ " We have received your message.Thank you for reaching out to us.");
  
  });

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



