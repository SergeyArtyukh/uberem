<template lang="html">
  <div class="card-wrapper">
  <transition-group appear @enter="enter" class="flex">
    <div
    class="card-list v-width-1-4"
    :class="card.class"
    v-for="(card, index) in cards"
    :data-index="index"
    :key="card.id"
    @mouseover="mouseOver(index)"
    @mouseout="mouseOut(index)"
    >
        <div class="card-container">
          <p class="card-title">{{card.title}}</p>
          <div class="img-container">
            <img :src="require('@/assets/imgs/card/' + card.url)" alt="#">
          </div>
        </div>
        <div class="title-container">
          <p>{{card.hoverTitle}}</p>
        </div>
    </div>
  </transition-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isHoveting: false,
      cards: [
        {
          title: 'Тщательно отобранный персонал',
          hoverTitle: 'Не нужно тратить время, силы и ресурсы на разме- щение вакансий, проведение собеседований, про- верку кандидатов на должность уборщицы. За счет больших объемов мы можем сделать это эффективнее.',
          url: 'img1.png',
          class: 'mr-40',
          id: Math.random(),
          onHover: false
        },
        {
          title: 'Качественная эко-химия',
          hoverTitle: 'Не нужно тратить время, силы и ресурсы на разме- щение вакансий, проведение собеседований, про- верку кандидатов на должность уборщицы. За счет больших объемов мы можем сделать это эффективнее.',
          url: 'img2.png',
          class: 'mr-40',
          id: Math.random(),
          onHover: false
        },
        {
          title: 'Контролируем качество',
          hoverTitle: 'Не нужно тратить время, силы и ресурсы на разме- щение вакансий, проведениесобеседований, про- верку кандидатов на должность уборщицы. За счет больших объемов мы можем сделать это эффективнее.',
          url: 'img3.png',
          class: 'mr-40',
          id: Math.random(),
          onHover: false
        },
        {
          title: 'Работаем круглосуточно',
          hoverTitle: 'Не нужно тратить время, силы и ресурсы на разме- щение вакансий, проведение собеседований, про- верку кандидатов на должность уборщицы. За счет больших объемов мы можем сделать это эффективнее.',
          url: 'img4.png',
          id: Math.random(),
          onHover: false
        }
      ]
    }
  },
  mounted(){
    // var tl = this.$gsap.timeline()
    // tl.to('card-wrapper', { percent: 1, duration: 1, ease: 'power2.in' }, '-=1')
  },
  methods: {
    mouseOver(index) {
      // e.target.firstChild.innerText.style.display = 'none';
      this.cards[index].onHover = true;
      this.gsap.to(this.cards[index], { duration: 2.5, ease: "power2.out"});
    },
    mouseOut (index) {
      this.cards[index].onHover = false;
    },
    enter(el) {
      this.gsap.to(el, {
        scrollTrigger: {
          trigger: this.$refs.img,
          toggleActions: 'restart none none none',
        }, // start the animation when ".box" enters the viewport (once)
        y: -100,
        duration: 1,
        delay: el.dataset.index*0.3,
      });
    }
  }
}
</script>

<style lang="scss" scoped>
// -------------------- МОБИЛЬНАЯ ВЕРСТКА --------------------

// Resolution 1180 Tabs
@media (max-width: 1181px) {
  .card-wrapper {
    margin: 0 0 60px 0!important;
    span {
      flex-flow: wrap;
      justify-content: center;
      .card-list {
        margin: 20px!important;
      }
    }
  }
}
// Resolution 414 Phones
@media (max-width: 415px) {
  .card-wrapper {
    transform: translateY(70px)!important;
    .flex {
      flex-flow: nowrap;
      flex-direction: column;
      padding: 0 40px;
      .card-list {
        margin: 0 0 20px 0!important;
        justify-content: center;
        .title-container {
          padding: 0 20px;
        }
      }
      .v-width-1-4 {
        width: 100%;
        padding: 0;
        margin: 0;
      }
    }
  }
}
// -------------------- МОБИЛЬНАЯ ВЕРСТКА -------------------- КОНЕЦ
.flex {
  display: flex;
  transform: translateY(50px);
  width: 100%;
}
.v-width-1-4 {
  width: 25%;
}
.card-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 73px 60px 149px;
    transform: translateY(100px);
    transition: all 1s ease;
    .mr-40 {
      margin-right: 40px;
    }
    .card-list {
      display: flex;
      justify-content: space-between;
      background: #F3F6FB;
      border-radius: 8px;
      padding: 0 40px;
      height: 328px;
      cursor: pointer;
      overflow: hidden;
      transition: all 0.5s ease;
      position: relative;
      .title-container {
        font-family: TTTravels-Medium;
        font-size: 16px;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: 0px;
        text-align: left;
        color: white;
        opacity: 0;
        display: none;
        transition: all 1s ease;
      }
      &:hover {
        background: #5A30F0;
        transition: all 0.5s ease;
        transition-delay: 0.2s;
        .title-container {
          opacity: 1;
          display: block;
        }
        .card-container {
          opacity: 0;
          display: none;
        }
        // .card-container {
        //   opacity: 0;
        //   transition: opacity .4s ease-in-out;
        //   p {
        //     opacity: 0;
        //     transition: opacity .4s ease-in-out;
        //   }
        //   .img-container {
        //     img {
        //       opacity: 0;
        //       transition: opacity .4s ease-in-out;
        //     }
        //   }
        // }
      }
      .card-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .card-title {
          font-family: TTTravels-Medium;
          font-style: normal;
          font-weight: 500;
          font-size: 24px;
          line-height: 130%;
          text-align: center;
        }
        .img-container {
          display: flex;
          justify-content: center;
          img {
            opacity: 1;
            display: inherit;
          }
        }
      }
    }
}
</style>
