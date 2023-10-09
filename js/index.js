const myHeaders = new Headers();
myHeaders.append("X-Api-Key", "TwBqMEpJ57NJsOil94499w==Natjj0ssjnbeQb5x");

const requestOptions = {
  method: 'GET',
  headers: myHeaders,
};

fetch("https://api.api-ninjas.com/v1/cars?limit=50&model=supra", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));