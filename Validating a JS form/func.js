
            function checkdata()
            {
                var username = document.getElementById("name");
                var emailid = document.getElementById("email");
                if(username.value==""){
                    alert("enter the name, bitch!!")
                    username.focus();
                    return false;
                }
                if(emailid.value==""){
                    alert("Enter the email, idiot")
                    return false;
                }
                if(msg.value==""){
                    alert("Where is your message?")
                    return false;
                }
                return true;
            }
