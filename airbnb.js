let subMenu = document.getElementById("subMenu");

function toggleMenu(){
    subMenu.classList.toggle("open-menu");
}
function initMap() {
    const hotelLocation = { lat: 37.7749, lng: -122.4194 }; // replace with your hotel location coordinates
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 16, // adjust the zoom level as needed
      center: hotelLocation,
    });
    const marker = new google.maps.Marker({
      position: hotelLocation,
      map: map,
      title: "My Hotel", // replace with your hotel name
    });
  }