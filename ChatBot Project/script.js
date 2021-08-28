const inputTextArea = get (".chat-input");

const inputText = get (".input-msg");
const chatBody = get (".main-body");

const Boo_Msgs =
 ["Welcome to my chat room.",
"How are you?",
"Sorry, I don't understand your message.",
"Thanks for spending time with me.",
"I'm tired!"];

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
    chatBody.scrollTop += 500;
}

// Automatic reply
 
function booReply(){
    const rply= random (0,Boo_Msgs.length-1);
    const newText =Boo_Msgs[rply];
    const delay  = newText.split(" ").length * 100;

    setTimeout(()=>{
        appendMessage(Boo_Name,"left",newText);
    }, delay);
}

function formatDate(date) {
    const h = "0" + date.getHours();
    const m = "0" + date.getMinutes();
  
    return `${h.slice(-2)}:${m.slice(-2)}`;
  }
function get(selector, root = document) {
    return root.querySelector(selector);
  }

  function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
