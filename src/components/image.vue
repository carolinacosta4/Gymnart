<template>
    <div>
        Image:
        <img :src="image" alt="">  
    </div>
</template>

<script>
import { useImageStore } from '../stores/image';

    export default {
        data() {
            return {
                store: useImageStore()
            }
        },

        computed: {
            image() {    
                return new URL(`/src/assets/iconsNav/${this.store.getImage}`, import.meta.url).href
            }
        },
    }
</script>

<style lang="css" scoped>
    div{
        padding-left: 2em;
    }
</style>