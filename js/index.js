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
      li.innerHTML = `
        <div>
          <p>Make: ${car.make}, Model: ${car.model}, Transmission: ${car.transmission}, Drive: ${car.drive}, year: ${car.year}, Cylinders: ${car.cylinders}</p>
          <button class="like-button">Like</button>
          <button class="dislike-button">Dislike</button>
        </div>
      `;
      ul.appendChild(li);

      // Attach event listeners to like and dislike buttons
      const likeButton = li.querySelector('.like-button');
      const dislikeButton = li.querySelector('.dislike-button');

      likeButton.addEventListener('click', () => {
        // Handle like button click here (you can increment a like count for the car, for example)
        // You can add your logic here
        console.log(`Liked: ${car.make} ${car.model}`);
      });

      dislikeButton.addEventListener('click', () => {
        // Handle dislike button click here (you can increment a dislike count for the car, for example)
        // You can add your logic here
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
  fetch("https://api.api-ninjas.com/v1/cars?limit=50&model=supra", requestOptions)
    .then(response => response.json())
    .then(result => renderCars(result))
    .catch(error => console.log('error', error));
}




