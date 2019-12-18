// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios
  .get('https://lambda-times-backend.herokuapp.com/topics')
  .then((response) => {
      //console.log(response.data)

    
      response.data.topics.forEach((x) =>{
          tabs.appendChild(newTab(x))
      });
     
  })

  const tabs = document.querySelector('.topics')  
  

 function newTab (tabsCreator){
 const tabDiv = document.createElement('div');

 tabDiv.textContent = tabsCreator;

 tabDiv.classList.add('tab');


 return tabDiv;
    
}



/*
axios
  .get('https://lambda-times-backend.herokuapp.com/topics')
  .then((response) => {
      //console.log(response.data)
      const tabsData = response.data.topics;
      tabsData.forEach((element) => {
        const arrData = newTab(element);
        tabs.appendChild(arrData);
      });
     
  }) */
