// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const newHeader = document.querySelector('.header-container')


function Header(newHeader) {

    const headerDiv = document.createElement('div');
    const headerSpan1 = document.createElement('span');
    const headerH1 = document.createElement('h1');
    const headerSpan2 = document.createElement('span');

    headerDiv.classList.add('header');
    headerSpan1.classList.add('date');
    headerSpan2.classList.add('temp');

    headerSpan1.textContent ="MARCH 28, 2019";
    headerH1.textContent = "Lambda Times";
    headerSpan2.textContent = "98°";


    headerDiv.appendChild(headerSpan1);
    headerDiv.appendChild(headerH1);
    headerDiv.appendChild(headerSpan2);


    console.log(headerDiv);
    return headerDiv;
}
