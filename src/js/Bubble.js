export default {
    name: "Bubble",
    props: {
      id: Number,
      x: Number,
      y: Number,
      r: Number,
      title: String,
      zoomedOut: Boolean
    },
    computed: {
      translateString: function() {
        return "translate(" + this.x + "," + this.y + ")";
      },
      inscribedSquareLength: function () {
        return Math.sqrt(2*this.r*this.r);
      },
      foreignObjectX: function() {
        return -0.5*Math.sqrt(2*this.r*this.r);
      },
      foreignObjectY: function() {
        return -0.5*Math.sqrt(2*this.r*this.r);
      }
    }
  }