let locationButton = document.getElementById("get-location");
let locationDetails = document.getElementById("location-details");

locationButton.addEventListener("click", () => {
  // returns lat and long or error
  if (navigator.geolocation) { //this is the first time i have used this
    navigator.geolocation.getCurrentPosition(showLocation, checkError);
  }
  else { //in case your browser is too old
    locationDetails.innerHTML = "Whomp whomp, your browser is old and cant do this."
  }
});

//if you get an error
// this is like using if esle if but much cleaner and easier to read
const checkError = (error) => {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      locationDetails.innerText = "Please allow access to location";
      break;
    case error.POSITION_UNAVAILABLE:
      locationDetails.innerText = "Location Info unavailable";
      break;
    case error.TIMEOUT:
      locationDetails.innerText = "Request is timed out!"
  }
};

const showLocation = async (position) => {
  let response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json
  `);
  //store response object
  let data = await response.json();
  console.log(data.address.city);
  console.log(data.address.country);
  locationDetails.innerText = `${data.address.city}, ${data.address.country}`
}
