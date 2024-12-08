<script>
import { RouterView } from 'vue-router'
// Components
import MainNavDrawer from "@/components/layout/MainNavDrawer.vue"

export default {
  data: () => ({
    // theme: useTheme(),
  }),
  components: {
    MainNavDrawer
  },
  computed: {
  },
  mounted() {
  },
  methods: {
  },
}
</script>

<template>
  <v-app>
    <MainNavDrawer />

    <v-main>
      <router-view v-slot="{ Component }">
        <transition name="nested">
          <component :is="Component" />
        </transition>
      </router-view>
    </v-main>
  </v-app>
</template>

<style>
/* Cyberpunk Tech Transition */
.nested-enter-active,
.nested-leave-active {
  overflow: hidden;
}

/* Optional: Add Scanline Effect */
.nested-enter-active,
.nested-leave-active {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: rgb(0, 0, 0);
  animation: scanline 1s linear infinite;
}

@keyframes scanline {
  0% {
    transform: translateY(-100vh);
  }

  100% {
    transform: translateY(100vh);
  }
}
</style>