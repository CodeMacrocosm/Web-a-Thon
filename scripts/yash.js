var clicked = document.getElementById("center");
function click()
{
    
    lbar1 = document.getElementById('lbar1').style.width='99%';
    lbar2 = document.getElementById('lbar2').style.width='99%';
    rbar1 = document.getElementById('rbar1').style.width='99%';
    rbar2 = document.getElementById('rbar2').style.width='99%';
    load = document.getElementById('load').style.top='0%';
    window.alert("Welcome to Yash's Web page.");
}
clicked.onclick = click;