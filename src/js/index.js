import Vue from 'vue'
import Index from '../components/Index.vue'

// Vue.component('button-counter', {
//     data: function () {
//       return {
//         count: 0
//       }
//     },
//     template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
//   })

  
new Vue({
    el: '#app',
    data: {
        name:"qinyu"
    },
    created: function () {
       console.log('qinyu app')
    },
    render:function(createElements){
        return createElements(Index)
    }
  })
