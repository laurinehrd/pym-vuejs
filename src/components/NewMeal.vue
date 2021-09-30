<template>
  <div>
    <h2>Ajouter un nouveau plat</h2>
    <div class="line">
        <div class="nameMeal">
            <p>Nom du plat</p>
            <input class="bg" type="text">
        </div>
        <div class="button-wrapper">
            <p>Choisir une image</p>
            <div class="label">Importer</div>
            <input type="file" name="upload" id="upload" class="upload-box" placeholder="Upload File">
        </div>
    </div>
    <div class="section-ing">
        <p>Les ingrédients du plat</p>
        <div class="item">
            <p class="ingN">Ingrédient 1</p>
            <div class="info">
                <div class="name">
                    <p>Nom :</p>
                    
                </div>
                <div class="quantity">
                    <p>Quantité :</p>
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
export default {
  name: 'newMeal',
  methods: {
    goBack () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
  p {
    text-transform: uppercase;
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
}
.info {
    display: flex;
}
.name, .quantity {
    width: 50%;
}
.name p, .quantity p {
    text-transform: inherit;
}

  select {
    width: 20%;
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
