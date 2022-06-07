<template lang="html">
  <div class="header-wrapper">
    <div class="img-container v-width-1-2">
      <div class="img-background">

      </div>
    </div>
    <div class="v-width-1-2">
      <div class="title-container">
        <!-- // Hero Title (H1 on Home Page); -->
        <div class="h1-container">
          <h1>Уборка квартир в Киеве</h1>
        </div>
        <span class="desc">Мы уберем у вас дома или в офисе. Наведем чистоту после ремонта и проведем генеральную уборку.</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
// НАЧАЛО -------------------- МОБИЛЬНАЯ ВЕРСТКА --------------------
// Resolution 414 Phones
@media (max-width: 415px) {
  .header-wrapper {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: inherit;
    background-image: url("@/assets/imgs/navbar/Rectangle47.png");
    .v-width-1-2 {
      width: auto!important;
      .title-container {
        padding: 0 20px;
        .desc {
          width: 0;
        }
        .h1-container {
          width: 0;
          h1 {
            font-size: 60px;
          }
        }
      }
    }
  }
}
// -------------------- МОБИЛЬНАЯ ВЕРСТКА -------------------- КОНЕЦ
.header-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100vh;
  .img-container {
    .img-background {
      background-image: url("@/assets/imgs/navbar/Rectangle47.png");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      height: inherit;
    }
  }
  .v-width-1-2 {
    width: 50%;
    height: 100%;
    .title-container {
      height: inherit;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .h1-container {
        width: 401px;
        h1 {
          // Hero Title (H1 on Home Page);
          font-family: TTTravels-Medium;
          font-size: 76px;
          font-weight: 400;
          line-height: 84px;
          letter-spacing: 0px;
          text-align: left;
        }
      }
      .desc {
        width: 397px;
        text-align: left;
        font-family: TTTravels-Medium;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 140%;
      }
    }
  }
}
</style>
