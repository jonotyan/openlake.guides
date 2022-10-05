<template>
  <div id="container">
    <v-container>
      <v-row class="text-center">
        <v-col cols="12">
          <v-img
              :src="require('../assets/homepage/title.png')"
              class="my-3"
              contain
              height="200"
          />
        </v-col>
      </v-row>

      <p class="p-badges">
          <img class="badge" src="https://img.shields.io/badge/%D0%A3%D1%87%D0%B8%D1%81%D1%8C-%D0%B8%D0%B3%D1%80%D0%B0%D1%8F-important">
          <img class="badge" id="second" src="https://img.shields.io/badge/Open%20Lake-Code-9cF">
          <img class="badge" id="third" src="https://img.shields.io/badge/made%20with-%E2%99%A5-red">
      </p>
<!--      <hr>-->
      <div class="full-container">
        <p class="p-nav">
          <a class="home-btn" href="https://jonotyan.github.io/openlake.guides/help.md">Инструкции</a> •
          <a class="home-btn" href="https://jonotyan.github.io/openlake.guides/shpor.md">Шпаргалки</a> •
          <a class="home-btn" href="https://jonotyan.github.io/openlake.guides/tutorials.md">Туториалы</a> •
          <a class="home-btn" href="https://jonotyan.github.io/openlake.guides/books">Книги</a>
        </p>

        <h4>Если вы дадите человеку программу, то займете его на один день.<br>Если вы научите человека программировать, то займете его на всю жизнь.</h4>

        <p>
          <v-img
              :src="require('../assets/homepage/wrap.png')"
              class="my-3 main-img"
              contain
              height="600"
          />
        </p>
        <p class="p-social">
          <a href="https://instagram.com/openlake.code" terget="_blank"><img src="https://img.shields.io/twitter/url?color=coral&label=блог с проектами&logo=instagram&logoColor=coral&style=for-the-badge&url=https%3A%2F%2Fwww.instagram.com%2Feugene.tyan%2F"/></a> &nbsp;
          <a href="https://t.me/jonotyan" terget="_blank"><img alt="Gmail" src="https://img.shields.io/twitter/url?color=blue&label=АВТОРСКИЙ КАНАЛ&logo=Telegram&style=for-the-badge&url=https%3A%2F%2Ft.me%2FJonatyan" /></a> &nbsp;
        </p>
      </div>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'HomeComponent',

    data: () => ({
      ecosystem: null,
    }),
  }
</script>

<style scoped>
h4 {
  margin-top: 2.5%;
}
v-container {
  background-color: rgba(12,12,12,0.9);
}
.badge {
  width: 10%;
}
.badge-a {
  margin: 1% 1% 1% 1%;
}
.p-badges {
  margin: 5% 0 2.5% 0;
}
.p-nav {
  margin-bottom: 5.5%;
}
.main-img {
  margin-top: 5%;
}
.p-social {
  width: 70%;
  /*text-align: center;*/
  margin: 5% 20% 2% 17%;
  /*border: #42b983 solid 1px;*/
}
.full-container {
  background-color: azure;
  opacity: 0.75;
  box-shadow: #ffdd4b 3px 8px 16px 1px;
  padding: 3% 5% 1% 5%;
  margin-left: 20%;
  margin-right: 20%;
}
#second {
  margin-left: 10px;
  margin-right: 10px;
}
#container {
  background: url("../assets/background/ver.jpg");
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  margin: 0 0 0 0;
}
</style>
