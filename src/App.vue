<template>
    <div>Bienvennue dans GeeCoock<br>Je me mets à compter, {{ start + number }}</div>
</template>
    


<script lang="ts">
    // importer Vue pour que Typescript puisse le gérer
    import {Vue, Component, Prop} from 'vue-property-decorator'

    @Component({})

    export default class App extends Vue {

        @Prop() start!: number

        number: number = 0

        mounted() {
            window.setInterval(() => {
                this.number++
            }, 1000)
        }
    }
</script>
