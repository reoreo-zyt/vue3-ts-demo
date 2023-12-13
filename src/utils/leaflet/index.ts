import L from 'leaflet'
import './leaflet.hash'
import './leaflet.CanvasMarker'
import './leaflet.groupedlayercontrol'
import axios from 'axios'

const tileSize = 256,
  factorx = 1 / (tileSize / 3), // 3 image pixels per game unit
  factory = 1 / (tileSize / 3),
  imageheight = 30000,
  imagewidth = 36000

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const overlays = new Object(),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  markers = new Object(),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  groupedOverlays = new Object()

/**
 * @param dom 挂载的容器 `map`
 * @returns
 */
export function setView(dom) {
  return new Promise((resolve) => {
    const crs = L.extend({}, L.CRS.Simple, {
      projection: L.Projection.LonLat,
      transformation: new L.Transformation(factorx, 70.31, -factory, 58.59),
    })

    const map = L.map(dom, {
      minZoom: 0,
      maxZoom: 10,
      // tileSize: 256,
      attributionControl: false,
      crs,
      renderer: L.canvas(),
    })

    const southWest = map.unproject([0, imageheight], 8),
      northEast = map.unproject([imagewidth, 0], 8),
      bounds = L.latLngBounds(southWest, northEast)

    map.setView(L.latLng(-1432, 395), 5)

    const tile_url =
      'https://raw.githubusercontent.com/designgears/totk-map-assets/main/tiles/'

    const sky = L.tileLayer(tile_url + 'sky_complete/{z}/{x}/{y}.png', {
        maxNativeZoom: 8,
        bounds: bounds,
      }),
      surface = L.tileLayer(tile_url + 'ground/{z}/{x}/{y}.png', {
        maxNativeZoom: 8,
        bounds: bounds,
      }),
      depths = L.tileLayer(tile_url + 'underground/{z}/{x}/{y}.png', {
        maxNativeZoom: 8,
        bounds: bounds,
      }),
      baseLayers = {
        Sky: sky,
        Surface: surface,
        Depths: depths,
      }

    sky.addTo(map)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // TODO: 路由后缀 map
    new L.Hash(map)
    resolve(baseLayers)
    return {
      map,
      baseLayers,
    }
  })
}

export function setControl(map, baseLayers) {
  axios.get('public/data.json').then(({ data }) => {
    console.error(data)
    L.geoJSON(data, {
      pointToLayer: pointToLayer,
      onEachFeature: onEachFeature,
    })
    const menu_options = {
      groupCheckboxes: true,
      collapsed: false,
      groupsCollapsable: true,
      groupsExpandedClass: 'bi bi-caret-down-square-fill',
      groupsCollapsedClass: 'bi bi-caret-right-square-fill',
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    L.Control.groupedLayers(
      baseLayers,
      groupedOverlays['Sky'],
      menu_options,
    ).addTo(map)
  })
}

function pointToLayer(feature, latlng) {
  addToOverlays(
    feature.properties.map,
    feature.properties.category,
    feature.properties.subcat,
  )

  const markerOptions = {
    icon: feature.properties.icon,
    color: feature.properties.color,
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return L.canvasMarker(latlng, markerOptions)
}

function addToOverlays(map, category, subcat) {
  if (!(map in groupedOverlays)) {
    groupedOverlays[map] = {}
  }
  if (!(category in groupedOverlays[map])) {
    groupedOverlays[map][category] = {}
  }
  if (!(subcat in groupedOverlays[map][category])) {
    groupedOverlays[map][category][subcat] = new L.LayerGroup()
  }
}

function onEachFeature(feature, layer) {
  if (feature.properties.title && feature.properties.category != 'Labels') {
    layer
      .bindPopup(
        '<div>' +
          feature.properties.title +
          (feature.properties.description != ''
            ? '<br />' + feature.properties.description
            : '') +
          '<br />' +
          feature.properties.position +
          '<br /><span class="status">' +
          (feature.properties.completed ? 'Complete' : 'Incomplete') +
          '</span>' +
          '</div>',
      )
      .bindTooltip(feature.properties.title)
  }

  layer.addTo(
    groupedOverlays[feature.properties.map][feature.properties.category][
      feature.properties.subcat
    ],
  )
}
