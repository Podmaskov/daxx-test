<template>
  <v-app>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>
<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .8s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  .success-message{
    position: absolute;
    right: 25px;
    top: 25px;
  }
</style>
