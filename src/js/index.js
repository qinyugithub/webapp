import Vue from 'vue'
import Index from '../components/Index.vue'

new Vue({
    el: '#index',
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
