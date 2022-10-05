<template>
  <v-app>
<!--    <v-navigation-drawer app>-->
<!--      &lt;!&ndash; &ndash;&gt;-->
<!--    </v-navigation-drawer>-->

    <v-app-bar app>
      <!-- -->
      <div class="text-center">
        <v-btn
            class="ma-2"
            outlined
            color="indigo"
        >
          Simple text
        </v-btn>
        <v-btn
            class="ma-2"
            outlined
            color="indigo"
        >
          Outlined Button
        </v-btn>
        <v-btn
            class="ma-2"
            outlined
            color="indigo"
        >
          Outlined Button
        </v-btn>

      </div>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>

      <!-- Provides the application the proper gutter -->
      <v-container fluid>

        <!-- If using vue-router -->
        <router-view>
          <router-view/>
        </router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
