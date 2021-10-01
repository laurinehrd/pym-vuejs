<template>
  <div class="quantity">
      <input class="number" type="number" id="quantity" name="quantity" min="1" max="900">
      <select class="unity" name="unity" id="unity">
        <option v-for="u, idx in unities" :key="idx" :unity="u" :value="u.id">{{ u.name }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'Quantity',
  async mounted () {
    fetch('http://localhost:8741/api/unities').then((response) => {
      this.unities = response.json().then(json => {
        this.unities = json['hydra:member']
      })
    })
  },
  data () {
    return {
      unities: []
    }
  }
}
</script>

<style scoped>
  .quantity {
      display: flex;
  }
  .number {
      background-color: white;
      border: none;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      width: 60px;
      padding: 0.5rem;
      font-family: 'Gilroy';
      text-align: center;
  }
  .unity {
      color: #F38E69;
      font-family: 'Gilroy';
      font-weight: bold;
      background-color: white;
      border: none;
      border-left: 2px solid #FCE9E1;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      text-align: center;
  }
</style>
