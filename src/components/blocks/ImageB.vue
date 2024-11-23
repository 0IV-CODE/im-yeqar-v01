<script lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
// import { useTheme } from 'vuetify'

// Components
// import AddMember from "@/components/blocks/AddMember.vue"

// Pinia
// import { useLocalCacheStore } from '@/stores/misc/localCache'
import { useNotifyStStore } from '@/stores/notify/notifySt.js'


export default {
    name: "ImageB",
    data: () => ({
        // Pinia
        // localCache: useLocalCacheStore(),
        value: 0,
        tempImage: {
            src: '',
            lazySrc: '',
            height: 50,
            width: 50,
            alt: 'Project Logo'
        },
        notifySt: useNotifyStStore(),

    }),
    props: {
        imageProp: {
            type: Object,
            default: null
        },
    },
    components: {
    },
    computed: {
    },
    mounted() {
        this.initImage()

    },
    methods: {
        initImage() {
            this.tempImage = this.imageProp
            this.notifySt.notificationsCtrl('infoA', 'ImageA', 'handleImageError', 'Welcome Isaac', 'test', '')
        },
        handleImageError(event) {
            // @error="handleImageError"
        },
    },
}
</script>

<template>
    <v-img :width="tempImage.width" :height="tempImage.height" class="rounded-lg" :src="tempImage.src"
        :lazy-src="tempImage.lazySrc" :alt="tempImage.alt">
        <template #placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular :rotate="360" :size="50" :width="5" :value="value" color="red">
                    {{ value }}
                </v-progress-circular>
            </v-row>
        </template>
    </v-img>
</template>

<style></style>
