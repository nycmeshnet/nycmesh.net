var map;
var currentNode = {};
var searchQuery = "";

function matchesSearch(query, id) {
  if (String(id) === String(query)) return true;
  // var queryIsSupernode = String(query) === "supernode" || String(query) === "Supernode"
  // if (queryIsSupernode && String(id) == String(227))
  //   return true
  return false;
}

function initMap() {
  var styles = [
    {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#777777"
        }
      ]
    },
    {
      featureType: "poi",
      elementType: "labels",
      stylers: [{ visibility: "off" }]
    },
    {
      elementType: "geometry",
      stylers: [
        {
          color: "#f5f5f5"
        }
      ]
    },
    {
      featureType: "landscape",
      elementType: "labels",
      stylers: [
        {
          // "visibility": "off"
        }
      ]
    },
    {
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#f5f5f5"
        }
      ]
    },
    {
      featureType: "administrative",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "poi",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        {
          color: "#ffffff"
        }
      ]
    },
    {
      featureType: "road",
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "road.highway",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "transit",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          color: "#d9dde6"
        }
      ]
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#777777"
        }
      ]
    }
  ];
  var styledMap = new google.maps.StyledMapType(styles, { name: "Styled Map" });

  var mapOptions = {
    center: { lat: 40.7101809, lng: -73.9595798 },
    zoom: 13,
    disableDefaultUI: false,
    zoomControl: true,
    scrollwheel: false,
    streetViewControl: false,
    mapTypeControl: false,
    backgroundColor: "none"
  };

  var map = new google.maps.Map(document.getElementById("map-div"), mapOptions);
  map.mapTypes.set("map_style", styledMap);
  map.setMapTypeId("map_style");

  var activeNodesLayer = new google.maps.Data();
  var potentialNodesLayer = new google.maps.Data();
  var linksLayer = new google.maps.Data();
  var linkNYCLayer = new google.maps.Data();
  // var beamsLayer = new google.maps.Data();
  activeNodesLayer.loadGeoJson("/nodes/active.json");
  potentialNodesLayer.loadGeoJson("/nodes/potential.json");
  linksLayer.loadGeoJson("/nodes/links.json");
  linkNYCLayer.loadGeoJson("/nodes/linkNYC.json");

  //changing icon opacity to show it has panoramas, also set supernode icon
  activeNodesLayer.setStyle(function(feature) {
    var url = "/img/map/active.svg";
    var opacity = 0.75;
    var visible = true;
    var notes = feature.getProperty("notes").toLowerCase();
    if (notes.indexOf("supernode") !== -1) {
      url = "/img/map/supernode.svg";
    }
    if (feature.getProperty("panoramas")) {
      //url = '../assets/images/activepano.svg';
      opacity = 1;
    }
    if (
      searchQuery.length > 0 &&
      !matchesSearch(searchQuery, feature.getProperty("id"))
    ) {
      visible = false;
    }
    return {
      title: feature.getProperty("id"),
      opacity: opacity,
      zIndex: 200,
      visible: visible,
      icon: {
        url: url,
        anchor: new google.maps.Point(10, 10),
        labelOrigin: new google.maps.Point(28, 10)
      }
    };
  });

  potentialNodesLayer.setStyle(function(feature) {
    var url = "/img/map/potential.svg";
    var opacity = 0.5;
    var visible = true;
    var notes = feature.getProperty("notes").toLowerCase();
    if (notes.indexOf("supernode") !== -1) {
      url = "/img/map/supernode-potential.svg";
    }
    if (feature.getProperty("panoramas")) {
      //url = '../assets/images/potentialpano.svg';
      opacity = 1;
    }
    if (
      searchQuery.length > 0 &&
      !matchesSearch(searchQuery, feature.getProperty("id"))
    ) {
      visible = false;
    }
    return {
      title: feature.getProperty("id"),
      opacity: opacity,
      zIndex: 100,
      visible: visible,
      icon: {
        url: url,
        anchor: new google.maps.Point(10, 10),
        labelOrigin: new google.maps.Point(28, 10)
      }
    };
  });

  linksLayer.setStyle(function(link) {
    var strokeColor = "#ff3b30";
    var opacity = 0.5;
    var visible = true;
    if (link.getProperty("status") != "active") {
      strokeColor = "gray";
      opacity = 0.25;
    }

    if (searchQuery.length > 0) {
      var linkMatches =
        matchesSearch(searchQuery, link.getProperty("from")) ||
        matchesSearch(searchQuery, link.getProperty("to"));
      if (!linkMatches) visible = false;
    }

    return {
      visible: visible,
      zIndex: 999,
      strokeWeight: 3,
      strokeColor: strokeColor,
      strokeOpacity: opacity
    };
  });

  linkNYCLayer.setStyle(function(feature) {
    var url = "/img/map/linkNYC.svg";
    var opacity = 0.5;
    return {
      title: feature.getProperty("id"),
      opacity: opacity,
      zIndex: 9,
      icon: {
        url: url,
        anchor: new google.maps.Point(10, 10)
      }
    };
  });

  var infowindow = new google.maps.InfoWindow();
  activeNodesLayer.addListener("click", showDetails);
  potentialNodesLayer.addListener("click", showDetails);

  linksLayer.setMap(map);
  linkNYCLayer.setMap(map);
  potentialNodesLayer.setMap(map);
  activeNodesLayer.setMap(map);
}

function filterToSearch() {}

function showImage(panorama) {
  var lightbox = document.getElementById("lightbox");
  var image = lightbox.children[0];
  image.src = "./panorama/" + panorama;
  image.classList.remove("dn");
  lightbox.classList.add("fixed");
  lightbox.classList.remove("dn");
}

function showDetails(event) {
  var node = event.feature.f;
  currentNode = node;
  var infoWindow = document.getElementById("infoWindow");
  var statusString = node.status || "Potential";
  infoWindow.innerHTML =
    '<div class="flex items-center justify-start">' +
    '<h2 class="mv0 near-black f5">Node #' +
    node.id +
    "</h2>" +
    '<p class="mv0 mh2 f6 fw5 dib br4 ph2 pv05 ' +
    statusString +
    '">' +
    statusString +
    "</p>" +
    "</div>";
  if (node.notes) {
    infoWindow.innerHTML += '<p class="f6 fw5 gray">' + node.notes + "</p>";
  }
  if (node.roof) {
    infoWindow.innerHTML +=
      '<p class="f6 fw5 green">' + "✓ Roof Access" + "</p>";
  }
  if (node.panoramas) {
    String(node.panoramas)
      .split(",")
      .forEach(function(panorama) {
        infoWindow.innerHTML +=
          '<img class="mt3" onclick="showImage(\'' +
          panorama +
          '\')" src="./panorama/' +
          panorama +
          '"></img>';
      });
  }
  infoWindow.classList.add("db");
}

function hideDetails() {
  var infoWindow = document.getElementById("infoWindow");
  infoWindow.classList.remove("db");
}
