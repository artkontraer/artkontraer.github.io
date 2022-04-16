
//  window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
    // document.addEventListener('scroll',() => {
    // document.getElementById("logo-klein").style.transform = "scale(0.5,0.5)";
    // document.getElementById("logo-klein").style.transition = "width, 1s";
    // });
// };


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 10) {
    document.getElementById("logo-klein").style.transform = "scale(0.5,0.5)";
    document.getElementById("logo-klein").style.transition = "width, 0.5s";
  } 
  else {
    document.getElementById("logo-klein").style.transform = "scale(1,1)";
    document.getElementById("logo-klein").style.transition = "width, 0.7s";
  }
}

// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop < 30 || document.documentElement.scrollTop < 30) {
//     document.getElementById("logo-klein").style.transform = "scale(1,1)";
//     document.getElementById("logo-klein").style.transition = "width, 1s";
//   } 
// }
