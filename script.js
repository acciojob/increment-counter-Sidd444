//your JS code here. If required.
function increaseCount(){
var currEle=document.getElementById("counter");
var currNo=Number.parseInt(currEle.innerText);
alert(currNo++);
currEle.innerText=currNo;
}