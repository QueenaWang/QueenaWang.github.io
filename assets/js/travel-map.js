// Travel Map with markers
document.addEventListener("readystatechange", () => {
  if (document.readyState === "complete") {
    const mapContainer = document.getElementById("travel-map");
    if (!mapContainer) return;

    // Initialize map
    const map = L.map(mapContainer).setView([30, 0], 2);

    // Add tile layer
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    // Travel locations with coordinates
    const locations = [
      {
        name: "Everest Base Camp",
        lat: 28.0026,
        lng: 86.8528,
        description: "Trekking to 5000m - An unforgettable adventure!",
        icon: "🏔️",
      },
      {
        name: "Stanford University",
        lat: 37.4275,
        lng: -122.1697,
        description: "Visiting Scholar (May - Aug 2024)",
        icon: "🎓",
      },
      {
        name: "Edinburgh",
        lat: 55.9533,
        lng: -3.1883,
        description: "University of Edinburgh - BSc (Hons) Mathematics and Statistics",
        icon: "🏛️",
      },
      {
        name: "London",
        lat: 51.5074,
        lng: -0.1278,
        description: "PwC Actuary Associate | LSE MFin Student",
        icon: "🏙️",
      },
    ];

    // Create custom icon
    const createCustomIcon = (iconEmoji) => {
      return L.divIcon({
        className: "custom-marker",
        html: `<div style="
          background-color: var(--global-theme-color);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          border: 3px solid var(--global-bg-color);
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        ">${iconEmoji}</div>`,
        iconSize: [40, 40],
        iconAnchor: [20, 20],
        popupAnchor: [0, -20],
      });
    };

    // Add markers
    const markers = [];
    locations.forEach((location) => {
      const marker = L.marker([location.lat, location.lng], {
        icon: createCustomIcon(location.icon),
      })
        .addTo(map)
        .bindPopup(
          `<div style="text-align: center;">
            <strong style="font-size: 1.1em; color: var(--global-theme-color);">${location.name}</strong><br>
            <span style="font-size: 0.9em; color: var(--global-text-color-light);">${location.description}</span>
          </div>`
        );

      markers.push(marker);
    });

    // Fit map to show all markers
    if (markers.length > 0) {
      const group = new L.featureGroup(markers);
      map.fitBounds(group.getBounds().pad(0.1));
    }
  }
});
