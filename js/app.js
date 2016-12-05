// VueJS instanciation
new Vue({

  // selector
  el: '#app',

  // data - contains all variables
  data: {
    message: 'Salut les gens',
    link: 'http://www.google.com',
    success: false,
    persons: ['John', 'Marion', 'Marine', 'Jean', 'Patrick']
  },

  // actions
  methods: {
    close: function () {

      if(this.success == true){
        this.success = false;
      }else{
        this.success = true;
      }
      
    }
  }


})
