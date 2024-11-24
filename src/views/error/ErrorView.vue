<script lang="js">
// import { RouterLink, RouterView } from 'vue-router'
// import { useTheme } from 'vuetify'

// Components
// import ImageB from "@/components/blocks/ImageB.vue"

// Pinia
// import { useRoutesAuthStore } from '@/stores/auth/routesAuth.js'

export default {
    name: "ErrorView",
    data: () => ({
        // Pinia
        // routesAuth: useRoutesAuthStore(),

    }),
    components: {
        // ImageB
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
    <div>
        <p class="text-h1">(Client Errors)</p>
        <p class="text-h2">404 Not Found - Requested resource doesn't exist</p>
        <p class="text-h2">403 Forbidden - Server understood but refuses to fulfill</p>
        <p class="text-h2">401 Unauthorized - Authentication required</p>
        <p class="text-h1">(Redirection)</p>
        <p class="text-h2">301 Moved Permanently - Resource has permanently moved to new URL</p>
    </div>
</template>

<style></style>
