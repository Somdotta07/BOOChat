
$(document).ready(() => {




    let Boo_rply = [`Welcome to my chat room.`,
  `How are you?`,
  `Nice to meet you`,
  `What do you do?`,
  `Thanks for your response`,
  `Sorry, I don't understand your message.`,
  `Thanks for spending time with me.`,
  `Bye, See you soon.`,
  `Sorry, I don't understand you.`,
  `Please try again`],
  i=0;
  
  //User input
  
  
      function $postMessage() {
  
          $("#inputmsg").find("br").remove();
  
          let $inputmsg = $("#inputmsg").html().trim(); // get text from text box
            $inputmsg = $inputmsg.replace(/<div>/, "<br>").replace(/<div>/g, "").replace(/<\/div>/g, "<br>").replace(/<br>/g, " ").trim();
          if ($inputmsg) { // if textbox is not empty
              const newText = `<div class="post user-post" style="float:right"> <p class="chat-name">Anonymous</p>${$inputmsg}</div>`; // convert post to html
              $("#main-body").append(newText); // add post to main-body
        formatDate();
              $scrollDown(); // stay at bottom of chat
  
          };
          $("#inputmsg").empty();
      setTimeout(function() {
          booReply();
        }, 1000 + Math.random() * 20 * 100);
  };
  
  // Chat Enter/Send---from Codepen
      $("#inputmsg").on("keyup", (event) => {
          if (event.which === 13) $postMessage();
      }).on("focus", () => {
          $("#inputmsg").addClass("focus");
      }).on("blur", () => {
          $("#inputmsg").removeClass("focus");
      });
      $("#send").on("click", $postMessage);
  
  
  
  
  // ------Random reply-----
  
  function booReply(){
    if($("#inputmsg").val() != ""){
      return false;
    }
    setTimeout(function(){
    $(`<div class=" post boo-post" ><p class="chat-name">Boo</p>` + Boo_rply[i]+ `</div>`).appendTo($("#main-body")).addClass("new");
      formatDate();
          $scrollDown();
        i++;
      });
  };
    //-----Date & Time------
  
    function formatDate(today) {
  
     var today = new Date();
  
     var h= today.getHours();
      var m=today.getMinutes();
      if(m<10){
        m="0"+m;
      }
      var t = h+":"+ m;
  
     $('<div class="dateTime" style="font-size: 0.6em">' + t +'</div>').appendTo($(".post:last"));
  
  
    }
  //----Scroll------
  
      function $scrollDown() {
  
  
    $("#main-body").stop().animate({
      scrollTop: $("#main-body")[0].scrollHeight
    });
      }
  
    //----setTimeout---
  
      setTimeout(function(){
        booReply();
      },50);
  
  

  
  
  });
  
