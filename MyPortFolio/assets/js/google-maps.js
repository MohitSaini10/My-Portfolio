function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 28.5355, lng: 77.3910};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Noida, Uttar Pradesh, India' // Title Location
    });
}