const inputTextArea = get (".chat-input");

const inputText = get (".input-msg");
const chatBody = get (".main-body");

const Boo_Msgs =
 ["Welcome to my chat room.",
"How are you?",'Nice to meet you',"What do you do?",
"Sorry, I don't understand your message.",
"Thanks for spending time with me.",
"Bye, See you soon."];

const Boo_Name = "Boo";
const Person_Name ="Anonymous";




//Typing and Sending msg

//inputTextArea.addEventListener ("submit",event => {     
   // event.preventDefault();

   // const newText =inputText.value;
   // if(!newText) return;

    appendMessage(Person_Name,"right",newText);
   
    inputText.value = "";
    booReply();
   // appendMessage(Person_Name,"right",newText);
   
   // inputText.value = "";
   // booReply();
//});

//
    $(function(){
    $("sending-msg").click(function(e){
        e.preventDefault();

        const newText =$(".input-msg").value();
         if(!newText) return;

        appendMessage(Person_Name,"right",newText);
   
          inputText.value = "";
         booReply();
    });
});

//Showing msg in the body
function appendMessage(name,side,text){
    const textHTML =` <div class="chat ${side}-msg">
                        <div class="chat-bubble">
                            <div class="chat-info">
                             <div class="chat-info-name">${name}</div>
                                
                            </div>
                            <div class="chat-text">${text}</div>
                            <div class="datetime">${formatDate(new Date())}</div>
                        </div>  
                    </div>`;

    
    


    chatBody.insertAdjacentHTML("beforeend",textHTML);
 
 
    chatBody.scrollTop = chatBody.scrollHeight; 
}

// Automatic reply
 
function booReply(){
    const rply= random(0, Boo_Msgs.length-1);

    const newText =Boo_Msgs[rply];
    const delay  = newText.split(" ").length * 10;

    setTimeout(()=>{
        appendMessage(Boo_Name,"left",newText);
    }, delay);
}
//- DateTime -Took help from phoenixnap.com---
function formatDate(today) {
  
   var today = new Date();

   var dt = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
   
   var t= today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
   
   var dateTime = dt+ ' '+ t;
   return `${dateTime}`;

  }
  
function get(selector, root = document) { // Copied from Codepen
    return root.querySelector(selector);
  }

  function random(a, b) {
    return Math.floor(Math.random() * (b -a) + a);
  }
