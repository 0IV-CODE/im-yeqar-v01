<script lang="js">
// import { RouterLink, RouterView } from 'vue-router'
// import { useTheme } from 'vuetify'

// Components
import ImageB from "@/components/blocks/ImageB.vue"

// Pinia
// import { useRoutesAuthStore } from '@/stores/auth/routesAuth.js'

export default {
    name: "LoginView",
    data: () => ({
        // Pinia
        // routesAuth: useRoutesAuthStore(),
        logoImg: {
            src: 'https://ik.imagekit.io/invimgs0101/IV-CODE/logos/ivcode-logo/WolfWHITE__Transparent__E7BY_DorX.png?updatedAt=1656026848491',
            lazySrc: 'https://ik.imagekit.io/invimgs0101/IV-CODE/logos/ivcode-logo/tr:q-1/WolfWHITE__Transparent__E7BY_DorX.png?updatedAt=1656026848491',
            height: 85,
            width: 85,
            alt: 'Project Logo'
        },
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
    <v-row>
        <v-col cols="12" align="center">
            <v-card width="960" height="550" class="bg-black rounded-xl mt-4">
                <v-row>
                    <v-col cols="6">
                        <v-sheet height="500" width="320" class="bg-transparent rounded-xl pt-10">
                            <ImageB :imageProp="logoImg" />
                            <p id="mavFont" class="text-white text-h4 mt-6 mb-4">Login</p>
                            <v-text-field label="Username" variant="outlined" density="compact"
                                class="w-75"></v-text-field>
                            <v-text-field label="Password" variant="outlined" density="compact"
                                class="w-75"></v-text-field>
                            <v-btn class="w-75" rounded="xs" size="small">LOGIN</v-btn>
                            <v-spacer class="py-1" />
                            <p id="tachFont">or</p>
                            <v-spacer class="py-1" />
                            <v-btn variant="tonal" class="w-75 mb-4" rounded="xs" size="small">CREATE ACCOUNT</v-btn>
                            <v-btn variant="tonal" class="w-75 mb-4" rounded="xs" size="small">GOOGLE AUTH</v-btn>
                            <v-btn variant="text" class="w-75" rounded="xs" size="small">GUEST</v-btn>
                        </v-sheet>
                    </v-col>
                    <v-col cols="6">
                        <v-card elevation="0" class="bg-transparent mt-12" flat align="center">
                            <!-- Note: next version cut video close to feet & diff animation -->
                            <video width="300" height="450" muted loop autoplay preload="true"
                                poster="https://ik.imagekit.io/invimgs0101/IV-CODE/temp/spartan=trans-02_yp-y5MjwqL.png?updatedAt=1706379952667">
                                <source
                                    src="https://ik.imagekit.io/invimgs0101/IV-CODE/temp/0001-1075_ATGvwhos7.mp4?updatedAt=1706379935311"
                                    type="video/mp4">
                            </video>
                        </v-card>
                    </v-col>
                </v-row>
            </v-card>
        </v-col>
    </v-row>
</template>

<style></style>
