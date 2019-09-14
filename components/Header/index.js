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


function Header() {
  // MAIN DIV
  const header = document.createElement('div');

  // DIV ELEMENTS
  const date = document.createElement('span');
  const logo = document.createElement('h1');
  const temp = document.createElement('span');

  // HEADER STRUCTURE
  header.appendChild(date);
  header.appendChild(logo);
  header.appendChild(temp);

  // HEADER STYLES
  header.classList.add('header');
  date.classList.add('date');
  temp.classList.add('temp');

  // HEADER CONTENT
  date.textContent = 'March 28, 2019';
  logo.textContent = 'Lambda Times';
  temp.textContent = '98°';

  document.querySelector('div.header-container').appendChild(header);
}
Header();
