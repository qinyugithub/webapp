import Vue from 'vue'
import Index from '../components/Index'

// var app = new Vue({
//     el: '#test',
//     data: {
//       message: 'Hello Vue!'
//     },
//     created: function () {
//         console.log('app is created')
//       }
//   })
new Vue({
    el: '#test',
    components: { Index },
    template: '<Index/>'
  })