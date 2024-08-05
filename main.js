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
    window.location = "https://www.google.com/search?q="+item;
    }
}