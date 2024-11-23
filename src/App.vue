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
      <RouterView />
    </v-main>
  </v-layout>
</template>

<style scoped></style>
