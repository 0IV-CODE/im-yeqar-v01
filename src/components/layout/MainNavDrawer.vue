<script lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
// import { useTheme } from 'vuetify'

// Components
import ImageB from "@/components/blocks/ImageB.vue"

// Pinia
import { useRoutesAuthStore } from '@/stores/auth/routesAuth.js'

export default {
    name: "MainNavDrawer",
    data: () => ({
        // Pinia
        routesAuth: useRoutesAuthStore(),
        navImage: {
            src: 'https://ik.imagekit.io/invimgs0101/IV-CODE/logos/ivcode-logo/WolfWHITE__Transparent__E7BY_DorX.png?updatedAt=1656026848491',
            lazySrc: 'https://ik.imagekit.io/invimgs0101/IV-CODE/logos/ivcode-logo/tr:q-1/WolfWHITE__Transparent__E7BY_DorX.png?updatedAt=1656026848491',
            height: 50,
            width: 50,
            alt: 'Project Logo'
        },
        childRoutes: []
    }),
    components: {
        ImageB
    },
    computed: {
    },
    mounted() {
        this.routeMap()
    },
    methods: {
        routeMap() {
            const activeRoute = this.routesAuth.parentRoutes.find(route => route.active)?.name || "";
            this.childRoutes = this.routesAuth.childRoutes.filter(element => element.parent === activeRoute);
        }
    },
}
</script>

<template>
    <div>
        <!-- Parent Routes -->
        <v-navigation-drawer theme="dark" permanent rail>
            <v-list-item nav>
                <ImageB :imageProp="navImage" />
            </v-list-item>

            <v-divider></v-divider>

            <v-list density="compact" nav>
                <v-tooltip v-for="(item, i) in routesAuth.parentRoutes" :key="i" :text="item.name" location="end">
                    <template v-slot:activator="{ props }">
                        <v-list-item v-bind="props" :prepend-icon="item.icon" value="/"></v-list-item>
                    </template>
                    <strong class="text-white">{{ item.name }}</strong>
                    <p class="text-white">{{ item.desc }}</p>
                </v-tooltip>

            </v-list>
        </v-navigation-drawer>
        <!-- Child Routes -->
        <v-navigation-drawer expand-on-hover rail :permanent="true">
            <v-list density="compact" nav>
                <v-list-item v-for="(item, i) in childRoutes" :key="i" :prepend-icon="item.icon" :title="item.name"
                    value="/"></v-list-item>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<style></style>
