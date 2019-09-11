<template>
    <div>
        <header>
            <h1>Avec la cantina, partagez vos recettes issues de la culture populaire !</h1>
            <div class="md-form active-pink active-pink-2 mb-3 mt-0">
                <input class="form-control" type="text" placeholder="Search" aria-label="Search">
            </div>
        </header>
        <main>
            <section>
                <h2>Filtrer vos recettes : </h2>
                <div class="btn-group">
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Difficulté
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <button class="dropdown-item" href="#">Padawan</button>
                            <button class="dropdown-item" href="#">Jedi</button>
                            <button class="dropdown-item" href="#">Maître</button>
                        </div>
                    </div>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Nombre de personnes
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <button class="dropdown-item" href="#">1-2</button>
                            <button class="dropdown-item" href="#">3-4</button>
                            <button class="dropdown-item" href="#">5-6</button>
                            <button class="dropdown-item" href="#">7+</button>
                        </div>
                    </div>
                    <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Temps de préparation
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <button class="dropdown-item" href="#">gg</button>
                        <button class="dropdown-item" href="#">Another action</button>
                        <button class="dropdown-item" href="#">Something else here</button>
                    </div>
                    </div>
                </div>
            </section>
            <section></section>
        </main>
    </div>
</template>

<style>

</style>
    


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
