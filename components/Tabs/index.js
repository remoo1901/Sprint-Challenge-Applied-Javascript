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
  .then((res) => {
      //console.log(res.data)
      const tabsData = res.data;
      tabsData.forEach((element) => {
        const arrData = newTab(element);
        tabs.appendChild(arrData);

      });

  })

  const tabs = document.querySelector('.topics') 


  

  function newTab (tabs){

    const tabDiv1 = document.createElement('div');
    const tabDiv2 = document.createElement('div');
    const tabSpan = document.createElement('span');
 
    tabDiv1.classList.add('tabs');
    tabDiv2.classList.add('topics');
    tabSpan.classList.add('title');
 
    tabSpan.textContent = "TRENDNG TOPICS";
 
    tabDiv1.appendChild(tabDiv2);
    tabDiv2.appendChild(tabSpan);
 
    console.log(tabDiv1);
    return tabDiv1;
 
 
 
 }