// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function getLambdaTabsInfo(){
    axios.get("https://lambda-times-backend.herokuapp.com/topics")
    .then(timesInfo => {
        // debugger
        timesInfo.data.topics.forEach(ele => {
            document.querySelector(".topics").appendChild(Tab(ele));
        })
    })
    .catch(error => {
        // debugger
        error
    })
}

getLambdaTabsInfo()


function Tab(result){
    // debugger

    let tabDiv = document.createElement("div");
    tabDiv.classList.add("tab")
    tabDiv.textContent = result;
    return tabDiv;
}

