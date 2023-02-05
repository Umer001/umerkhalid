import React, { useEffect, useState } from "react";
import { TextInput, Textarea, Label } from "flowbite-react";
const PinLocation = ({ handleChange, valueLat, valueLng, setFieldValue }) => {
  const [google, setGoogle] = useState(null);
  const [position, setPosition] = useState({
    lat: 17.3433037,
    lng: 78.4327859,
  });
  const [newPosition, setNewPosition] = useState({
    lat: null,
    lng: null,
  });
  const [map, setMap] = useState(null);
  const mapContainerRef = React.useRef(null);
  const searchInputRef = React.useRef(null);
  const [marker, setMarker] = useState(null);
  const [apiLoaded, setApiLoaded] = useState(false);
  const [mapsApiLoaded, setMapsApiLoaded] = useState(false);
  function isMyScriptLoaded(url) {
    if (!url) url = "http://xxx.co.uk/xxx/script.js";
    var scripts = document.getElementsByTagName("script");
    let counter = 0;
    for (var i = scripts.length; i--; ) {
      if (scripts[i].src == url) counter++;
    }
    return counter;
  }
  useEffect(() => {
    let count = isMyScriptLoaded(
      `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAP_API_KEY}&libraries=places&callback=initMap`
    );

    if (!mapsApiLoaded || !window.google) {
      setMapsApiLoaded(true);
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAP_API_KEY}&libraries=places&callback=initMap`;
      script.async = true;
      script.defer = true;
      if (count == 0) {
        document.head.appendChild(script);
      }

      window.initMap = function () {
        setGoogle(window.google);
        setApiLoaded(true);
      };
    }
  }, [mapsApiLoaded]);

  useEffect(() => {
    if (!google) {
      console.log("not google", google);

      setGoogle(window.google);
      return;
    }
    const map = new google.maps.Map(mapContainerRef.current, {
      center: { lat: 33.6455763, lng: 73.0771667 },
      zoom: 16,
    });

    setMap(map);
    var marker = new google.maps.Marker({
      position: { lat: 33.6455763, lng: 73.0771667 },
      map: map,
    });
    google.maps.event.addListener(map, "center_changed", function () {
      marker.setPosition(map.getCenter());
      var lat = marker.getPosition().lat();
      var lng = marker.getPosition().lng();
      setPosition({ lat: lat, lng: lng });
      console.log(
        "🚀 ~ file: index.jsx:38 ~ google.maps.event.addListener ~ lat",
        lat,
        lng
      );
    });

    const searchBox = new google.maps.places.SearchBox(searchInputRef.current);

    searchBox.addListener("places_changed", () => {
      const places = searchBox.getPlaces();
      map.setCenter(places[0].geometry.location);

      if (places.length === 0) {
        return;
      }

      const { lat, lng } = places[0].geometry.location;
      setPosition({ lat: lat(), lng: lng() });

      if (!marker) {
        marker = new google.maps.Marker({
          position: { lat: lat(), lng: lng() },
          map: map,
          title: "Drag me!",
          draggable: true,
        });

        map.addListener("click", (event) => {
          if (!marker) {
            const marker = new google.maps.Marker({
              position: event.latLng,
              map: map,
            });
            setMarker(marker);
          } else {
            marker.setPosition(event.latLng);
          }
        });
        marker.addListener("dragend", (event) => {
          setPosition({ lat: event.latLng.lat(), lng: event.latLng.lng() });
          console.log(
            "🚀 ~ file: index.jsx:57 ~ marker.addListener ~ { lat: event.latLng.lat(), lng: event.latLng.lng() }",
            { lat: event.latLng.lat(), lng: event.latLng.lng() }
          );
        });
      } else {
        marker.setPosition({ lat: lat(), lng: lng() });
      }
    });
  }, [google]);

  return (
    <div className="mt-4">
      <div className="mb-2 block">
        <Label htmlFor="Pin Location" value="Pin Location" />
      </div>
      <TextInput
        type="text"
        placeholder="Search for a pin location"
        ref={searchInputRef}
      />
      <TextInput
        name="lat"
        onChange={(e) => {
          setFieldValue("lat", position.lat);
        }}
        type="hidden"
        value={valueLat}
      />
      <TextInput
        name="lng"
        onChange={(e) => {
          setFieldValue("lat", position.lng);
        }}
        type="hidden"
        value={valueLng}
      />

      <div ref={mapContainerRef} className="h-[300px] w-full mt-4" />
    </div>
  );
};

export default PinLocation;
