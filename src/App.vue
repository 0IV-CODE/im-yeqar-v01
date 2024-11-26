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
  <v-layout>
    <MainNavDrawer />

    <v-main>
      <router-view v-slot="{ Component }">
        <transition name="nested">
          <component :is="Component" />
        </transition>
      </router-view>
    </v-main>
  </v-layout>
</template>

<style>
/* Cyberpunk Tech Transition */
.nested-enter-active,
.nested-leave-active {
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  position: absolute;
  width: 100%;
  overflow: hidden;
}

/* Glitch-Inspired Entrance */
.nested-enter-from {
  opacity: 0;
  transform:
    perspective(1500px) rotateX(45deg) scale(0.7) translateZ(-250px);
  filter:
    blur(15px) brightness(150%) contrast(200%);
  background: linear-gradient(45deg,
      rgba(0, 255, 255, 0.1),
      rgba(255, 0, 255, 0.1));
  mix-blend-mode: screen;
}

/* Digital Decay Exit */
.nested-leave-to {
  opacity: 0;
  transform:
    perspective(1500px) rotateY(-45deg) scale(0.6) translateX(100px);
  filter:
    blur(20px) brightness(200%) hue-rotate(90deg);

  /* Simulate digital disintegration */
  background:
    repeating-linear-gradient(45deg,
      rgba(0, 255, 255, 0.2),
      rgba(255, 0, 255, 0.2) 10px,
      transparent 10px,
      transparent 20px);
  mix-blend-mode: overlay;
}

/* Inner Elements Cyber Pulse */
.nested-enter-active .inner,
.nested-leave-active .inner {
  transition:
    all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1),
    filter 0.3s ease-out;
}

.nested-enter-active .inner {
  transition-delay: 0.3s;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform:
    translateX(80px) rotateY(30deg) skew(10deg);
  opacity: 0;
  filter:
    brightness(300%) contrast(200%) hue-rotate(60deg);
}

/* Optional: Add Scanline Effect */
.nested-enter-active::after,
.nested-leave-active::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(to right,
      transparent,
      cyan,
      magenta,
      transparent);
  animation: scanline 2s linear infinite;
}

@keyframes scanline {
  0% {
    transform: translateY(-100%);
  }

  100% {
    transform: translateY(100vh);
  }
}
</style>