console.log("Let's get this party started!");

const form = document.querySelector('form');
const searchTermInput = document.querySelector('#search-term');
const gifContainer = document.querySelector('#gif-container');
const removeGifsButton = document.querySelector('#remove-gifs');

form.addEventListener('submit', async function(event) {
  event.preventDefault();
  const searchTerm = searchTermInput.value;
  try {
    const response = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);
    const gifUrl = response.data.data[0].images.original.url;
    const gifElement = document.createElement('img');
    gifElement.setAttribute('src', gifUrl);
    gifContainer.appendChild(gifElement);
  } catch (error) {
    console.error(error);
  }
});

removeGifsButton.addEventListener('click', function() {
  gifContainer.innerHTML = '';
});


