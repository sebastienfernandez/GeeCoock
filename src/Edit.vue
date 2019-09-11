<template>
    <div>
        <h1>Editer la recette</h1>
        <form>
            <div class="form-group">
                <label for="name">Nom</label>
                <input type="name" class="form-control" id="name" placeholder="valeur par defaut">
            </div>
            <div class="form-group">
                <label for="description">Description</label>
                <textarea class="form-control" id="description" rows="3"></textarea>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="padawan" id="padawan" value="option1">
                <label class="form-check-label" for="padawan">Padawan</label>
                </div>
                <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="jedi" id="jedi" value="option2">
                <label class="form-check-label" for="jedi">Jedi</label>
                </div>
                <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="master" id="master" value="option3">
                <label class="form-check-label" for="master">Maître</label>
            </div>
            <div class="wrapper">
                <input type="range" min="0" max="300" step="1" v-model="time"> 
                <input type="number" v-model="time"/>
            </div>
            <div class="wrapper">
                <label>Pour combien de personnes ?</label> 
                <input type="number" v-model="people"/>
            </div>
            <div>
                <h2>Liste des ingrédients</h2>
                <ul>
                    <li>
                        <input type="number"/>
                        <select name="category" id="category">
                            <optgroup label="Poids">
                                <option value="kg">Kg</option>
                                <option value="g">g</option>
                            </optgroup>
                            <optgroup label="Volume">
                                <option value="l">L</option>
                                <option value="ml">mL</option>
                            </optgroup>
                            <optgroup label="Unités">
                                <option value="pincee">pincée(s)</option>
                                <option value="poignee">poignée(s)</option>
                                <option value="unite">unité(s)</option>
                            </optgroup>
                        </select>
                        <input type="name">
                        <button type="button" class="btn btn-danger">Annuler</button>
                    </li>
                </ul>
                <button type="button" class="btn btn-secondary">+ Ajouter</button>
            </div>
            <div>
                <h2>Etapes de la recette : </h2>
                <ul>
                    <li>
                        <textarea name="" id="" rows="10" cols="50">

                        </textarea>
                    </li>
                </ul>
                <button type="button" class="btn btn-secondary">Ajouter une étape</button>
            </div>
            <div>
                <img src="" alt="" class="img-thumbnail">
                <div>
                    <button type="button" class="btn btn-primary">Recommencer</button>
                    <button type="button" class="btn btn-success">Valider</button>
                </div>
            </div>

        </form>
    </div>
</template>

<style>

</style>

<script lang="ts">

    import {Vue, Component, Prop} from 'vue-property-decorator'

    @Component({})

    export default class Edit extends Vue {

        time: number = 30

        people: number = 2

    }

</script>