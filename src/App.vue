<template>
    <div>Bienvennue dans GeeCoock</div>
</template>

<script lang="ts">
    // importer Vue pour que Typescript puisse le gérer
    import Vue from 'vue'

    export default {
        data () {
            return {
                number: 0
            }
        },
        mounted() {
            window.setInterval(() => {
                this.number++;
            }, 1000)
        }
    }
</script>