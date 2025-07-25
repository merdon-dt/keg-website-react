export default class Location {
  static Locationinit() {
    console.log("location services");
    navigator.geolocation.getCurrentPosition(Location.success, Location.error);
    Location.Sticky();
  }
  static success(position) {
    console.log("location from", position);
    const location_result = document.querySelector(".user__location");
    const location = document.querySelector(".location");
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const apiurl = `https:api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;

    //location_result.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;

    location.href = `https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}#map=12/${latitude}/${longitude}`;
    fetch(apiurl)
      .then((res) => res.json())
      .then((data) => {
        const Data = {
          lat: latitude,
          lng: longitude,
          division: data.principalSubdivision,
          code: data.principalSubdivisionCode,
        };

        const locationData = JSON.stringify(Data);

        localStorage.setItem("location", locationData);
        localStorage.setItem("city", data.principalSubdivision);
        location_result.textContent = "";
        location_result.innerHTML = `${data.principalSubdivision},${data.principalSubdivisionCode}`;
      });
  }

  static error() {
    const location_result = document.querySelector(".user__location");
    location_result.textContent = "Unable to Detect";
  }

  static Sticky() {
    if (window.innerWidth > 600) {
      const btnElement = document.querySelector(".mobile__nav__button");
      const navigation = document.querySelector(".__navigation");
      if (btnElement) {
        ///////////////////////////////////////////////////////////
        //sticky navigation
        var StickyScrool = function () {
          var y = window.scrollY;
          if (y >= 900) {
            document.body.classList.add("sticky");
            console.log("yes here is the end poiny");
          } else {
            document.body.classList.remove("sticky");
          }
        };
        window.addEventListener("scroll", StickyScrool);
      }
    } else {
      console.log("not support sticky");
    }
  }
}
