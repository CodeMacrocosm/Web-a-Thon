// function myFunction() { 
//     document.getElementById("demo").innerHTML = "Hello JavaScript!";
//   }

function light(sw) {
    var pic;
    if (sw == 0) {
      pic = "../Images/lightoff.png"
    } else {
      pic = "../Images/lighton.png"
    }
    document.getElementById('myImage').src = pic;
  }