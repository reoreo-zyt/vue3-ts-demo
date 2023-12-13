/* eslint-disable no-undef */
L.CanvasMarker = L.Path.extend({
  options: {
    icon: false,
    iconAnchor: false,
  },

  initialize: function (latlng, options) {
    L.setOptions(this, options)

    // eslint-disable-next-line @typescript-eslint/no-this-alias
    var layer = this
    this._latlng = L.latLng(latlng)

    this._icon = new Image()
    this._icon.onload = function () {
      if (!layer.options.iconAnchor) {
        layer._icon.anchorWidth = Math.round(this.width / 2)
        layer._icon.anchorHeight = Math.round(this.height / 2)
      } else {
        layer._icon.anchorWidth = Math.round(layer.options.iconAnchor[0])
        layer._icon.anchorHeight = Math.round(layer.options.iconAnchor[1])
      }
    }
    this._icon.src = this.options.icon

    this._check = new Image()
    this._check.src = '/assets/img/check.png'

    this.on('contextmenu', function (e) {
      this._markComplete(e)
    })

    this.on('click', function () {
      this.bringToFront()
    })

    if (localStorage.getItem('completedMarkers') == null) {
      this._setCompletedMarkersObj('completedMarkers', [])
    }
  },

  _markComplete: function (e) {
    var popup = e.target.getPopup()
    var content = this._parseStringToHTML(popup.getContent())
    if (
      'completed' in e.target.feature.properties &&
      e.target.feature.properties.completed
    ) {
      e.target.feature.properties.completed = false
      this._removeCompletedMarker(this.feature.properties.hash)
      content.querySelector('.status').innerHTML = 'Incomplete'
    } else {
      e.target.feature.properties.completed = true
      this._addCompletedMarker(this.feature.properties.hash)
      content.querySelector('.status').innerHTML = 'Complete'
    }
    popup.setContent(this._parseHTMLtoString(content))
    this.redraw()
  },

  _parseStringToHTML: function (html) {
    var t = document.createElement('template')
    t.innerHTML = html
    return t.content
  },

  _parseHTMLtoString: function (e) {
    var d = document.createElement('div')
    d.appendChild(e.cloneNode(true))
    return d.innerHTML
  },

  _setCompletedMarkersObj: function (key, obj) {
    return localStorage.setItem(key, JSON.stringify(obj))
  },

  _getCompletedMarkersObj: function (key) {
    return JSON.parse(localStorage.getItem(key))
  },

  _addCompletedMarker: function (hash) {
    var completedMarkers = this._getCompletedMarkersObj('completedMarkers')
    var index = completedMarkers.indexOf(hash)
    if (index == -1) {
      completedMarkers.push(hash)
      this._setCompletedMarkersObj('completedMarkers', completedMarkers)
    }
  },

  _removeCompletedMarker: function (hash) {
    var completedMarkers = this._getCompletedMarkersObj('completedMarkers')
    var index = completedMarkers.indexOf(hash)
    if (index > -1) {
      completedMarkers.splice(index, 1)
      this._setCompletedMarkersObj('completedMarkers', completedMarkers)
    }
  },

  setLatLng: function (latlng) {
    this._latlng = L.latLng(latlng)
    this.redraw()
  },

  getLatLng: function () {
    return this._latlng
  },

  _project: function () {
    this._point = this._map.latLngToLayerPoint(this._latlng)
    this._updateBounds()
  },

  _updateBounds: function () {
    var width = this._icon.width,
      height = this._icon.height

    var w = 50,
      topleft = [width + w, height + w],
      bottomright = [width + w, w]

    this._pxBounds = new L.Bounds(
      this._point.subtract(topleft),
      this._point.add(bottomright),
    )
  },

  _update: function () {
    if (this._map) {
      this._updatePath()
    }
  },

  _updatePath: function () {
    this._renderer._updateCanvasMarker(this)
  },

  _empty: function () {
    return this._icon.src && !this._renderer._bounds.intersects(this._pxBounds)
  },

  _containsPoint: function (p) {
    var tX = Math.round(this._icon.width / 2),
      tY = Math.round(this._icon.height / 2)

    return (
      p.x - (tX - this._icon.anchorWidth) <= this._point.x + tX &&
      p.x - (tX - this._icon.anchorWidth) >= this._point.x - tX &&
      p.y - (tY - this._icon.anchorHeight) <= this._point.y + tY &&
      p.y - (tY - this._icon.anchorHeight) >= this._point.y - tY
    )
  },
})

L.canvasMarker = function (latlng, options) {
  return new L.CanvasMarker(latlng, options)
}

L.Canvas.include({
  _updateCanvasMarker: function (layer) {
    if (layer._empty()) {
      return
    }
    var p = layer._point,
      ctx = this._ctx

    ctx.save()

    ctx.drawImage(
      layer._icon,
      p.x - layer._icon.anchorWidth,
      p.y - layer._icon.anchorHeight,
    )
    if (layer.feature.properties.completed) {
      ctx.drawImage(layer._check, p.x - 7, p.y - 7)
    }

    ctx.restore()
  },
})
