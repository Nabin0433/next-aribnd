import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";

function Map({ data }) {
  const [selectedLocation, setSelectedLocation] = useState("");
  const coodinates = data?.map((item) => ({
    longitude: item.long,
    latitude: item.lat,
  }));
  const center = getCenter(coodinates);
  const [viewport, setViewport] = useState({
    latitude: center.latitude,
    longitude: center.longitude,
    width: "100%",
    height: "100%",
    zoom: 11,
  });
  return (
    <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/nabin0433/cks0i82t31be617p78mm4js0h"
      mapboxApiAccessToken={process.env.MAP_KEY}
      onViewportChange={(viewport) => setViewport(viewport)}
    >
      {data?.map((item) => (
        <div key={item.long}>
          <Marker
            longitude={item.long}
            latitude={item.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              className="cursor-pointer 3xl animate-bounce"
              onClick={() => setSelectedLocation(item)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 hover:scale-110 active:scale-150"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fillRule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clipRule="evenodd"
                />
              </svg>{" "}
            </p>
          </Marker>
          {selectedLocation.long === item.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              longitude={item.long}
              latitude={item.lat}
            >
              {item.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
