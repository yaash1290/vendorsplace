function getBotResponse(input) {
 
    

    var str = "Visit here for more details.";
    var link = str.link("/shop.html");
    var msg = "Hi "+link;

    var linkk = str.link("/contact.html")
    var msgg = "Hi "+linkk;

    var linkkk = str.link("/about.html")
    var msggg = "Hi "+linkkk;

    var linkkkk = str.link("/login.html")
    var login = "Hi "+linkkkk;


   
    if(input == "contact"){
        return msgg;
    }else if(input == "about"){
        return msggg;
    // }else{
    //     return "Try asking something else!";
    }

    if(input == "account"){
             return login;
    }else if(input == "login"){
        return login;

    }else if(input == "register"){
        return login;
    // }else{
    //     return "Try asking something else!";
     }else if(input == "how are you"){
        return "I'm Fine, Thankyou !";
     }else if(input == ""){
        return "Please type something else.";
     }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "shop") {
        return msg;
      }  else if(input == ""){
          return "Please type something else.";
        }
     else {
        return "Try asking something else!";
    }


    





}

