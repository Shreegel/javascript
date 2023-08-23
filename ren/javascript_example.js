function bigImg(x){
    x.style.height="600px";
    x.style.width="600px";
}
function normalImg(x){
    x.style.height="400px";
    x.style.width="400px";
}
function stringMethods() {
    let stringExample="Hello this is \"2nd CSIT semester\".";
    document.getElementById('check').innerHTML=stringExample;

    let string2="Hello this is HTML lab HTML";
    document.getElementById('check1').innerHTML=string2.slice(7,1);

    let string3="Hello this is CSIT lab HTML";
    document.getElementById('check2').innerHTML=string2.substring(7,1);

    let newString=string2.replace(/HTML/g,"CSS");
    document.getElementById('check1').innerHTML=string2;
    document.getElementById('check2').innerHTML=newString;

}