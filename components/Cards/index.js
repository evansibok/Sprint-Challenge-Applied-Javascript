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
        const articles = Object.values(timesInfo.data.articles);
        
        articles.forEach(topics => {
            // debugger
            topics.forEach(element => {
                // debugger
                console.log(element)
                const singleArticles = articleCard(element)
                cardCon.appendChild(singleArticles);
            })
        });
    })
    .catch(error => {
        // debugger
        error
    })
}

getLambdaTimesInfo()

function articleCard(news) {
    // debugger

    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card")

    let headlineDiv = document.createElement("div");
    headlineDiv.classList.add("headline")
    headlineDiv.textContent = news.headline;
    
    let authorDiv = document.createElement("div");
    authorDiv.classList.add("author")

    let imgDiv = document.createElement('div');
    imgDiv.classList.add("img-container");

    let img = document.createElement("img");
    img.setAttribute("src", news.authorPhoto);

    let authorNameSpan = document.createElement("span");
    authorNameSpan.textContent = `By ${news.authorName}`;


    imgDiv.appendChild(img);
    authorDiv.appendChild(imgDiv);
    authorDiv.appendChild(authorNameSpan);
    cardDiv.appendChild(headlineDiv)
    cardDiv.appendChild(authorDiv)

    return cardDiv;
}

const cardCon = document.querySelector(".cards-container");



// TESTING ITERATION OF OBJECT
// const articles = {
//     "javascript": [
//         {
//             "headline": "ES8: The Next Step in the Evolution of Javascript and What it Means For Your Projects",
//             "authorPhoto": "./assets/sir.jpg",
//             "authorName": "SIR RUFF'N'STUFF"
//         },
//         {
//             "headline": "Type Coercion: Why Does NaN !== NaN? and Other Strange Occurrences",
//             "authorPhoto": "./assets/bones.jpg",
//             "authorName": "BONES R. LIFE"
//         }
//     ],
//     "bootstrap": [
//         {
//             "headline": "Bootstrap 5: Get a Sneak Peak at all the New Features",
//             "authorPhoto": "./assets/fido.jpg",
//             "authorName": "FIDO WALKSALOT"
//         },
//         {
//             "headline": "UI Frameworks: A Comparison, Which Made Our List? (Hint: Bootstrap is on it)",
//             "authorPhoto": "./assets/max.jpg",
//             "authorName": "MAX GOODBOYE"
//         }
//     ]
// }

// TEST SOLUTION 1
// const articlesArr = Object.values(articles);

// articlesArr.forEach(ele => {
//     // debugger
//     console.log(ele)
//     ele.forEach(e => {
//         // debugger
//         console.log(e.authorName)
//     })
// });
// console.log(articlesArray);


// TEST SOLUTION 2
// Typically for...in returns the same result as Object.values() of an object
// var articlesArray = [];

// for (var topics in articles) {
//     articlesArray.push(articles[topics]);
// }

// articlesArr.forEach(ele => {
//     // debugger
//     console.log(ele)
//     ele.forEach(e => {
//         // debugger
//         console.log(e.authorName)
//     })
// });

// console.log(articlesArr);

// object.object...[object1, object1...]
