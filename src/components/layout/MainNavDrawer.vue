<script lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
// import { useTheme } from 'vuetify'

// Components
import ImageB from "@/components/blocks/ImageB.vue"

// Pinia
// import { useNotifyStStore } from '@/stores/notify/notifySt.js'

export default {
    name: "MainNavDrawer",
    data: () => ({
        // Pinia
        // notifySt: useNotifyStStore(),
        navImage: {
            src: 'https://ik.imagekit.io/invimgs0101/IV-CODE/logos/ivcode-logo/WolfWHITE__Transparent__E7BY_DorX.png?updatedAt=1656026848491',
            lazySrc: 'https://ik.imagekit.io/invimgs0101/IV-CODE/logos/ivcode-logo/tr:q-1/WolfWHITE__Transparent__E7BY_DorX.png?updatedAt=1656026848491',
            height: 50,
            width: 50,
            alt: 'Project Logo'
        }
    }),
    components: {
        ImageB
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
        <v-navigation-drawer theme="dark" permanent rail>
            <v-list-item nav>
                <ImageB :imageProp="navImage" />
            </v-list-item>

            <v-divider></v-divider>

            <v-list density="compact" nav>
                <v-list-item prepend-icon="$AccountCircleOutline"></v-list-item>
                <v-list-item prepend-icon="$DatabaseOutline"></v-list-item>
                <v-list-item prepend-icon="$Security"></v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-navigation-drawer expand-on-hover rail>
            <v-list density="compact" nav>
                <v-list-item prepend-icon="$BadgeAccountOutline" title="Profile"></v-list-item>
                <v-list-item prepend-icon="$Finance" title="Growth Plans"></v-list-item>
                <v-list-item prepend-icon="$AccountTie" title="Team Lead"></v-list-item>
                <v-list-item prepend-icon="$TestTube" title="Tests"></v-list-item>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<style></style>
