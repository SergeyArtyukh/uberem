<template lang="html">
  <div class="big-button-border-container" ref="bigButtonContainer" @mousemove="mouseMove" @mouseout="mouseOut">
    <div class="big-button-container">
      <span class="title">{{title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'заказать уборку'
    }
  },
  mounted() {
    this.defaultPosition();
    this.buttonAnimatio();
  },
  methods: {
    buttonAnimatio() {
      this.gsap.to('.title', {
        rotate: 360,
        duration: 30,
        repeat: -1
      })
    },
    defaultPosition() {
      let item = this.$refs.bigButtonContainer

      item.style.left = window.innerWidth/2.3 + 'px';
      item.style.top = window.innerHeight/1.3 + 'px';
    },
    mouseOut() {
      let item = this.$refs.bigButtonContainer
      item.style.left = window.innerWidth/2.3 + 'px';
      item.style.top = window.innerHeight/1.3 + 'px';
    },
    mouseMove(event) {
      let item = this.$refs.bigButtonContainer;
      const {clientWidth, clientHeight} = item;

      let mousePositionX = event.clientX - clientWidth / 2;
      let mousePositionY = event.clientY- clientHeight / 2;
      item.style.left = mousePositionX + "px"
      item.style.top = mousePositionY + "px";
      if (mousePositionX < 640) {
        item.style.left = window.innerWidth/2.3 + 'px';
        item.style.top = window.innerHeight/1.3 + 'px';
      } else if (mousePositionY < 200){
        item.style.left = window.innerWidth/2.3 + 'px';
        item.style.top = window.innerHeight/1.3 + 'px';
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.big-button-border-container {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #d3d3d3;
  border-radius: 50%;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  width: 195px;
  height: 195px;
  transition: all .5s ease;
  &:hover {
    width:250px;
    height:250px;
    transform:scale(1.2);
    .big-button-container {
      span {
        transform:rotate(0)!important;
        transition:all 1s ease;
      }
    }
  }
  .big-button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 195px;
    height: 195px;
    background-color: #5a30f0;
    border-radius: 50%;
    transition: all .3s ease-in-out;
    cursor: pointer;
    .title {
      font-family: 'TTTravels-Medium';
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 130%;

      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      letter-spacing: 0.03em;
      text-transform: uppercase;
      color: white;
      width: 50px;
    }
  }
}
</style>
