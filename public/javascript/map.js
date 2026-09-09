mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: 'map',
    center: listing.geometry.coordinates,
    zoom: 9
});



const popup = new mapboxgl.Popup({ offset: 25 })
    .setHTML(`<h4>${listing.location}</h4><p>Exact location will be provided after booking</p>`);

const marker = new mapboxgl.Marker({ color: 'red' })
    .setLngLat(listing.geometry.coordinates)
    .setPopup(popup)
    .addTo(map);
    
