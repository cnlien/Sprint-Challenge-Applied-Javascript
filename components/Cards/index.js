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
const cardContainer = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then (res => {
    console.log(res);
    // jsArticles = res.data.articles.javascript;
    // // bootstrapArticles = res.data.articles.bootstrap;
    // // techArticles = res.data.articles.technology;
    // // jQueryArticles = res.data.articles.jquery;
    // // nodeArticles = res.data.articles.node;
    //
    res.data.articles.javascript.forEach (a => {
      cardContainer.appendChild(cardCreate (a));
    });
  })


function cardCreate (a) {
  // MAIN CARD DIV
  const card = document.createElement('div');

  // CARD ELEMENTS
  const headline = document.createElement('div');
  const author = document.createElement('div');
  const imgContainer = document.createElement('div');
  const image = document.createElement('img');
  const authorName = document.createElement('span');

  // CARD STRUCTURE
  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  imgContainer.appendChild(image);
  author.appendChild(authorName);

  //CARD STYLES
  card.classList.add('card');
  headline.classList.add('headline');
  author.classList.add('author');
  imgContainer.classList.add('img-container');

  //CARD CONTENT
  headline.textContent = a.headline;
  image.src = a.authorPhoto;
  authorName.textContent = a.authorName;

  return cardCreate;

}
