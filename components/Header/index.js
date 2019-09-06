// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
    // debugger

    let headerDiv = document.createElement("div");
    headerDiv.classList.add("header")

    let span1 = document.createElement("span");
    span1.classList.add("date")

    let h1 = document.createElement("h1");
    h1.textContent = "Lambda Times";

    let span2 = document.createElement("span");
    span2.classList.add("temp")

    headerDiv.appendChild(span1);
    headerDiv.appendChild(h1);
    headerDiv.appendChild(span2);

    let headerCon = document.querySelector(".header-container");
    headerCon.appendChild(headerDiv);

}

Header()
