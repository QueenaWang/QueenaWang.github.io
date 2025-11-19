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
      // Special places
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
      // Countries visited - Europe
      {
        name: "United Kingdom",
        lat: 54.7024,
        lng: -3.2766,
        description: "🇬🇧 United Kingdom",
        icon: "🇬🇧",
        category: "country",
      },
      {
        name: "France",
        lat: 46.2276,
        lng: 2.2137,
        description: "🇫🇷 France",
        icon: "🇫🇷",
        category: "country",
      },
      {
        name: "Belgium",
        lat: 50.5039,
        lng: 4.4699,
        description: "🇧🇪 Belgium",
        icon: "🇧🇪",
        category: "country",
      },
      {
        name: "Netherlands",
        lat: 52.1326,
        lng: 5.2913,
        description: "🇳🇱 Netherlands",
        icon: "🇳🇱",
        category: "country",
      },
      {
        name: "Monaco",
        lat: 43.7384,
        lng: 7.4246,
        description: "🇲🇨 Monaco",
        icon: "🇲🇨",
        category: "country",
      },
      {
        name: "Italy",
        lat: 41.8719,
        lng: 12.5674,
        description: "🇮🇹 Italy",
        icon: "🇮🇹",
        category: "country",
      },
      {
        name: "Portugal",
        lat: 39.3999,
        lng: -8.2245,
        description: "🇵🇹 Portugal",
        icon: "🇵🇹",
        category: "country",
      },
      {
        name: "Croatia",
        lat: 45.1,
        lng: 15.2,
        description: "🇭🇷 Croatia",
        icon: "🇭🇷",
        category: "country",
      },
      {
        name: "Vatican City",
        lat: 41.9029,
        lng: 12.4534,
        description: "🇻🇦 Vatican City",
        icon: "🇻🇦",
        category: "country",
      },
      {
        name: "Denmark",
        lat: 56.2639,
        lng: 9.5018,
        description: "🇩🇰 Denmark",
        icon: "🇩🇰",
        category: "country",
      },
      {
        name: "Norway",
        lat: 60.472,
        lng: 8.4689,
        description: "🇳🇴 Norway",
        icon: "🇳🇴",
        category: "country",
      },
      {
        name: "Sweden",
        lat: 60.1282,
        lng: 18.6435,
        description: "🇸🇪 Sweden",
        icon: "🇸🇪",
        category: "country",
      },
      {
        name: "Finland",
        lat: 61.9241,
        lng: 25.7482,
        description: "🇫🇮 Finland",
        icon: "🇫🇮",
        category: "country",
      },
      {
        name: "Switzerland",
        lat: 46.8182,
        lng: 8.2275,
        description: "🇨🇭 Switzerland",
        icon: "🇨🇭",
        category: "country",
      },
      // Countries visited - Asia
      {
        name: "China",
        lat: 35.8617,
        lng: 104.1954,
        description: "🇨🇳 China",
        icon: "🇨🇳",
        category: "country",
      },
      {
        name: "Japan",
        lat: 36.2048,
        lng: 138.2529,
        description: "🇯🇵 Japan",
        icon: "🇯🇵",
        category: "country",
      },
      {
        name: "South Korea",
        lat: 35.9078,
        lng: 127.7669,
        description: "🇰🇷 South Korea",
        icon: "🇰🇷",
        category: "country",
      },
      {
        name: "Singapore",
        lat: 1.3521,
        lng: 103.8198,
        description: "🇸🇬 Singapore",
        icon: "🇸🇬",
        category: "country",
      },
      {
        name: "Malaysia",
        lat: 4.2105,
        lng: 101.9758,
        description: "🇲🇾 Malaysia",
        icon: "🇲🇾",
        category: "country",
      },
      {
        name: "Indonesia",
        lat: -0.7893,
        lng: 113.9213,
        description: "🇮🇩 Indonesia",
        icon: "🇮🇩",
        category: "country",
      },
      {
        name: "Qatar",
        lat: 25.3548,
        lng: 51.1839,
        description: "🇶🇦 Qatar",
        icon: "🇶🇦",
        category: "country",
      },
      {
        name: "United Arab Emirates",
        lat: 23.4241,
        lng: 53.8478,
        description: "🇦🇪 United Arab Emirates",
        icon: "🇦🇪",
        category: "country",
      },
      // Countries visited - Oceania
      {
        name: "Australia",
        lat: -25.2744,
        lng: 133.7751,
        description: "🇦🇺 Australia",
        icon: "🇦🇺",
        category: "country",
      },
      {
        name: "New Zealand",
        lat: -40.9006,
        lng: 174.886,
        description: "🇳🇿 New Zealand",
        icon: "🇳🇿",
        category: "country",
      },
      // Countries visited - Americas
      {
        name: "United States",
        lat: 37.0902,
        lng: -95.7129,
        description: "🇺🇸 United States",
        icon: "🇺🇸",
        category: "country",
      },
    ];

    // Create custom icon with different sizes for special locations
    const createCustomIcon = (iconEmoji, category = "country") => {
      let size, fontSize, borderWidth, animation;
      if (category === "special") {
        size = 50;
        fontSize = 24;
        borderWidth = "4px";
        animation = "animation: pulse 2s infinite;";
      } else if (category === "adventure") {
        size = 40;
        fontSize = 20;
        borderWidth = "3px";
        animation = "";
      } else {
        // country markers - smaller
        size = 32;
        fontSize = 18;
        borderWidth = "2px";
        animation = "";
      }

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
          border: ${borderWidth} solid var(--global-bg-color);
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
          ${animation}
        ">${iconEmoji}</div>`,
        iconSize: [size, size],
        iconAnchor: [size / 2, size / 2],
        popupAnchor: [0, -size / 2],
      });
    };

    // Add markers - add special and adventure first, then countries
    const markers = [];
    const specialMarkers = [];
    const countryMarkers = [];

    locations.forEach((location) => {
      const marker = L.marker([location.lat, location.lng], {
        icon: createCustomIcon(location.icon, location.category),
      }).bindPopup(
        `<div style="text-align: center;">
          <strong style="font-size: 1.1em; color: var(--global-theme-color);">${location.name}</strong><br>
          <span style="font-size: 0.9em; color: var(--global-text-color-light);">${location.description}</span>
        </div>`
      );

      if (location.category === "special" || location.category === "adventure") {
        marker.addTo(map);
        specialMarkers.push(marker);
      } else {
        marker.addTo(map);
        countryMarkers.push(marker);
      }

      markers.push(marker);
    });

    // Fit map to show all markers
    if (markers.length > 0) {
      const group = new L.featureGroup(markers);
      map.fitBounds(group.getBounds().pad(0.1));
    }
  }
});
