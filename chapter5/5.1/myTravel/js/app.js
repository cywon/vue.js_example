new Vue({
  el:'#app',
  data: {
    navlinks: [
      {text: '홈', href:'#home'},
      {text: '검색', href:'#search'},
      {text: '관광명소', href:'#attractions'},
      {text: '문의', href:'#contact'},
    ],
    slides : [
      {imgsrc:'imgs/amsterdam.jpg', title:'풍차의 나라 Netherlands', description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Fugiat laudantium doloribus vero, perferendis pariatur accusantium minus quidem consequuntur nobis recusandae?'},
      {imgsrc:'imgs/dresden.jpg', title:'다시가고 싶은 도시 Dresden', description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Fugiat laudantium doloribus vero, perferendis pariatur accusantium minus quidem consequuntur nobis recusandae?'},
      {imgsrc:'imgs/venezia.jpg', title:'세계적인 수상도시 Venezia', description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Fugiat laudantium doloribus vero, perferendis pariatur accusantium minus quidem consequuntur nobis recusandae?'}
    ],
    attractions: [
      {imgsrc:'imgs/amsterdam.jpg', title:'암스테르담(Amsterdam)', details:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Fugiat laudantium doloribus vero, perferendis pariatur accusantium minus quidem consequuntur nobis recusandae?'},
      {imgsrc:'imgs/dresden.jpg', title:'드라스덴(Dresden)', details:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Fugiat laudantium doloribus vero, perferendis pariatur accusantium minus quidem consequuntur nobis recusandae?'},
      {imgsrc:'imgs/venezia.jpg', title:'베네치아(Venezia)', details:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Fugiat laudantium doloribus vero, perferendis pariatur accusantium minus quidem consequuntur nobis recusandae?'},
      {imgsrc:'imgs/budapest.jpg', title:'부다페스트(Budapest)', details:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Fugiat laudantium doloribus vero, perferendis pariatur accusantium minus quidem consequuntur nobis recusandae?'},
      {imgsrc:'imgs/frankfurt.jpg', title:'프랑크푸르트(Frankfurt)', details:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Fugiat laudantium doloribus vero, perferendis pariatur accusantium minus quidem consequuntur nobis recusandae?'},
      {imgsrc:'imgs/paris.jpg', title:'파리(Paris)', details:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Fugiat laudantium doloribus vero, perferendis pariatur accusantium minus quidem consequuntur nobis recusandae?'},
      {imgsrc:'imgs/praha.jpg', title:'프라하(Praha)', details:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Fugiat laudantium doloribus vero, perferendis pariatur accusantium minus quidem consequuntur nobis recusandae?'},
      {imgsrc:'imgs/rome.jpg', title:'로마(Rome)', details:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Fugiat laudantium doloribus vero, perferendis pariatur accusantium minus quidem consequuntur nobis recusandae?'},
      {imgsrc:'imgs/interlaken.jpg', title:'인터라켄(Interlaken)', details:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Fugiat laudantium doloribus vero, perferendis pariatur accusantium minus quidem consequuntur nobis recusandae?'},
    ]
  }
})

