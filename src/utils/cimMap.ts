import { Map, View } from 'ol'
import { Vector } from 'ol/layer'
import VectorSource from 'ol/source/Vector'
import { fromLonLat, transformExtent } from 'ol/proj'
import GeoJSON from 'ol/format/GeoJSON'
import { Style, Stroke, Fill } from 'ol/style'

export default () => {
  const MAP_DEFAULT_OPTIONS = {
    center: [120.1552, 30.2741],
    zoom: 4,
    minZoom: 1,
    maxZoom: 10,
    extent: [70, -11, 150, 60],
  }
  const EPSG4326 = 'EPSG:4326'
  /** 初始化地图 */
  const initMap = (dom) => {
    return new Promise((resolve) => {
      const MAP_DEFAULT_OPTIONS = {
        center: [120.1552, 30.2741],
        zoom: 4,
        minZoom: 1,
        maxZoom: 10,
        extent: [70, -11, 150, 60],
      }

      const EPSG4326 = 'EPSG:4326'

      const { center, zoom, minZoom, maxZoom, extent } = MAP_DEFAULT_OPTIONS

      const map = new Map({
        target: dom,
        layers: [],
        controls: [],
      })

      // 创建地图
      map.setView(
        new View({
          center: fromLonLat(center),
          zoom,
          minZoom,
          maxZoom,
          constrainResolution: true,
          extent: transformExtent(
            extent,
            EPSG4326,
            map.getView().getProjection(),
          ),
        }),
      )

      resolve(map)
    })
  }
  /** 加载 geojson 图层 */
  const addLayerGeojson = (map, path, style) => {
    return new Promise((resolve) => {
      // 添加 geojson 图层
      const layer = new Vector({
        source: new VectorSource({
          url: path,
          format: new GeoJSON(),
        }),

        style: new Style({
          stroke: new Stroke({
            color: style.stroke.color || '#aabbcc', // 描边红色
            width: style.stroke.width || 2, // 设置描边宽度为 1 像素
          }),
          fill: new Fill({
            color: style.fill.color || '#ff000020', // 填充红色透明
          }),
        }),
      })
      map.addLayer(layer)
      resolve(map)
    })
  }
  return {
    MAP_DEFAULT_OPTIONS,
    EPSG4326,
    initMap,
    addLayerGeojson,
  }
}
