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
const cardContainer = document.querySelector('.cards-container')
axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(res => {
        console.log(res);
        res.data.articles.javascript.forEach(a => {
            cardContainer.appendChild(cardCreate(a))
        });
        res.data.articles.bootstrap.forEach(a => {
            cardContainer.appendChild(cardCreate(a))
        });
        res.data.articles.technology.forEach(a => {
            cardContainer.appendChild(cardCreate(a))
        });
        res.data.articles.jquery.forEach(a => {
            cardContainer.appendChild(cardCreate(a))
        });
        res.data.articles.node.forEach(a => {
            cardContainer.appendChild(cardCreate(a))
        });
    });
    
function cardCreate(article) {
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author =document.createElement('div');
    const imgContainer = document.createElement('div');
    const image = document.createElement('img');
    const authorName = document.createElement('span');

    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(image);
    author.appendChild(authorName);

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container')

    headline.textContent = article.headline;
    image.src = article.authorPhoto;
    authorName.textContent = article.authorName;

    return card
}
