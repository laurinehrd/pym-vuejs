<template>
  <div>
    <h2>Ajouter un nouveau plat</h2>
    <div class="line">
        <div class="nameMeal">
            <p class="title">Nom du plat</p>
            <input class="bg" type="text">
        </div>
        <div class="button-wrapper">
            <p class="title">Choisir une image</p>
            <div class="label">Importer</div>
            <input type="file" name="upload" id="upload" class="upload-box" placeholder="Upload File">
        </div>
    </div>
    <div class="section-ing">
        <p class="title">Les ingrédients du plat</p>
        <div class="item">
            <p class="ingN">Ingrédient 1</p>
            <div class="info">
                <div class="name">
                    <p>Nom :</p>
                    <Dropdown
                        :options="ingredients"
                        @selected="i=>currentIngredient=i"
                        :disabled="false"
                        name="ingredients"
                        :maxItem="10"
                        placeholder="Nom de l'ingrédient">
                    </Dropdown>
                    <div class="name-category">
                      <p class="category">Catégorie : </p>
                      <p>{{ currentIngredient.category? currentIngredient.category.name : ''}}</p>
                    </div>
                </div>
                <div class="quantity">
                    <p>Quantité :</p>
                    <quantity v-model="quantity"></quantity>
                </div>
            </div>
        </div>
    </div>
    <div class="btn">
        <button class="cancel" @click="goBack()">Annuler</button>
        <button class="add">Ajouter</button>
    </div>
  </div>
</template>

<script>
import Dropdown from 'vue-simple-search-dropdown'
import Quantity from './Quantity.vue'

export default {
  name: 'newMeal',
  components: { Dropdown, Quantity },
  async mounted () {
    fetch('http://localhost:8741/api/ingredients').then((response) => {
      this.ingredients = response.json().then(json => {
        this.ingredients = json['hydra:member']
      })
    })
  },
  data () {
    return {
      ingredients: [],
      currentIngredient: {},
      quantity: {number: 20, unit: 3}
    }
  },
  methods: {
    goBack () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
  .title {
    text-transform: uppercase;
    font-size: 18px;
  }
  h2 {
    margin-bottom: 3rem;
    font-weight: lighter;
    font-size: 28px;
  }
  .line {
      display: flex;
  }
  .nameMeal {
      width: 60%;
  }
  .chooseImage {
      width: 40%;
  }
  input.bg {
    background-color: #FCE9E1;
    border: none;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    font-family: 'Gilroy';
    font-size: 16px;
    width: 80%;
    margin-bottom: 2rem;
  }
.button-wrapper {
    position: relative;
}
.button-wrapper div.label {
    background: #FCE9E1;
    cursor: pointer;
    color: #F38E69;
    padding: 0.5rem 3rem;
    border-radius: 5px;
    width: fit-content;
    position: relative;
    z-index: 0;
    display: inline-block;
}
#upload {
    opacity: 0;
    cursor: pointer;
    display: inline-block;
    position: absolute;
    z-index: 1;
    top: 32px;
    left: 0;
    height: 55px;
}

.section-ing {
    width: 100%;
}
.item {
    background: #FCE9E1;
    padding: 1rem;
    border-radius: 5px;
}
.ingN {
    color: #F38E69;
    text-decoration: underline;
    font-weight: bold;
    margin-top: 0;
    font-size: 18px;
}
.info {
    display: flex;
}
.name, .quantity {
    width: 50%;
}

.name-category {
    display: flex;
  }
  .category {
    text-transform: uppercase!important;
    padding-right: 0.3rem;
  }

  .btn {
    text-align: center;
    margin-top: 2rem;
  }
  .btn button.add {
    background-color: #F38E69;
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    font-family: 'Gilroy';
    border: none;
    border-radius: 5px;
    padding: 0.5rem 3rem;
    cursor: pointer;
  }
  .btn button.cancel {
    background-color: white;
    color: black;
    text-transform: uppercase;
    font-weight: bold;
    font-family: 'Gilroy';
    border: 1px solid transparent;
    border-radius: 5px;
    padding: 0.5rem 3rem;
    cursor: pointer;
  }
  .btn button.cancel:hover {
    border: 1px solid black;
    transition: ease-in-out all 0.2s;
  }
</style>
