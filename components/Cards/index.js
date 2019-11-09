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

function createArticle(source) {
    const article = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const name = document.createElement('span');

    article.classList.add("card");
    headline.classList.add("headline");
    author.classList.add("author");
    imgContainer.classList.add("img-container");

    headline.textContent = source.headline;
    img.src = source.authorPhoto;
    name.textContent = source.authorName;

    article.appendChild(headline);
    article.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(img);
    author.appendChild(name);

    return article;
}

const cardsContainer = document.querySelector('.cards-container');

const getRequest = axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    const javascript = response.data.articles.javascript;
    const bootstrap = response.data.articles.bootstrap;
    const technology = response.data.articles.technology;
    const jquery = response.data.articles.jquery;
    const node = response.data.articles.node;

    javascript.forEach(data => {
        cardsContainer.appendChild(createArticle(data));
    })

    bootstrap.forEach(data => {
        cardsContainer.appendChild(createArticle(data));
    })
    technology.forEach(data => {
        cardsContainer.appendChild(createArticle(data));
    })
    jquery.forEach(data => {
        cardsContainer.appendChild(createArticle(data));
    })
    node.forEach(data => {
        cardsContainer.appendChild(createArticle(data));
    })
})
   
.catch(error => {
    console.log(error);
})