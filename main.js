window.addEventListener("load", () => {
    startup();
    function startup(){
        const d = new Date();
        const hours = d.getHours();
        const minutes = d.getMinutes();
        const seconds = d.getSeconds();
        const hour = hours < 10 ? "0" + hours : hours;
        const minute = minutes < 10 ? "0" + minutes : minutes;
        const second = seconds < 10 ? "0" + seconds : seconds;
        document.getElementById("time").innerHTML = "It's currently "+hour+":"+minute+":"+second+".";
        setTimeout(startup, 900);
}
});
document.getElementById("area").addEventListener("keydown", function(event) {
if (event.key === "Enter") {
    event.preventDefault();
    search();
}
});
function search(){
    const item = document.getElementById("area").value;
    if(item !== ""){
        if(item.startsWith("https://")){
            window.location = item
        }
        else if(item == "b1"){
        window.location = "https://nahar.managebac.com/student/home"
    }
    else if(item == "b2"){
        window.location = "https://youtube.com" 
    }
    else if(item == "b3"){
        window.location = "https://docs.google.com/spreadsheets/d/1dp7eAtWVz8MNn6spVUoANgqV-s4MVlKiUB83u14v9kA/edit?gid=0#gid=0"
    }
    else{
        window.location = "https://www.google.com/search?q="+encodeURIComponent(item);
    }
    }
}