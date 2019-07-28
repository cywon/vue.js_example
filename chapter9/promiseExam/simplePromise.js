const meetOrNot = true;  //만남, 만나지 못함에 대한 true, false

const place = new Promise(function(resolve, reject) {
  if (meetOrNot) {
    const placeDetails = {
      name: '롯데 백화점',
      location: '건대 입구',
      time: '오후 6시'
    };
    resolve(placeDetails)
  } else {
    const errMessage ={ error: '급한 일이 생겨서'}
    reject(errMessage)
  }
});

//console.log(place);

// place.then( function(data){
//     console.log(data);
//     console.log(JSON.stringify(data));
//   },
//   function(reason) {
//     console.log(reason);
//     console.log(JSON.stringify(reason));
//   }
// )

place.then( function(data){
  console.log(data);
  console.log(JSON.stringify(data));
})
.catch(function(error) {
  console.log(error);
  console.log(JSON.stringify(error));
})



