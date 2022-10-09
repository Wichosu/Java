let marker, map;

function initMap() {
  // console.log('Inicializando mapa')
  const posicion = {
    lat: -25.363,
    lng: 131.044
  }

  const casa = { lat: 19.493095, lng: -96.887975}
  const uni = { lat: 19.504511, lng: -96.857033}
  const hacienda = { lat: 19.485106, lng: -96.815988}

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: posicion
  })

  marker = new google.maps.Marker({
    position: posicion,
    map,
    title: "Posicion Inicial"
  })

  // marker.setPosition(casa);
  // marker.setPosition(uni);
  // marker.setPosition(hacienda);

  // marker.setPosition({lat, lng})
  //Obtener la geolocalizacion
  geoPosiciona()
}

function geoPosiciona() {
  if (navigator.geolocation) {
    const geoLoc = navigator.geolocation
    const options = { timeout: 60000}
    geoLoc.watchPosition(centraMapa, onError, options)
  } else {
    alert("Tu navegador no admite geolocalizacion")
  }
}

function centraMapa(position) {
  const nuevaPos = {
    lat: position.coords.latitude,
    lng: position.coords.longitude
  }
  console.log(nuevaPos)
  marker.setPosition(nuevaPos)
  map.setCenter(nuevaPos)
}

function onError(error) {
  console.log(error)
}