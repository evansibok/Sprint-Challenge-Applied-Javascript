/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const topBar = document.querySelector(".top-bar");

function slideAnimate() {

  document.querySelectorAll("img").forEach(ele => {
    ele.style.display = "unset";
    ele.style.maxWidth = "auto";
    ele.style.maxHeight = "auto"
    ele.style.animationDuration = "3";
    ele.style.animationName = "slidein";
    ele.style.animationIterationCount = "infinite";
    ele.style.zIndex = Number(-1);
    ele.style.maxWidth = auto;
    
    
    return ele;
  })

}





function carouselComponent() {

  // debugger

  const carouselDiv = document.createElement("div");
  const leftButtonDiv = document.createElement("div");
  const rightButtonDiv = document.createElement("div");
  const img1 = document.createElement("img");
  const img2 = document.createElement("img");
  const img3 = document.createElement("img");
  const img4 = document.createElement("img");

  carouselDiv.classList.add("carousel");
  leftButtonDiv.classList.add("left-button");
  rightButtonDiv.classList.add("right-button");
  img1.setAttribute("src", "./assets/carousel/mountains.jpeg")
  img2.setAttribute("src", "./assets/carousel/computer.jpeg")
  img3.setAttribute("src", "./assets/carousel/trees.jpeg")
  img4.setAttribute("src", "./assets/carousel/turntable.jpeg")

  leftButtonDiv.textContent = "<";
  rightButtonDiv.textContent = ">";

  carouselDiv.appendChild(leftButtonDiv)
  carouselDiv.appendChild(img1)
  carouselDiv.appendChild(img2)
  carouselDiv.appendChild(img3)
  carouselDiv.appendChild(img4)
  carouselDiv.appendChild(rightButtonDiv)
  let carouselCon = document.querySelector(".carousel-container")
  carouselCon.appendChild(carouselDiv)

  leftButtonDiv.addEventListener('click', slideAnimate);
  rightButtonDiv.addEventListener('click', slideAnimate);

  topBar.style.zIndex = 1;

  return carouselDiv;

}

carouselComponent()

slideAnimate()