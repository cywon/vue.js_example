//sidenav
const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {});

//slider
const slider = document.querySelector('.slider');
M.Slider.init(slider, {
  indicators: false,
  height: 485,
  duration: 500,
  interval: 3000
});

//Autocomplete
const ac = document.querySelector('.autocomplete');
M.Autocomplete.init(ac, {
  data: {
    "파리": null,
    "베네치아": null,
    "암스테르담": null,
    "부다페스트": null,
    "프랑크푸르트": null,
    "비엔나": null,
    "드라스덴": null,
    "프라하" : null,
    "로마": null
  }
});

//ScrollSpy
const sp = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(sp, {});

