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
        name: "Xi'an, Shaanxi",
        lat: 34.3416,
        lng: 108.9398,
        description: "🏠 My Hometown - Where I was born",
        icon: "🏠",
        category: "special",
      },
      {
        name: "Melbourne, Australia",
        lat: -37.8136,
        lng: 144.9631,
        description: "📚 High School - Where I completed my secondary education",
        icon: "📚",
        category: "special",
      },
      {
        name: "Edinburgh, UK",
        lat: 55.9533,
        lng: -3.1883,
        description: "🎓 University - BSc (Hons) Mathematics and Statistics @ University of Edinburgh",
        icon: "🎓",
        category: "special",
      },
      {
        name: "London, UK",
        lat: 51.5074,
        lng: -0.1278,
        description: "💼 Work - PwC Actuary Associate | LSE MFin Student",
        icon: "💼",
        category: "special",
      },
      {
        name: "Everest Base Camp",
        lat: 28.0026,
        lng: 86.8528,
        description: "🏔️ Trekking to 5000m - An unforgettable adventure!",
        icon: "🏔️",
        category: "adventure",
      },
      {
        name: "Stanford University",
        lat: 37.4275,
        lng: -122.1697,
        description: "🔬 Visiting Scholar (May - Aug 2024)",
        icon: "🔬",
        category: "adventure",
      },
    ];

    // Create custom icon with different sizes for special locations
    const createCustomIcon = (iconEmoji, isSpecial = false) => {
      const size = isSpecial ? 50 : 40;
      const fontSize = isSpecial ? 24 : 20;
      return L.divIcon({
        className: "custom-marker",
        html: `<div style="
          background-color: var(--global-theme-color);
          width: ${size}px;
          height: ${size}px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: ${fontSize}px;
          border: ${isSpecial ? "4px" : "3px"} solid var(--global-bg-color);
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
          ${isSpecial ? "animation: pulse 2s infinite;" : ""}
        ">${iconEmoji}</div>`,
        iconSize: [size, size],
        iconAnchor: [size / 2, size / 2],
        popupAnchor: [0, -size / 2],
      });
    };

    // Add markers
    const markers = [];
    locations.forEach((location) => {
      const isSpecial = location.category === "special";
      const marker = L.marker([location.lat, location.lng], {
        icon: createCustomIcon(location.icon, isSpecial),
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
