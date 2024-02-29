$(document).ready(function() {
    //making interstellar img go away on click
    $(".first").on("click", function() {
      $(this).css("display", "none");
    });



  //this is making it switch to space on space button
  //these specifically are making each img id a const 
  const myImg = document.getElementById("myImg");
  const myImg1 = document.getElementById("myImg1");
  const myImg2 = document.getElementById("myImg2");
  const myImg3 = document.getElementById("myImg3");
  const myImg4 = document.getElementById("myImg4");
  const myImg5 = document.getElementById("myImg5");
  const myImg6 = document.getElementById("myImg6");
  const myImg7 = document.getElementById("myImg7");
  const myImg8 = document.getElementById("myImg8");
  const myImg9 = document.getElementById("myImg9");
  const myImg10 = document.getElementById("myImg10");
  const myImg11 = document.getElementById("myImg11");
  const myImg12 = document.getElementById("myImg12");
  const myImg13 = document.getElementById("myImg13");

//saying that when i reference the constant myButton its calling the button in html
const myButton = document.getElementById("myButton");
const earthButton = document.getElementById("earthButton");
const spaceButton = document.getElementById("spaceButton");
const discoveryButton = document.getElementById("discoveryButton");

//switching the src on each img on click space button
myButton.addEventListener("click", function() {
  bigImg.src = "imgs/space-big.jpg"
  myImg.src = "imgs/space-001.jpg";
  myImg1.src = "imgs/space-002.jpg";
  myImg2.src = "imgs/space-003.jpg";
  myImg3.src = "imgs/space-004.jpg";
  myImg4.src = "imgs/space-005.jpg";
  myImg5.src = "imgs/space-006.jpg";
  myImg6.src = "imgs/space-007.jpg";
  myImg7.src = "imgs/space-008.jpg";
  myImg8.src = "imgs/space-009.jpg";
  myImg9.src = "imgs/space-0010.jpg";
  myImg10.src = "imgs/space-0011.jpg";
  myImg11.src = "imgs/space-0012.jpg";
});

//switching the src on each img on click earth button
earthButton.addEventListener("click", function() {
    bigImg.src = "imgs/Interstellar-103.jpg";
    myImg.src = "imgs/earth-003.jpg";
    myImg1.src = "imgs/earth-002.jpg";
    myImg2.src = "imgs/earth-008.jpg";
    myImg3.src = "imgs/earth-004.jpg";
    myImg4.src = "imgs/earth-0011.jpg";
    myImg5.src = "imgs/earth-0012.jpg";
    myImg6.src = "imgs/earth-0010.jpg";
    myImg7.src = "imgs/earth-005.jpg";
    myImg8.src = "imgs/earth-006.jpg";
    myImg9.src = "imgs/earth-007.jpg";
    myImg10.src = "imgs/earth-009.jpg";
    myImg11.src = "imgs/earth-0013.jpg";
  });

  //switching the src on each img on click planets button
planetButton.addEventListener("click", function() {
    bigImg.src = "imgs/planet-big.jpg";
    myImg.src = "imgs/planet-001.jpg";
    myImg1.src = "imgs/planet-002.jpg";
    myImg2.src = "imgs/planet-003.jpg";
    myImg3.src = "imgs/planet-004.jpg";
    myImg4.src = "imgs/planet-005.jpg";
    myImg5.src = "imgs/planet-006.jpg";
    myImg6.src = "imgs/planet-007.jpg";
    myImg7.src = "imgs/planet-008.jpg";
    myImg8.src = "imgs/planet-009.jpg";
    myImg9.src = "imgs/planet-0010.jpg";
    myImg10.src = "imgs/planet-0011.jpg";
    myImg11.src = "imgs/planet-0012.jpg";
  });

  //switching the src on each img on click discovery button
  discoveryButton.addEventListener("click", function() {
    bigImg.src = "imgs/discovery-big.jpg";
    myImg.src = "imgs/discovery-001.jpg";
    myImg1.src = "imgs/discovery-002.jpg";
    myImg2.src = "imgs/discovery-003.jpg";
    myImg3.src = "imgs/discovery-004.jpg";
    myImg4.src = "imgs/discovery-005.jpg";
    myImg5.src = "imgs/discovery-006.jpg";
    myImg6.src = "imgs/discovery-007.jpg";
    myImg7.src = "imgs/discovery-008.jpg";
    myImg8.src = "imgs/discovery-009.jpg";
    myImg9.src = "imgs/discovery-0010.jpg";
    myImg10.src = "imgs/discovery-0011.jpg";
    myImg11.src = "imgs/discovery-0012.jpg";
  });


  });

  function changeBg(id){
    console.log(print);
    let color = "#000000";

    if(id === 'earthButton'){
        color = "#0E2324";
    } else if(id === 'myButton'){
        color = "#6796A9";
    } else if(id === 'planetButton'){
        color = "#555958";
    } else if(id === 'discoveryButton'){
        color = "#5F3E08";
    } else{
        color = "#000000";
    }

    document.body.style.backgroundColor = color;
  }





  