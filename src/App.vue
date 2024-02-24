<template>
  <router-view />
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #003163;
  margin-top: 60px;
  border: 1px solid #003163;
  border-radius: 4px;
  padding: 12px 30px;
  box-shadow: 10px 10px #003163;
  width: 900px;
}
@media (max-width: 990px) {
  body {
    display: flex;
    justify-content: center;
    place-items: center;
    padding: 12px;
  }
}
</style>
