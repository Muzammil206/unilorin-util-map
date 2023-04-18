mapboxgl.accessToken = 'pk.eyJ1IjoibXV6YW1pbDIwNiIsImEiOiJjbGN5eXh2cW0wc2lnM290ZzJsZnNlbmxsIn0.o2Obvl7E_nQefSN34XsFmw';;


// Define an array of map styles to switch between
const styles = [
  {
    name: 'Streets',
    id: 'mapbox://styles/mapbox/streets-v11'
  },
  {
    name: 'Outdoors',
    id: 'mapbox://styles/mapbox/outdoors-v11'
  },
  {
    name: 'Satellite',
    id: 'mapbox://styles/mapbox/satellite-v9'
  },
  {
    name: 'Google Maps',
    id: 'mapbox://styles/mapbox/cjf4m44iw0uza2spb3q0a7s41' // Custom style that looks similar to Google Maps
  }
];

// Create a new Mapbox map and set its initial configuration
const map = new mapboxgl.Map({
  container: 'map',
  style: styles[0].id, // Default style is Streets
  center: [ 4.675971, 8.484687], // nigeria coordinates
  zoom: 15 // Initial zoom level
});

// Add zoom and rotation controls to the map
map.addControl(new mapboxgl.NavigationControl());

// Create a custom style switcher control
const styleSwitcher = {
  onAdd: function(map) {
    this._container = document.createElement('div');
    this._container.className = 'mapboxgl-ctrl-group mapboxgl-ctrl';
    styles.forEach((style) => {
      const button = document.createElement('button');
      button.className = 'mapboxgl-ctrl-icon';
      button.title = style.name;
      button.style.backgroundImage = `url(https://maps.tilehosting.com/styles/${style.id}.png?preview)`;
      button.addEventListener('click', () => {
        map.setStyle(style.id);
      });
      this._container.appendChild(button);
    });
    return this._container;
  },

  onRemove: function() {
    this._container.parentNode.removeChild(this._container);
    this._map = undefined;
  }
};

// Add the style switcher control to the map
map.addControl(new mapboxgl.AttributionControl({
  compact: true
}), 'bottom-right');
map.addControl(styleSwitcher, 'top-right');
