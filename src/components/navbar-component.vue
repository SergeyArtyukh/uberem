<template lang="html">
    <div class="navbar-wrapper" ref='header'>
      <div class="logotype-switcher">
        <div class="logotype-container">
          <span class="logotype">{{logotypeName}}</span>
        </div>
        <div class="switcher-container">
          <span class="active">Дом</span>
          <span class="non-active">Офис</span>
        </div>
      </div>
      <div class="nav-links">
        <div
        v-for="navLink in navLinks"
        :key="navLink.id"
        >
        <span class="nav-link">
          {{navLink.title}}
        </span>
        </div>
      </div>
      <div class="number-burger">
        <div class="number-hours">
          <span>{{number}}</span>
          <span class="mlr-15">|</span>
          <span>{{workHours}}</span>
        </div>
        <div class="burger-menu-container">
          <span @click="isActive = !isActive" :class="{active: isActive}"></span>
          <div class="burger-menu">
            <transition name="burger">
              <ul v-if="isActive">
                <li v-for="burgerItem in burgerItems" :key="burgerItem.id">{{burgerItem.title}}</li>
              </ul>
            </transition>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  mounted() {
    window.onscroll = () => this.stickyHeader();
  },
  methods: {
    stickyHeader() {
      const header = this.$refs.header
      const sticky = header.offsetTop
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
  },
  data () {
    return {
      logotypeName: 'уберем.',
      number: '+380 67 401 69 77',
      workHours: '24/7',
      isActive: false,
      navLinks: [
        {
          title: 'После ремонта',
          id: Math.random()
        },
        {
          title: 'Генеральная уборка',
          id: Math.random()
        },
        {
          title: 'Регулярная уборка',
          id: Math.random()
        },
        {
          title: 'Мойка окон',
          id: Math.random()
        }
      ],
      burgerItems: [
        {
          title: 'После ремонта',
          id: 1
        },
        {
          title: 'Генеральная уборка',
          id: 2
        },
        {
          title: 'Регулярная уборка',
          id: 3
        },
        {
          title: 'Мойка окон',
          id: 4
        },
        {
          title: '+380 67 401 69 77',
          id: 5
        },
        {
          title: 'Работаем 24/7',
          id: 5
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
// -------------------- МОБИЛЬНАЯ ВЕРСТКА --------------------

// Resolution 1440 PC
@media (max-width: 1440px) {
  .navbar-wrapper {
    .nav-links {
      div {
        .nav-link {
          margin: 0 16px;
        }
      }
    }

  }
}
// Resolution 1180 Tabs
@media (max-width: 1181px) {
  .navbar-wrapper {
    .logotype-switcher {
      .logotype-container {
        .logotype {
          font-size: 22px;
        }
      }
      .switcher-container {
        margin-left: 16px;
        span {
          font-size: 13px;
        }
      }
    }
    .nav-links {
      div {
        .nav-link {
          display: none;
        }
      }
    }
    .number-hours {
      display: none;
    }
  }
  .navbar-wrapper .number-burger .burger-menu-container .burger-menu ul li {
    font-size: 25px!important;
  }
}
// Resolution 414 Phones
@media (max-width: 415px) {

  .sticky {
    width: auto!important;
  }
  .navbar-wrapper {
    padding: 23px!important;
    .number-burger .burger-menu-container .burger-menu ul {
      width: 50vw!important;
    }
    .logotype-switcher {
      width: 100%;
      justify-content: space-between;
      .switcher-container {
        background-color: #5a30f0!important;
        .active {
          background-color: white!important;
        }
        .non-active {
          color: white!important;
        }
      }
    }
  }
}
// -------------------- МОБИЛЬНАЯ ВЕРСТКА -------------------- КОНЕЦ
// ОСНОВНОЙ CSS
.burger-enter-active, .burger-leave-active {
  transition: opacity 2s;
}
.burger-leave-to {
  transform: translate(400px);
  transition: all .5s ease-in-out;
}
.mlr-15 {
  margin: 0 15px;
}
.navbar-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  padding: 22px 54px 23px;
  left: 0px;
  right: 0px;
  .logotype-switcher {
    .switcher-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-left: 21.44px;
      padding: 3px;
      background-color: white;
      border-radius: 48px;
      .non-active {
        color: #636C81;
      }
      span {
        font-family: TTTravels-DemiBold;
        font-weight: 500;
        font-size: 14px;
        line-height: 110%;
        padding: 8px 12px 8px 12px;
      }
      .active {
        background-color: #5A30F0;
        border-radius: 34px;
      }
    }
  }
  .logotype-switcher,
  .nav-links,
  .number-burger {
    display: flex;
    align-items: center;
  }
  .nav-links {
    .nav-link {
      margin: 0 32px;
      font-family: TTTravels-Medium;
      font-size: 16px;
      font-weight: 500;
      line-height: 19px;
      letter-spacing: 0.20000000298023224px;
      text-align: left;

    }
  }
  .number-burger {
    .number-hours {
      font-family: TTTravels-Medium;
      font-size: 16px;
      font-weight: 500;
      line-height: 19px;
      letter-spacing: 0.20000000298023224px;

    }
    .burger-menu-container {
      margin-left: 38px;
      cursor: pointer;
      width: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      .burger-menu {
        ul {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          list-style: none;
          padding: 0 20px;
          margin: 0;
          position: absolute;
          height: 100vh;
          width: 20%;
          right: 0;
          top: 0;
          bottom: 0;
          background: #5A30F0;
          li {
            font-family: TTTravels-Medium;
            font-size: 35px;
            font-weight: 500;
            line-height: 19px;
            letter-spacing: 0.20000000298023224px;
            color: lightgrey;
            margin-bottom: 70px;
          }
        }
      }
      span {
        position: absolute;
        z-index: 10;
        width: 20px;
        height: 20px;
        &:before,
        &:after {
          content: '';
          width: 20px;
          height: 0;
          border: 1px solid #404040;
          border-radius: 50%;
          position: absolute;
          left: 0;
          // box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
          transition:0.5s;

        }
        &:before {
          bottom: 5px;
        }
        &:after {
          top: 5px;
        }
      }
      .active {
        transition:0.5s;
        &:before {
          bottom: 9px;
          transform: rotate(50deg);
          border: 1px solid lightgrey;
          background-color: lightgrey;
        }
        &:after {
          top: 8px;
          transform: rotate(-50deg);
          border: 1px solid lightgrey;
          background-color: lightgrey;
        }
      }
    }
  }
}
.logotype {
  font-family: TTTravels-Bold;
  font-size: 25px;

}
.nav-link {
  font-family: TTTravels-Regular;
}
.sticky {
  position: fixed!important;
  top: 0;
  background-color: white;
  transition: all .5s ease;
  z-index: 10;
}
</style>
