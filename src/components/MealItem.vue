<template>
  <div class="meal-item">
      <div class="name-meal">
        <img
            class="img-default"
            src="../assets/pym-logo-imgdefault.png"
            alt="img default">
        <p class="name">{{ meal.name }}</p>
      </div>
      <div class="icon-action">
          <img
            src="../assets/seemore.png"
            alt="see more">
          <img
            src="../assets/pym-iconUpdate.png" 
            alt="update">
          <img
            src="../assets/pym-iconDelete.png" 
            alt="delete">
      </div>
  </div>
</template>

<script>
export default {
  name: 'MealtItem',
  props: {
    meal: Object
  }
}
</script>

<style scoped>
  .meal-item {
    background-color: #FCE9E1;
    padding: 1rem;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    margin: 1rem 0;
  }
  .name-meal {
    display: flex;
  }
  .img-default {
    margin-right: 1rem;
  }
  p {
    font-size: 18px;
  }
  .name {
    text-transform: capitalize;
  }
  .icon-action {
    display: flex;
    align-items: center;
  }
  img {
    padding: 0 0.5rem;
    cursor: pointer;
  }
</style>
