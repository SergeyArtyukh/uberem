<template lang="html">
  <div class="how-we-clean-wrapper">
    <transition-group appear tag="div" @enter="enter" @after-enter="aEnter" class="tra-group-class">
      <bigButton key="big" ref="bigButton" class="b"/>
    <!-- <bigButton key="bigB" ref="bigButton" class="b"/> -->
    <div key="first-el" ref="title" class="title-container">
      <h1 class="v-width-1-2 v-width-1-3">{{title}}</h1>
      <p class="v-width-1-2 v-width-2-3">{{desc}}</p>
    </div>
    <div key="second-el" class="animation-container" ref="aniCon">
      <div class="menu-container" ref="menuCon">
        <h6>{{title}}</h6>
        <ul>
          <transition-group appear @enter="enterList">
            <li @click="changeImg(index)" class="list-item" v-for="(item, index) in items" :key="item.id" :data-index="index">
              <span ref="listItem" v-if="item.isActiveList" :class="{'is-active-hover': item.isActiveList}" class="arrow">→</span>
              {{item.title}}
            </li>
          </transition-group>
        </ul>
      </div>
      <div class="imgs-container" ref="imgsCon">
        <div class="img-container">
            <img ref="img"  :src="require('@/assets/imgs/how-we-clean/' + url1)" class="first-img" alt="#">
            <img ref="img2" :class="{'active': isActive2, 'not-active': !isActive2 }"   :src="require('@/assets/imgs/how-we-clean/' + url2)" alt="#">
            <img ref="img2" :class="{'active': isActive3, 'not-active': !isActive3 }"  :src="require('@/assets/imgs/how-we-clean/' + url1)" alt="#">
            <img ref="img2" :class="{'active': isActive4, 'not-active': !isActive4 }"  :src="require('@/assets/imgs/how-we-clean/' + url2)" alt="#">
            <!-- Нужно перевести в отдельные компоненты и передать props параметры -->
            <div ref="gridTemplate1" class="grid-template" v-if="imgActive1" :class="{'grid-active' : imgActive1}">
              <div class="box1">
                <div class="popup-container">
                  <span @click="plusClicked" class="plus-container" :class="{'plus-clicked' : isPlused}">
                    <span v-if="isPlused" class="popup-to-plus">Чистим фасад вытяжки</span>
                    <span class="plus"></span>
                  </span>
                </div>
              </div>
                <div class="box2">
                </div>
                  <div class="box3"></div>
                    <div class="box4">
                      <div class="popup-container">
                        <!-- <span class="popup-to-plus">bla bla bla</span> -->
                        <span class="plus-container">
                          <span class="plus"></span>
                        </span>
                      </div>
                    </div>
                      <div class="box5">
                        <div class="popup-container">
                          <!-- <span class="popup-to-plus">bla bla bla</span> -->
                          <span class="plus-container">
                            <span class="plus"></span>
                          </span>
                        </div>
                      </div>
                        <div class="box6">
                          <div class="popup-container">
                            <!-- <span class="popup-to-plus">bla bla bla</span> -->
                            <span class="plus-container">
                              <span class="plus"></span>
                            </span>
                          </div>
                        </div>
                          <div class="box7">
                            <div class="popup-container">
                              <!-- <span class="popup-to-plus">bla bla bla</span> -->
                              <span class="plus-container">
                                <span class="plus"></span>
                              </span>
                            </div>
                          </div>
                            <div class="box8">
                              <div class="popup-container">
                                <!-- <span class="popup-to-plus">bla bla bla</span> -->
                                <span class="plus-container">
                                  <span class="plus"></span>
                                </span>
                              </div>
                            </div>
                              <div class="box9">
                                <div class="popup-container">
                                  <!-- <span class="popup-to-plus">bla bla bla</span> -->
                                  <span class="plus-container">
                                    <span class="plus"></span>
                                  </span>
                                </div>
                              </div>
            </div>
            <div ref="gridTemplate2" class="grid-template2" v-if="imgActive2" :class="{'grid-active' : imgActive2}">
              <div class="box1">
              </div>
                <div class="box2">
                </div>
                  <div class="box3"></div>
                    <div class="box4">
                      <div class="popup-container">
                        <!-- <span class="popup-to-plus">bla bla bla</span> -->
                        <span class="plus-container">
                          <span class="plus"></span>
                        </span>
                      </div>
                    </div>
                      <div class="box5">
                      </div>
                        <div class="box6">
                          <div class="popup-container">
                            <!-- <span class="popup-to-plus">bla bla bla</span> -->
                            <span class="plus-container">
                              <span class="plus"></span>
                            </span>
                          </div>
                        </div>
                          <div class="box7">
                            <div class="popup-container">
                              <span @click="plusClicked" class="plus-container" :class="{'plus-clicked' : isPlused}">
                                <span v-if="isPlused" class="popup-to-plus">Чистим фасад вытяжки</span>
                                <span class="plus"></span>
                              </span>
                            </div>
                          </div>
                            <div class="box8">
                              <div class="popup-container">
                                <!-- <span class="popup-to-plus">bla bla bla</span> -->
                                <span class="plus-container">
                                  <span class="plus"></span>
                                </span>
                              </div>
                            </div>
                              <div class="box9">
                                <div class="popup-container">
                                  <!-- <span class="popup-to-plus">bla bla bla</span> -->
                                  <span class="plus-container">
                                    <span class="plus"></span>
                                  </span>
                                </div>
                              </div>
            </div>
        </div>
        <!-- <div class="">
          <img ref="img2" :src="require('@/assets/imgs/how-we-clean/' + url2)" alt="#">
        </div> -->
      </div>
    </div>
  </transition-group>
  </div>
