export default {
  name: 'PlayGround',
  data () {
    return {
      backgroundClassName: 'background',
      counter: 0,
      message: 'static message',
      anchorTag: '<a href="http://google.com"> Google</a>',
      nameInput: 'No Named'
    }
  },
  computed: {
    reverseMessage () {
      return this.message.split('').reverse().join('')
    }
  },
  watch: {
    nameInput (newValue, oldValue) {
      // eslint-disable no-console
      console.log('oldValue', oldValue)
      console.log('newValue', newValue)
    }
  },
  methods: {
    handleClick (event) {
      // eslint-disable
      this.counter++
      // string interpolation
      this.message = `you are clicking this ${this.counter} times!`
      console.log('value', event)
      // option 1 ternary operator
      this.backgroundClassName = this.counter % 2 === 0 ? 'green-background' : 'red-background'
      // option 2
      // this.counter % 2 === 0 ? this.backgroundClassName = 'green-background' : this.backgroundClassName = 'red-background'
      // option 3
      // if (this.counter % 2 === 0) {
      //   this.backgroundClassName = 'green-background'
      // } else {
      //   this.backgroundClassName = 'red-background'
      // }
      this.message = this.nameInput
    }
  }
}
