import React, { useEffect, useState } from "react";
import { TextInput, Textarea } from "flowbite-react";
const PinLocation = () => {
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
  useEffect(() => {
    if (window.google) {
      setGoogle(window.google);
      return;
    }
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAP_API_KEY}&libraries=places&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    window.initMap = function () {
      setGoogle(window.google);
    };
  }, []);

  useEffect(() => {
    if (!google) {
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
    <div className="mt-6">
      <TextInput
        type="text"
        placeholder="Search for a pin location"
        ref={searchInputRef}
      />
      <TextInput name="lat" type="hidden" value={position.lat} />
      <TextInput name="lng" type="hidden" value={position.lng} />

      <div ref={mapContainerRef} className="h-[300px] w-full mt-4" />
    </div>
  );
};

export default PinLocation;
