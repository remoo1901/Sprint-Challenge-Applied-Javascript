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

axios
  .get('https://lambda-times-backend.herokuapp.com/articles')
  .then((res) => {
     //console.log(res.data.articles)
     let firstData = res.data.articles;
     let secondDate = Object.values(firstData);

     secondDate.forEach((x) =>{ 
       x.forEach ((i) => {
     cardsCont.appendChild(cardsBox(i))
  })
})
  })

  cardsCont = document.querySelector('.cards-container');

  function cardsBox (cardsCreator){
   
    const cardDiv = document.createElement('div');
    const headlineDiv = document.createElement('div');
    const authorsDiv  = document.createElement('div');
    const imgContDiv = document.createElement('div');
    const cardImg  = document.createElement('img');
    const authorsSpan = document.createElement('span');

    cardDiv.classList.add('card');
    headlineDiv.classList.add('headline');
    authorsDiv.classList.add('author');
    imgContDiv.classList.add('img-container')

    
    cardDiv.appendChild(headlineDiv);
    cardDiv.appendChild(authorsDiv);
    authorsDiv.appendChild(imgContDiv);
    imgContDiv.appendChild(cardImg);
    authorsDiv.appendChild(authorsSpan);

    headlineDiv.textContent = cardsCreator.headline;
    authorsSpan.textContent = cardsCreator.authorName;
    cardImg.src = cardsCreator.authorPhoto;
    

    

  return cardDiv;

  }
