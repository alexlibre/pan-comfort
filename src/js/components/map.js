import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import customSelect from 'custom-select';

mapboxgl.accessToken = 'pk.eyJ1IjoicmVsaXR3ZWIiLCJhIjoiY2pvazA2NGt0MGEwNTNybW1weWoxNnBkMSJ9.zsDQd4Hakn1pW3OqlOWKhQ';
const cstSel = customSelect('select');
const selLoc = cstSel.filter(sel => sel.select.id === 'location')[0];
const selRooms = cstSel.filter(sel => sel.select.id === 'room')[0];
const selRoot = document.querySelector('.js-root');

const makeMap = () => {
  const marks = [{
    address: 'ул. Дивенская, д. 1, лит. А',
    coordinates: [30.319389, 59.959494],
    id: 1,
    name: '«Санкт-Петербургский»',
    description: 'Операционный офис «Санкт-Петербургский»',
    rooms: [{
      id: 1,
      name: 'Переговорная #1'
    }, {
      id: 2,
      name: 'Переговорная #2'
    }, {
      id: 3,
      name: 'VIP Переговорная'
    }],
    root: [{
      title: 'м. Горьковская',
      type: 'pedestrian',
      metro: 'blue',
      time: '5 мин.'
    }, {
      title: 'м. Петроградская',
      type: 'pedestrian',
      metro: 'blue',
      time: '15 мин.'
    }],
    options: ['wifi', 'tea', 'dc', 'music', 'condition']
  },
  {
    address: 'Ленинский проспект, д. 109',
    coordinates: [30.240338, 59.851259],
    id: 2,
    name: '«Ленинский проспект»',
    description: 'Дополнительный офис «Ленинский проспект» г. Санкт-Петербург',
    rooms: [{
      id: 1,
      name: 'Переговорная #1'
    }],
    root: [{
      title: 'м. Ленинский проспект',
      type: 'pedestrian',
      metro: 'red',
      time: '10 мин.'
    }],
    options: ['wifi', 'tea', 'dc', 'condition']
  },
  {
    address: 'ул. Ивановская, д. 8/77, лит. А',
    coordinates: [30.444588, 59.875239], //,
    id: 3,
    name: '«Ломоносовский»',
    description: 'Дополнительный офис «Ломоносовский» в г. Санкт-Петербург',
    rooms: [{
      id: 1,
      name: 'Переговорная #1'
    }],
    root: [{
      title: 'м. Ломоносовская',
      type: 'pedestrian',
      metro: 'green',
      time: '5 мин.'
    }],
    options: ['wifi', 'tea', 'dc', 'condition']
  },
  {
    address: 'Московский пр., д. 125, лит.А',
    coordinates: [30.319030, 59.886735],
    id: 4,
    name: '«Московский»',
    description: 'Дополнительный офис «Московский» в г. Санкт-Петербург',
    rooms: [{
      id: 1,
      name: 'Переговорная #1'
    }],
    root: [{
      title: 'м. Московский ворота',
      type: 'pedestrian',
      metro: 'blue',
      time: '10 мин.'
    }, {
      title: 'м. Электоросила',
      type: 'pedestrian',
      metro: 'blue',
      time: '10 мин.'
    }],
    options: ['wifi', 'tea', 'dc', 'condition']
  },
  {
    address: 'Большой пр. П.С., д. 79',
    coordinates: [30.313811, 59.966457],
    id: 5,
    name: '«Петроградский»',
    description: 'Дополнительный офис «Петроградский» г. Санкт-Петербург',
    rooms: [{
      id: 1,
      name: 'Переговорная #1'
    }],
    root: [{
      title: 'м. Петроградская',
      type: 'pedestrian',
      metro: 'blue',
      time: '5 мин.'
    }, {
      title: 'м. Горьковская',
      type: 'auto',
      metro: 'blue',
      time: '5 мин.'
      }],
      options: ['wifi', 'tea', 'dc', 'condition']
  },
  {
    address: 'Клочков пер., д. 6, корп. 1, лит. А., пом. 26Н',
    coordinates: [30.461790, 59.919612],
    id: 6,
    name: '«Правобережный»',
    description: 'Дополнительный офис «Правобережный» г. Санкт-Петербург',
    rooms: [{
      id: 1,
      name: 'Переговорная #1'
    }],
    root: [{
      title: 'м. Проспект Большевиков',
      type: 'pedestrian',
      metro: 'orange',
      time: '5 мин.'
    }, {
      title: 'м. Улица Дыбенко',
      type: 'auto',
      metro: 'orange',
      time: '5 мин.'
      }],
      options: ['wifi', 'tea', 'dc', 'condition']
  },
  {
    address: 'Невский пр., д. 105, лит. А',
    coordinates: [30.368473, 59.929443],
    id: 7,
    name: '«Староневский»',
    description: 'Дополнительный офис «Староневский» в г. Санкт-Петербург',
    rooms: [{
      id: 1,
      name: 'Переговорная #1'
    }],
    root: [{
      title: 'м. Площадь Восстания',
      type: 'pedestrian',
      metro: 'red',
      time: '5 мин.'
    }],
    options: ['wifi', 'tea', 'dc', 'condition']
  },
  {
    address: 'ул. Сикейроса, д. 11, корп. 1, лит. А',
    coordinates: [30.329406, 60.034465],
    id: 8,
    name: '«Озерки»',
    description: 'Дополнительный офис «Озерки» в г. Санкт-Петербург',
    rooms: [{
      id: 1,
      name: 'Переговорная #1'
    }],
    root: [{
      title: 'м. Озерки',
      type: 'pedestrian',
      metro: 'blue',
      time: '5 мин.'
    }],
    options: ['wifi', 'tea', 'dc', 'condition']
  }];

  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    center: [30.308769, 59.937573],
    zoom: 12
  });

  map.scrollZoom.disable();
  map.addControl(new mapboxgl.NavigationControl());

  const getRooms = function (obj) {
    selRooms.empty();
    if (!obj || !obj.rooms) return false;
    return obj.rooms.map(room => {
      const placeRoom = document.createElement('option');
      placeRoom.value = room.id
      placeRoom.innerText = room.name;
      selRooms.append(placeRoom)
    })
  }
  const getRoot = function (arr) {
    if (!arr || !arr.length) {
      selRoot.innerHTML = '';
      return false;
    }
    let dom = '';
    arr.map(obj => {
      dom += `
      <div class="form__item">
        <div class="form__var">
          <span class="form__line" data-color="${obj.metro}"></span>
          <span class="form__metro">${obj.title},&nbsp;</span>
          <span class="form__${obj.type}">${obj.time}</span>
        </div>
      </div>
      `;
    })
    selRoot.innerHTML = dom;
  }

  const setOfficeOptions = function (arr) {
    [...document.querySelectorAll('.js-form-checkbox')].map(function (item){
      item.checked = false;
    });
    if (!arr || !arr.length) return false;
    arr.map(option => {
      document.querySelector('.js-form-checkbox[id="' + option + '"]').checked = true;
    })
  }

  if (marks && marks.length) {
    marks.map(mark => {
      const placeName = document.createElement('option');
      placeName.value = mark.id;
      placeName.innerText = mark.name;
      selLoc.append(placeName);
    })

    selLoc.select.addEventListener('change', function (e) {

      const place = marks.filter(mark => {
        return mark.id === +this.value
      })[0];

      if (place) {
        getRoot(place.root);
        getRooms(place);
        setOfficeOptions(place.options)
      }

    });

    const markers = {
      type: 'FeatureCollection',
      features: marks.map(item => {
        return {
          type: 'Feature',
          properties: {
            id: item.id,
            description: `<p class="mapboxgl-popup__address">${item.address}</p>
                        <p class="mapboxgl-popup__desc">${item.description}</p>
                        <a class="button button_view_default mapboxgl-popup__order js-order" href="#order">Забронировать</button>`,
          },
          geometry: {
            type: "Point",
            coordinates: item.coordinates
          }
        }
      })
    }

    map.on('load', function () {
      map.loadImage("assets/images/marker.png", function (error, image) {
        if (error) throw error;
        map.addImage("custom-marker", image);
        map.addLayer({
          id: "markers",
          type: "symbol",
          source: {
            type: "geojson",
            data: markers
          },
          layout: {
            "icon-image": "custom-marker",
            "icon-anchor": "bottom"
          },
        });
      });
    })



    if (marks.length > 1) {
      const bounds = new mapboxgl.LngLatBounds();

      markers.features.forEach(function (feature) {
        bounds.extend(feature.geometry.coordinates);
      });
      map.fitBounds(bounds, {
        padding: 200
      });
    } else {
      map.setCenter(markers.features[0].geometry.coordinates)
      map.setZoom(14)
    }

    map.on('click', 'markers', function (e) {
      const coordinates = e.features[0].geometry.coordinates.slice();
      const description = e.features[0].properties.description;
      const id = e.features[0].properties.id;

      selLoc.value = id;

      const place = marks.filter(mark => {
        return mark.id === id
      })[0];

      if (place) {
        getRooms(place);
        getRoot(place.root);
        setOfficeOptions(place.options)
      }


      new mapboxgl.Popup()
        .setLngLat(coordinates)
        .setHTML(description)
        .addTo(map);
    });
    map.on('mouseenter', 'markers', function () {
      map.getCanvas().style.cursor = 'pointer';
    });
    map.on('mouseleave', 'markers', function () {
      map.getCanvas().style.cursor = '';
    });

    document.addEventListener('click', function (e) {
      if (e.target.closest('.js-order')) {
        e.preventDefault();
        document.querySelector(e.target.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      }
    })


  }
  return map;
}

export default makeMap;
