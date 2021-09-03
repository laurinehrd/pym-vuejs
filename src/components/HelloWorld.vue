<template>
  <p>{{ greeting }} {{ name }} !</p>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      greeting: 'Hello',
      name: 'Laurine'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  p {
    font-size: 2em;
    text-align: center;
  }
</style>
