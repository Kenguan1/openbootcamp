let markers=[], map;

function initMap() { //initmap() se tendrá que usar siempre para usar esta API, y se ejecutará cuándo el script de Google Maps se cargue correctamente
  const posicion = {
    lat: -25.363,
    lng: 131.044,
  };

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: posicion,
  });

  // Cada Marker tiene una ubicación, mapa en el que se encuentra y un título
  markers.push( // Objeto Marker que se agrega al array markers
    new google.maps.Marker({  
      position: {
        lat:  6.219659829019524, 
        lng: -75.17989436803346,
      },
      map,
      title: "Guatapé",
    })
  );
  markers.push(
    new google.maps.Marker({
      position: {
        lat: 48.63602366921257,  
        lng: -1.511361264712761,
      },
      map,
      title: "Saint-Michel",
    })
  );
  markers.push(
    new google.maps.Marker({
      position: {
        lat: 53.43081020340638,  
        lng: -2.960948018564323,
      },
      map,
      title: "Anfield",
    })
  );
}
