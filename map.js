
mapboxgl.accessToken = 'pk.eyJ1IjoibXV6YW1pbDIwNiIsImEiOiJjbGN5eXh2cW0wc2lnM290ZzJsZnNlbmxsIn0.o2Obvl7E_nQefSN34XsFmw';
const map = new mapboxgl.Map({
  container: 'map',
  style:  'mapbox://styles/mapbox/satellite-streets-v12',
  center: [ 4.675971, 8.484687], // nigeria coordinates
  zoom: 15 // Initial zoom level
});


map.addControl(new mapboxgl.NavigationControl());


map.on('load', function()  {
  map.addSource('states', {
      'type': 'geojson',
      // 'data': 'https://docs.mapbox.com/mapbox-gl-js/assets/us_states.geojson'
      'data': 'test.geojson'
      // 'data': 'https://services3.arcgis.com/BU6Aadhn6tbBEdyk/arcgis/rest/services/NGA_LGA_Boundaries_2/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json'
      

  })
  

  

  
  map.addLayer({
    'id': 'state-borders',
    'type': 'line',
    'source': 'states',
    'layout': {},
    'paint': {
    'line-color': '#627BC1',
    'line-width': 2
}
  });

  
  
  

})
    


const changeMap = function(){
  const layerList = document.getElementById('menu');
 const inputs = layerList.getElementsByTagName('input');
  
  for (const input of inputs) {
  input.onclick = (layer) => {
  const layerId = layer.target.id;
  map.setStyle('mapbox://styles/mapbox/' + layerId);
  };

  }
}
changeMap()