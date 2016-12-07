// VueJS instanciation
var app = new Vue({

  // selector
  el: '#app',

  // data - contains all variables
  // if inspected, the object will have for each data a get & set informations
  // note : all the datas must be declared here before (no dynamic for the moment (see as))
  data: {
    message: 'Salut les gens',
    link: 'http://www.google.com',
    success: false,
    persons: ['John', 'Marion', 'Marine', 'Jean', 'Patrick']
  },

  // actions
  methods: {
    close: function () {

      // Toggle success variable boolean
      if(this.success == true){
        this.success = false;
      }else{
        this.success = true;
      }

    },

    addPerson: function() {

      // Add Marion
      this.persons.push('Marion');

    }

  }


})