</template>

<script>
import bigButton from '@/components/make-order-big-button.vue'
export default {
  components: {
    bigButton
  },
  mounted() {
    this.scrollAnimation();
  },
  data () {
    return {
      title: 'Как мы убираем',
      desc: 'Клинер приезжает в назначенное время со всем необходимым и сразу приступает к делу. Вам остаётся только оценить результат.',
      url1: 'img1.png',
      url2: 'bathroom.png',
      isActive: false,
      isActive2: false,
      isActive3: false,
      isActive4: false,
      isPlused: false,
      imgActive1: true,
      imgActive2: false,
      scrollPosition: null,
      items: [
        {
          title: 'Кухня',
          isActive: false,
          id: 1,
          url: 'Placeholder.png',
          isActiveList: true,
        },
        {
          title: 'Комнаты',
          isActive: false,
          id: 2,
          url: 'bathroom.png',
          isActiveList: false,
        },
        {
          title: 'Ванная',
          isActive: false,
          id: 3,
          url: 'Placeholder.png',
          isActiveList: false,
        },
        {
          title: 'Прихожая',
          isActive: false,
          id: 4,
          url: 'bathroom.png',
          isActiveList: false,
        }
      ]
    }
  },
  methods: {
    scrollAnimation() {
      this.gsap.to(".b", {
        scrollTrigger: {
          trigger: ".title-container",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
         scale: 0.8,
         duration: 0.2,
      });
      this.gsap.to(".b", {
        scrollTrigger: {
          trigger: ".first-img",
          start: "center center",
          end: "bottom bottom",
          scrub: true,
        },
         scale: 0,
         duration: 2,
      });
    },
    plusClicked() {
      this.isPlused = !this.isPlused
    },
    // Костыли для изменения картинки по клику
    changeImg(index) {
      if (this.items[index].id == 1 ) {
        this.isActive = true;
        this.isActive2 = false;
        this.isActive3 = false;
        this.isActive4 = false;
        this.imgActive1 = true;
        this.imgActive2 = false;
        this.items.forEach((element) => {
          if (element.id == 1) {
            this.items[index].isActiveList = true;
          } else {
            element.isActiveList = false;
          }
        });
      } else if (this.items[index].id == 2) {
        this.isActive = false;
        this.isActive2 = true;
        this.isActive3 = false;
        this.isActive4 = false;
        this.imgActive1 = false;
        this.imgActive2 = true;
        this.items.forEach((element) => {
          if (element.id == 2) {
            this.items[index].isActiveList = true;
          } else {
            element.isActiveList = false;
          }
        });
      } else if (this.items[index].id == 3){
        this.isActive = false;
        this.isActive2 = false;
        this.isActive3 = true;
        this.isActive4 = false;
        this.imgActive1 = true;
        this.imgActive2 = false;
          this.items.forEach((element) => {
            if (element.id == 3) {
              this.items[index].isActiveList = true;
            } else {
              element.isActiveList = false;
            }
          });
      } else if (this.items[index].id == 4) {
        this.isActive = false;
        this.isActive2 = false;
        this.isActive3 = false;
        this.isActive4 = true;
        this.imgActive1 = false;
        this.imgActive2 = true;
        this.items.forEach((element) => {
          if (element.id == 4) {
            this.items[index].isActiveList = true;
          } else {
            element.isActiveList = false;
          }
        });
      } else {
        console.log('ошибка');
      }
    },
  // Анимация на элементы списка( синий фон)
    enterList(el) {
    this.gsap.to(el, {
        scrollTrigger: {
          trigger: this.$refs.menuConBlue,
          toggleActions: 'restart none none none',
          start: 'top top',
          end: 'center center',
          // scrub: true
        },
        duration: 2,
        ease: "power2.out",
        x: 50,
        delay: el.dataset.index * 0.2
      })
    },
    // Анимация на элементы с глобального блока с заголовком и картинкой
    enter(el) {
      this.gsap.to(el, {
        scrollTrigger: {
          trigger: this.$refs.menuCon,
          toggleActions: 'restart none none none',
        },
        // y: -50,
        ease: "power2.out",
        duration: 1,
        delay: el.dataset.index * 1,
      });
    },
  // Анимация на появления меню с синим фоном
    aEnter() {
      this.gsap.to(this.$refs.menuCon, {
        scrollTrigger: {
          trigger: this.$refs.img,
          toggleActions: 'restart none none none',
          start: 'top 20%',
          end: 'center center',
          scrub: true
        },
        duration: 4,
        ease: "power2.inOut",
        display: 'block',
        x: 0,
      });
      this.gsap.to(this.$refs.title, {
        scrollTrigger: {
          trigger: this.$refs.img,
          toggleActions: 'restart none none none',
          start: 'top 20%',
          end: 'top 20%',
          scrub: true
        },
        y: -100,
        ease: "power2.out",
        duration: 4,
      });
      // .from(".animation-container", {height: "100vh"});
      this.gsap.to(this.$refs.gridTemplate1, {
        scrollTrigger: {
          trigger: this.$refs.img,
          toggleActions: 'restart none none none',
          start: 'center center',
          end: 'center center',
          scrub: true
        },
        opacity: 1,
        ease: "power2.out",
        duration: 4,
      });
      this.gsap.to(".imgs-container", {
        scrollTrigger: {
          trigger: this.$refs.img,
          toggleActions: 'restart none none none',
          start: 'top 20%',
          end: 'center bottom',
          scrub: true
        },
        ease: "power2.inOut",
        x: 0,
        duration: 4
      });
    //   this.gsap.fromTo(this.$refs.imgsCon, 2.2,
    //   {
    //     scrollTrigger: {
    //       trigger: this.$refs.img,
    //       toggleActions: 'restart none none none',
    //       start: 500,
    //       end: 1000,
    //       scrub: true
    //     },
    //     width: "100%",
    //     ease: "power2.out",
    //     repeat: -1,
    //     repeatDelay: 2
    //   }
    // )
    }
  }
}
</script>

<style lang="scss" scoped>
// НАЧАЛО-------------------- МОБИЛЬНАЯ ВЕРСТКА --------------------

// Resolution 1180 Tabs
@media (max-width: 1181px) {
  .how-we-clean-wrapper .animation-container .menu-container ul .list-item {
    font-size: 36px!important;
  }
  .how-we-clean-wrapper .title-container {
    margin: 40px 0;
    width: 80%!important;
  }
  .v-width-1-3 {
    width: 40%;
  }
  .v-width-2-3 {
    width: 60%;
  }
}

// Resolution 414 Phones
@media (max-width: 415px) {
  .b {
    display: none;
  }
  .how-we-clean-wrapper {
    .tra-group-class {
      .title-container {
        flex-direction: column;
        .v-width-1-2 {
          width: 100%;
        }
      }
      .animation-container {
        flex-direction: column;
        .menu-container {
          display: block;
          transform: none;
          width: auto;
          transition: all 1s ease;
        }
        .imgs-container {
          transform: none;
          width: 100%;
          .img-container {
            .grid-template {
              .box6 {
                .popup-container {
                  .plus-container {
                    left: -30px;
                  }
                }
              }
              .box5 {
                .popup-container {
                  .plus-container {
                    left: 180px;
                    bottom: -5px;
                  }
                }
              }
              .box4 {
                .popup-container {
                  .plus-container {
                    bottom: 30px;
                    right: 25px;
                  }
                }
              }
            }
            .box9 {
              .popup-container {
                .plus-container {
                  top: -30px!important;
                  left: -100px!important;
                }
              }
            }
            .grid-active {
              opacity: 1;
              div {
                .popup-container {
                  .plus-container {
                    width: 20px;
                    height: 20px;
                    box-shadow: 0px 0px 0px 5.55px rgb(90 48 240 / 40%);
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
// -------------------- МОБИЛЬНАЯ ВЕРСТКА -------------------- КОНЕЦ
.grid-for-img {
  display: block;
}
.how-we-clean-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  .tra-group-class {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .title-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1094px;
    transition: all 1.5s ease-in-out;
    .v-width-1-2 {
      width: 50%;
    }
    h1 {
      font-family: TTTravels-Medium;
      font-size: 44px;
      font-weight: 400;
      line-height: 53px;
      letter-spacing: 0px;
      text-align: left;
    }
    p {
      font-family: TTTravels-Medium;
      font-size: 18px;
      font-weight: 400;
      line-height: 25px;
      letter-spacing: 0px;
      text-align: left;
    }
  }
  .animation-container {
    // margin-bottom: 142px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: 100vh;
    z-index: 10;
    .menu-container {
      background-color: #5A30F0;
      width: 25%;
      height: inherit;
      // height: 100vh;
      // transform: translateX(-150px);
      padding: 0 36px 0 60px;
      // display: none;
      transform: translateX(-500px);
      z-index: 4;
      transition: all 1.5s ease-in-out;
      h6 {
        font-family: TTTravels-Bold;
        font-size: 16px;
        font-weight: 500;
        line-height: 21px;
        letter-spacing: 0em;
        text-align: left;
        color: white;
      }
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        height: 80%;
        .list-item {
          cursor: pointer;
          display: flex;

          font-family: TTTravels-Medium;
          font-size: 44px;
          font-style: normal;
          font-weight: 400;
          line-height: 53px;
          letter-spacing: 0px;
          text-align: left;
          color: white;
          margin-bottom: 22px;
          .arrow {
            display: none;
            opacity: 0;
          }
          .is-active-hover {
            display: block;
            opacity: 1;
            margin-right: 10px;
          }
          &:hover {
            font-style: italic;
          }
        }
      }
    }
    .imgs-container {
      width: 75%;
      height: inherit;
      transform: translateX(-240px);
      transition: all 1.5s ease-in-out;
      .img-container {
        position: relative;
        height: 100%;
        transition: all 0.7s;
        overflow: hidden;
        object-fit: cover;
        .first-img {
          clip-path: polygon(0 0,100% 0%,100% 100%,0 100%);
          transition: all 0.7s;
        }
        .grid-active {
          opacity: 1;
        }
        .grid-template {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(3, 1fr);
          height: 100%;
          width: 100%;
          z-index: 10;
          opacity: 0;
          position: absolute;
          top: 0;
          transition: all 1s ease-in-out;
          .box1 {
            .popup-container {
              display: flex;
              justify-content: flex-end;
              .plus-container {
                bottom: -10px;
              }
            }
          }
          .box4 {
            .popup-container {
              display: flex;
              justify-content: right;
              align-items: flex-end;
              .plus-container {
                bottom: 40px;
                right: 100px;
              }
            }
          }
          .box5  {
            .popup-container {
              display: flex;
              justify-content: center;
              align-items: flex-end;
              .plus-container {
                left: 145px;
                bottom: 15px;
              }
            }
          }
          .box7 {
            .popup-container {
              display: flex;
              justify-content: flex-end;
              align-items: center;
              .plus-container {
                bottom: 40px;
                right: 40px;
              }
            }
          }
          .box6 {
            .popup-container {
              display: flex;
              justify-content: flex-start;
              align-items: center;
              .plus-container {
                left: -100px;
              }
            }
          }
          .box8 {
            .popup-container {
              .plus-container {
                top: 25px;
              }
            }
          }
          .box9 {
            .popup-container {
              .plus-container {
                top: -30px;
                left: 135px;

              }
            }
          }
          div {
            position: relative;
            .popup-container {
              height: 100%;
              width: 100%;
              span {
                position: absolute;
                z-index: 10;
              }
              .plus-clicked {
                box-shadow: none!important;
                transition: all .3s ease-in-out;
              }
              .plus-container {
                position: absolute;
                z-index: 10;
                background-color: #5A30F0;
                width: 30px;
                height: 30px;
                border-radius: 50%;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                box-shadow: 0px 0px 0px 9.55px rgba(90, 48, 240, 0.40);
                transition: all .3s ease-in-out;
                .popup-to-plus {
                  position: absolute;
                  background: white;
                  width: 180px;
                  padding: 20px 20px;
                  border-radius: 2px;
                  bottom: 50px;
                  left: -40px;

                  font-family: TTTravels-Medium;
                  font-size: 13px;
                  font-weight: 500;
                  line-height: 17px;
                  letter-spacing: 0px;
                  text-align: center;
                  color: #636C81;

                }
                &:hover {
                  box-shadow: none;
                  transition: all .3s ease-in-out;
                }
                .plus {
                  position: relative;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  text-align: center;
                  width: 100%;
                }
                .plus:before,
                .plus:after {
                  content: '';
                  background-color: white;
                  width: 15px;
                  height: 2px;
                  position: absolute;
                  left: 0;
                  right: 0;
                  bottom: 0;
                  top: -1px;
                  margin: 0 auto;
                }
                .plus:before {
                  transform: rotate(90deg);
                }
            }
            }
          }
        }
        .grid-template2 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(3, 1fr);
          height: 100%;
          width: 100%;
          z-index: 10;
          opacity: 0;
          position: absolute;
          top: 0;
          transition: all 0.7s ease;
            .popup-container {
              height: 100%;
              width: 100%;
              span {
                position: absolute;
                z-index: 10;
              }
              .plus-clicked {
                box-shadow: none!important;
                transition: all .3s ease-in-out;
              }
              .plus-container {
                position: absolute;
                z-index: 10;
                background-color: #5A30F0;
                width: 30px;
                height: 30px;
                border-radius: 50%;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                box-shadow: 0px 0px 0px 9.55px rgba(90, 48, 240, 0.40);
                transition: all .3s ease-in-out;
                .popup-to-plus {
                  position: absolute;
                  background: white;
                  width: 180px;
                  padding: 20px 20px;
                  border-radius: 2px;
                  bottom: 50px;
                  left: -40px;

                  font-family: TTTravels-Medium;
                  font-size: 13px;
                  font-weight: 500;
                  line-height: 17px;
                  letter-spacing: 0px;
                  text-align: center;
                  color: #636C81;

                }
                &:hover {
                  box-shadow: none;
                  transition: all .3s ease-in-out;
                }
                .plus {
                  position: relative;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  text-align: center;
                  width: 100%;
                }
                .plus:before,
                .plus:after {
                  content: '';
                  background-color: white;
                  width: 15px;
                  height: 2px;
                  position: absolute;
                  left: 0;
                  right: 0;
                  bottom: 0;
                  top: -1px;
                  margin: 0 auto;
                }
                .plus:before {
                  transform: rotate(90deg);
                }
            }
          }
          .box1 {
            .popup-container {
              display: flex;
              justify-content: flex-end;
              .plus-container {
                bottom: -10px;
              }
            }
          }
          .box4 {
            .popup-container {
              display: flex;
              justify-content: flex-end;
            }
          }
          .box9 {
            .popup-container {
              display: flex;
              justify-content: center;
              align-items: center;
            }
          }
          .box6 {
            .popup-container {
              display: flex;
              align-items: center;
            }
          }
          .box7 {
            .popup-container {
              display: flex;
              justify-content: flex-end;
              align-items: center;
            }
          }
          .box8 {
            .popup-container {
              display: flex;
              justify-content: flex-end;
              align-items: center;
              .plus-container {
                bottom: 45px;
              }
            }
          }
        }
        .not-active {
          transform: scale(2);
          z-index: 1;
          transition: all 0.7s;
          position: absolute;
          clip-path: polygon(0 0,0% 0%,0% 100%,0 100%);
        }
        .active {
          transform: scale(1);
          z-index: 3;
          transition: all 0.7s;
          position: absolute;
          clip-path: polygon(0 0,100% 0%,100% 100%,0 100%);
        }
        img {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          right: 0;
          z-index: 2;
          width: 100%;
          height: 100%;
          transition: all 1.5s ease-in-out;
        }
      }
    }
  }
}
</style>
