function talk(){
    var know = {
        "who are you":"Hello, Mahesh here",
        "how are you":"Good :)",
        "what can i do for you":"Search Google.com on browser >> Thank Me Leter",
        "your followers":
        "I have family of 200000 members,i don't have follower,have supportive famiy",
        ok:"Thank you so much",
        by:"Okey! Will meet soon...",
};
var user = document.getElementById("userBox").value;
document.getElementById("chatLog").innerHTML=user+"<br>";
if(user in know){
    document.getElementById("chatLog").innerHTML=know[user]+"<br>";
    }else{
        document.getElementById("chatLog").innerHTML ="Sorry,i didn't understand <br>";
    }
}