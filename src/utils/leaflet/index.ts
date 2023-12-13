import L from 'leaflet'
import './leaflet.hash'

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
    new L.Hash(zeldaMap)
    resolve(baseLayers)
    return {
      map,
      baseLayers,
    }
  })
}
