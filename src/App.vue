<template>
    <div>
        <header
            v-bind:style="{
                display: 'flex', 
                justifyContent: 'space-around',
                marginTop: '2%'
            }"
        >
            <h1
                v-bind:style="{fontSize: '1.5em'}"
            >
                Avec la cantina, partagez vos recettes issues de la culture populaire !
            </h1>
            <!--<h2>{{ info }}</h2>-->
            <div class="md-form active-pink active-pink-2 mb-3 mt-0">
                <input class="form-control" type="text" placeholder="Tapez votre recette..." aria-label="Search">
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
                        <button class="dropdown-item" href="#">{{ lessquarter }}</button>
                        <button class="dropdown-item" href="#">15 à 30 min.</button>
                        <button class="dropdown-item" href="#">30min. à 1h</button>
                        <button class="dropdown-item" href="#">1 à 2h</button>
                        <button class="dropdown-item" href="#">plus de 2h</button>
                    </div>
                    </div>
                </div>
            </section>
            <section>
                <div 
                    class="card"
                    v-bind:style="{width: '400px'}"
                >
                    <h5 class="card-title">Pain elfique</h5>
                    <div 
                        class="card-top"
                        v-bind:style="{display: 'flex'}"
                    >
                        <img 
                            src="http://img.over-blog-kiwi.com/0/23/26/24/20140323/ob_32565f_img-3155.jpg" 
                            class="card-img-top" 
                            style="width: 150px; height: 150px"
                            alt="lambas"
                        />
                        <div class="card-body">
                            <p class="card-text">La recette du pain elfique, bla bla bla...</p>
                            <span>{{ nbrPersonn }} {{ personn }}</span>
                            <span>30 min.</span>
                        </div>
                    </div>
                    <div 
                        class="card-body"
                        v-bind:style="{display: 'flex', justifyContent: 'space-between'}"
                    >
                        <button type="button" class="btn btn-warning">Modifier</button>
                        <img src="/assets/trashscan.svg" alt="supression" width="40px" height="40px" />
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>

<style scoped>
 
</style>
    


<script lang="ts">
    // importer Vue pour que Typescript puisse le gérer
    import {Vue, Component, Prop} from 'vue-property-decorator'
    import axios from 'axios'

    @Component({})

    export default class App extends Vue {

        @Prop() start!: number


        number: number = 0

        nbrPersonn: number = 2

        personn: string = "personnes"

        lessquarter: string = "<15min."

        info: any = null

        mounted() {
            axios
                .get('http://localhost:9000/api/recipes')
                .then(response => (this.info = response))
                .catch(error => {
                    this.info = error
                })
        }
    }

    
</script>
