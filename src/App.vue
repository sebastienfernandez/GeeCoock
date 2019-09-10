<template>
    <div>Bienvennue dans GeeCoock<br>
        Je me mets à compter, {{ number }}
    </div>
</template>

<script lang="ts">
    // importer Vue pour que Typescript puisse le gérer
    import {Vue, Component} from 'vue-property-decorator'

    @Component({})

    export default class App extends Vue {
        
        number: number = 0
            
        mounted() {
            window.setInterval(() => {
                this.number++
            }, 1000)
        }
    }
</script>