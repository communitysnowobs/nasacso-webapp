export const drawStyle = {
  styles: [
  // ACTIVE (being drawn)
  // line stroke
  {
  "id": "gl-draw-line",
  "type": "line",
  "filter": ["all", ["==", "$type", "LineString"], ["!=", "mode", "static"]],
  "layout": {
    "line-cap": "round",
    "line-join": "round"
  },
  "paint": {
    "line-color": "#15B1C2",
    "line-dasharray": [0.2, 2],
    "line-width": 2
  }
  },
  // polygon fill
  {
  "id": "gl-draw-polygon-fill",
  "type": "fill",
  "filter": ["all", ["==", "$type", "Polygon"], ["!=", "mode", "static"]],
  "paint": {
  "fill-color": "#15B1C2",
  "fill-outline-color": "#15B1C2",
  "fill-opacity": 0.1
  }
  },
  // polygon outline stroke
  // This doesn't style the first edge of the polygon, which uses the line stroke styling instead
  {
  "id": "gl-draw-polygon-stroke-active",
  "type": "line",
  "filter": ["all", ["==", "$type", "Polygon"], ["!=", "mode", "static"]],
  "layout": {
  "line-cap": "round",
  "line-join": "round"
  },
  "paint": {
  "line-color": "#15B1C2",
  "line-dasharray": [0.2, 2],
  "line-width": 2
  }
  },
  // vertex point halos
  {
  "id": "gl-draw-polygon-and-line-vertex-halo-active",
  "type": "circle",
  "filter": ["all", ["==", "meta", "vertex"], ["==", "$type", "Point"], ["!=", "mode", "static"]],
  "paint": {
  "circle-radius": 5,
  "circle-color": "#FFF"
  }
  },
  // vertex points
  {
  "id": "gl-draw-polygon-and-line-vertex-active",
  "type": "circle",
  "filter": ["all", ["==", "meta", "vertex"], ["==", "$type", "Point"], ["!=", "mode", "static"]],
  "paint": {
  "circle-radius": 3,
  "circle-color": "#15B1C2",
  }
  },

  // INACTIVE (static, already drawn)
  // line stroke
  {
  "id": "gl-draw-line-static",
  "type": "line",
  "filter": ["all", ["==", "$type", "LineString"], ["==", "mode", "static"]],
  "layout": {
    "line-cap": "round",
    "line-join": "round"
  },
  "paint": {
    "line-color": "#000",
    "line-width": 3
  }
  },
  // polygon fill
  {
  "id": "gl-draw-polygon-fill-static",
  "type": "fill",
  "filter": ["all", ["==", "$type", "Polygon"], ["==", "mode", "static"]],
  "paint": {
  "fill-color": "#000",
  "fill-outline-color": "#000",
  "fill-opacity": 0.1
  }
  },
  // polygon outline
  {
  "id": "gl-draw-polygon-stroke-static",
  "type": "line",
  "filter": ["all", ["==", "$type", "Polygon"], ["==", "mode", "static"]],
  "layout": {
  "line-cap": "round",
  "line-join": "round"
  },
  "paint": {
  "line-color": "#000",
  "line-width": 3
  }
  }
]}

export const clusterStyle = {
  paint: {
      // Use step expressions (https://www.mapbox.com/mapbox-gl-js/style-spec/#expressions-step)
      // with three steps to implement three types of circles:
      //   * Blue, 20px circles when point count is less than 100
      //   * Yellow, 30px circles when point count is between 100 and 750
      //   * Pink, 40px circles when point count is greater than or equal to 750
      "circle-color": [
          "step",
          ["get", "point_count"],
          "#15B1C2",
          100,
          "#15B1C2",
          750,
          "#15B1C2"
      ],
      "circle-radius": [
          "step",
          ["get", "point_count"],
          20,
          100,
          30,
          750,
          40
      ],
      "circle-stroke-color": "#fff",
      "circle-stroke-width": 2,
  }
}

export const snowObsStyle = {
  paint: {
      "circle-color": "#DB2929",
      "circle-radius": 10,
      "circle-stroke-width": 2,
      "circle-stroke-color": "#fff"
  }
}

export const clusterCountStyle = {
  layout: {
      "text-field": "{point_count_abbreviated}",
      "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
      "text-size": 12
  }
}
