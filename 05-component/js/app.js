var message = {
  props: {
    type: {
      type: String,
      default: 'success'
    },
    message: String
  },
  template: `<div class="ui message" :class="type">{{message}}</div>`
}

var counter = {
  data: function() {
    return {
      count: 0
    }
  },
  methods: {
    increment: function() {
      console.log('click');
      this.count++;
    }
  },
  template: `<div>
    <div>Count : {{ count }}</div>
    <div><button type="button" @click="increment">Increment</button></div>
  </div>`
}

// VueJS instanciation
var app = new Vue({

  // selector
  el: '#app',
  components: {
    message,
    counter
  },

  // data - contains all variables
  // if inspected, the object will have for each data a get & set informations
  // note : all the datas must be declared here before (no dynamic for the moment (see assign))
  data: {
    message: 'Salut les gens',
    link: 'http://www.google.com',
    success: false,
    persons: ['John', 'Marion', 'Marine', 'Jean', 'Patrick']
  },

  // actions
  methods: {
    close: function() {

      // Toggle success variable boolean
      if (this.success == true) {
        this.success = false;
      } else {
        this.success = true;
      }

    },

    addPerson: function() {

      // Add Marion
      this.persons.push('Marion');

    }

  }


})
