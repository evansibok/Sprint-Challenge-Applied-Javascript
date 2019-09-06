// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function getLambdaTimesInfo(){
    axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(timesInfo => {
        // debugger
        timesInfo.data.articles
    })
    .catch(error => {
        // debugger
        error
    })
}

getLambdaTimesInfo()

function articles(info) {
    // debugger

    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card")

    let headlineDiv = document.createElement("div");
    headlineDiv.classList.add("headline")
    headlineDiv.textContent = info.headline;

    let authorDiv = document.createElement("div");
    authorDiv.classList.add("author")

    let imgDiv = document.createElement('div');
    imgDiv.classList.add("img-container");

    let img = document.createElement("img");
    img.setAttribute = ("src", info.authorPhoto);

    let authorNameSpan = document.createElement("span");
    authorNameSpan.textContent = "By " + info.authorName;

    imgDiv.appendChild(img);
    authorDiv.appendChild(imgDiv);
    authorDiv.appendChild(authorNameSpan);
    cardDiv.appendChild(headlineDiv)
    cardDiv.appendChild(authorDiv)

    return info;
}

console.log(articles(getLambdaTimesInfo))

