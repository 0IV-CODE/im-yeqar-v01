<script lang="js">
import { useRouter } from 'vue-router'
// import { useTheme } from 'vuetify'

// Components
import ImageB from "@/components/blocks/ImageB.vue"

// Pinia
import { useRoutesAuthStore } from '@/stores/auth/routesAuth.js'

export default {
    name: "MainNavDrawer",
    data: () => ({
        // vue-router
        router: useRouter(),
        // Pinia
        routesAuth: useRoutesAuthStore(),
        logoImg: {
            src: 'https://ik.imagekit.io/invimgs0101/IV-CODE/logos/ivcode-logo/WolfWHITE__Transparent__E7BY_DorX.png?updatedAt=1656026848491',
            lazySrc: 'https://ik.imagekit.io/invimgs0101/IV-CODE/logos/ivcode-logo/tr:q-1/WolfWHITE__Transparent__E7BY_DorX.png?updatedAt=1656026848491',
            height: 50,
            width: 50,
            alt: 'Project Logo'
        },
        childRoutes: [],
        activeRoute: '',
        companies: [],
        logoMenu: false
    }),
    components: {
        ImageB
    },
    computed: {
    },
    mounted() {
        this.routeMap()
        this.companiesFetch()
    },
    methods: {
        routeMap() {
            this.activeRoute = this.routesAuth.parentRoutes.find(route => route.active)?.name || "";
            this.childRoutes = this.routesAuth.childRoutes.filter(element => element.parent === this.activeRoute);
        },
        toggleParentRoute(item) {
            this.routesAuth.stateToggleParentRoute(item)
            this.routeMap()
            // todo: will have to add params here
            this.router.push(this.childRoutes[0].path)
        },
        logout() {
            this.router.push('/login')
        },
        companiesFetch() {
            this.companies = this.routesAuth.companies
        },
        toggleCompany(item) {
            this.routesAuth.stateToggleCompanyRoute(item)
            this.companiesFetch()
        }
    },
}
</script>

<template>
    <div>
        <!-- Parent Routes -->
        <v-navigation-drawer class="bg-black" permanent rail>
            <!-- logo & sub menu -->
            <v-list-item nav>
                <v-menu v-model="logoMenu" :close-on-content-click="false" location="end">
                    <template v-slot:activator="{ props }">
                        <ImageB v-bind="props" :imageProp="logoImg" />
                    </template>
                    <v-card width="300">
                        <v-card-text>
                            <v-row>
                                <v-col cols="4" class="pb-0">
                                    <v-card height="100" width="80" class="bg-grey pa-4"></v-card>
                                </v-col>
                                <v-col cols="8" class="pb-0">
                                    <p>USER</p>
                                    <p class="text-secondary text-h5">ANAKIN SKYWALKER</p>
                                </v-col>
                                <v-col cols="12">
                                    <hr />
                                    <p>CLEARANCE: A1002</p>
                                    <hr />
                                </v-col>
                                <v-col cols="12">
                                    <v-btn block variant="outlined" color="error" class="rounded-0">
                                        SIGN OUT
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-menu>
            </v-list-item>
            <v-divider></v-divider>
            <!-- main routes -->
            <v-list density="compact" nav>
                <v-tooltip v-for="(item, i) in routesAuth.parentRoutes" :key="i" :text="item.name" location="end">
                    <template v-slot:activator="{ props }">
                        <v-list-item @click="toggleParentRoute(item)" v-bind="props" :prepend-icon="item.icon"
                            :active="item.active" :variant="item.active ? 'outlined' : 'plain'"></v-list-item>
                    </template>
                    <strong class="text-white">{{ item.name }}</strong>
                    <p class="text-white">{{ item.desc }}</p>
                </v-tooltip>
            </v-list>
        </v-navigation-drawer>

        <!-- Child Routes -->
        <!-- A: Regular nav -->
        <v-navigation-drawer v-if="activeRoute !== 'data'" expand-on-hover rail :permanent="true">
            <v-list density="compact" nav>
                <div v-for="item in childRoutes" :key="item.path" class="list-item-wrapper">
                    <v-list-item v-if="item.name !== 'Logout'" :prepend-icon="item.icon" :title="item.name"
                        :to="item.path"></v-list-item>
                    <v-list-item v-else-if="item.name === 'Logout'" @click="logout()" :prepend-icon="item.icon"
                        :title="item.name" class="bg-red mt-16"></v-list-item>
                </div>
            </v-list>
        </v-navigation-drawer>

        <!-- B1: Data Child Routes -->
        <v-navigation-drawer v-if="activeRoute === 'data'" rail :permanent="true">
            <v-list density="compact" nav>
                <v-tooltip v-for="item in companies" :key="item.path" :text="item.name" location="end">
                    <template v-slot:activator="{ props }">
                        <v-list-item @click="toggleCompany(item)" :active="item.active" v-bind="props"
                            :prepend-icon="item.icon">
                            <template v-slot:prepend>
                                <v-badge :color="item.color" dot>
                                    <v-icon>{{ item.icon }}</v-icon>
                                </v-badge>
                            </template>
                        </v-list-item>

                    </template>
                    <strong class="text-white">{{ item.name }}</strong>
                    <p class="text-white">{{ item.desc }}</p>
                </v-tooltip>
            </v-list>
        </v-navigation-drawer>
        <!-- B2: Data Nephew Routes -->
        <v-navigation-drawer v-if="activeRoute === 'data'" expand-on-hover rail :permanent="true">
            <v-list density="compact" nav>
                <div v-for="item in childRoutes" :key="item.path" class="list-item-wrapper">
                    <v-list-item :prepend-icon="item.icon" :title="item.name" :to="item.path"></v-list-item>
                </div>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<style></style>