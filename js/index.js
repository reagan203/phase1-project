//ensure the DOM is loaded first
document.addEventListener('DOMContentLoaded',()=>{
  getCars();
})

const myHeaders = new Headers();
myHeaders.append("X-Api-Key", "TwBqMEpJ57NJsOil94499w==Natjj0ssjnbeQb5x");

const requestOptions = {
  method: 'GET',
  headers: myHeaders,
};
//new code
function renderCars(cars) {
  const carListContainer = document.getElementById('carList');

  if (cars && cars.length > 0) {
    // Create an HTML list to display the cars
    const ul = document.createElement('ul');

    cars.forEach(car => {
      const li = document.createElement('li');
      li.textContent = `Make: ${car.make}, Model: ${car.model}`;
      ul.appendChild(li);
    });

    // Clear any existing content in the container
    carListContainer.innerHTML = '';

    // Append the list to the container
    carListContainer.appendChild(ul);
  } else {
    carListContainer.textContent = 'No cars found.';
  }
}
//end of new code
function getCars(){
 fetch("https://api.api-ninjas.com/v1/cars?limit=50&model=supra", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}
getCars();

 