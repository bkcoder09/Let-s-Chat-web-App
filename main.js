function login(){
    username_input = document.getElementById("username_input").value;
    localStorage.setItem("username_input",username_input);
    window.location="http://127.0.0.1:5500/Let's%20Chat/Let'sChat.html";
}