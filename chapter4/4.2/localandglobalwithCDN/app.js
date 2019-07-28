Vue.component('child-component', {
  template:`
  <div class="container">
    <p>ChildComponent입니다.</p>
  </div>`
});

Vue.component('comp-article', {
  template:`
    <div>
      <div class="article">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt cum mollitia ab earum nam alias repellendus asperiores! Vel, dolorum dolorem.
      <child-component></child-component>
      </div>      
    </div>
  `
});
new Vue({
  el:'#app',
  // components: {
  //   'child-component' : {
  //       template:`
  //         <div class="container">
  //           <p>ChildComponent입니다.</p>
  //         </div>`
  //   },
  //   'comp-article' : {
  //       template:`
  //         <div>
  //           <div class="article">Lorem ipsum dolor sit amet consectetur      adipisicing elit. Deserunt cum mollitia ab earum nam alias     repellendus asperiores! Vel, dolorum dolorem.
  //             <child-component></child-component>
  //           </div>      
  //         </div>
  //       `
  //   }
  // }
})