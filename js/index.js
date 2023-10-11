document.addEventListener('DOMContentLoaded', () => {
  getCars();
});

const myHeaders = new Headers();
myHeaders.append("X-Api-Key", "TwBqMEpJ57NJsOil94499w==Natjj0ssjnbeQb5x");

const requestOptions = {
  method: 'GET',
  headers: myHeaders,
};

function renderCars(cars) {
  const carListContainer = document.getElementById('carList');

  if (cars && cars.length > 0) {
    // Create an HTML list to display the cars
    const ul = document.createElement('ul');

    cars.forEach(car => {
      const li = document.createElement('li');
      //track votes
      let likeCount=0;
      let dislikeCount=0;
      li.innerHTML = `
        <div>
          <p>Make: ${car.make}, Model: ${car.model}, Transmission: ${car.transmission}, Drive: ${car.drive}, year: ${car.year}, Cylinders: ${car.cylinders}</p>
          <button class="like-button">Like</button>
          <span class ="like-count">likes:${likeCount}</span>
          <button class="dislike-button">Dislike</button>
          <span class="dislike-count">Dislikes: ${dislikeCount}</span>
        </div>
      `;
      ul.appendChild(li);

      // Attach event listeners to like and dislike buttons
      const likeButton = li.querySelector('.like-button');
      const dislikeButton = li.querySelector('.dislike-button');
      const likeCountSpan = li.querySelector('.like-count');
      const dislikeCountSpan = li.querySelector('.dislike-count');

      likeButton.addEventListener('click', () => {
        likeCount++;
        likeCountSpan.textContent = `Likes: ${likeCount}`;
        // Handle like button click here 
        console.log(`Liked: ${car.make} ${car.model}`);
      });

      dislikeButton.addEventListener('click', () => {
        dislikeCount++;
        dislikeCountSpan.textContent = `Dislikes: ${dislikeCount}`;
        // Handle dislike button click here 
        console.log(`Disliked: ${car.make} ${car.model}`);
      });
    });

    // Clear any existing content in the container
    carListContainer.innerHTML = '';

    // Append the list to the container
    carListContainer.appendChild(ul);
  } else {
    carListContainer.textContent = 'No cars found.';
  }
}

function getCars() {
  fetch("https://api.api-ninjas.com/v1/cars?limit=30&model=supra", requestOptions)
    .then(response => response.json())
    .then(result => renderCars(result))
    .catch(error => console.log('error', error)
)}

//comment section
document.addEventListener("DOMContentLoaded", function () {
  const commentText = document.getElementById("commentText");
  const submitComment = document.getElementById("submitComment");
  const commentList = document.getElementById("commentList");

  submitComment.addEventListener("click", function () {
      // text from the comment input
      const text = commentText.value;

      // Check if the input is not empty
      if (text.trim() !== "") {
          // Create a new comment element
          const commentElement = document.createElement("div");
          commentElement.className = "comment";
          commentElement.textContent = text;

          // Append the comment element to the comment list
          commentList.appendChild(commentElement);

          // Clear the comment input
          commentText.value = "";
      }
  });
});



