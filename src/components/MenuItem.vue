<template>
  <div class="menu-item">
      <div class="icon">
          <img :src="`/static/assets/icon-${nameIcon}.png`">
      </div>
      <p>{{ menu }}</p>
  </div>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    menu: String,
    nameIcon: String
  }
}
</script>

<style scoped>
.menu-item {
    display: flex;
    align-items: center;
    background-color: transparent;
    border-radius: 10px;
    padding-left: 1rem;
    cursor: pointer;
    margin-bottom: 1rem;
}
img {
    margin-right: 0.5rem;
}
p {
    text-transform: uppercase;
    font-size: 18px;
}
.menu-item:hover {
    background-color: #F38E69;
    transition: 0.2s ease-in;
}
.menu-item:hover p {
    color: white;
    font-weight: bold;
}
</style>
