<template>
  <div>
    <h2>Product List</h2>
    <ul class="product-list">
      <li v-for="product in products" :key="product.id">
        <img :src="product.image" alt="Product Image" width="200" height="200" />
        {{ product.name }} - {{ product.price }}
        <router-link :to="'/products/' + product.id">View Details</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        { id: 1, name: 'Jordan 4 Retro SE', price: '$149.99', image: './img/j4s.png' },
        {
          id: 2,
          name: 'Nike x Supreme AF1',
          price: '$199.99',
          image: './img/supxaf1.png'
        },
        {
          id: 3,
          name: 'Travis x Jordan 1',
          price: '$299.99',
          image: './img/travxj1.png'
        }
      ]
    }
  }
}
</script>

<style>
ul.product-list {
  align-items: center;
  display: flex;
  gap: 30px;
  justify-content: center;
  padding: 0px;
  flex-wrap: wrap;
}
li:hover {
  background-color: #acc0d8;
}
li {
  border: 1px solid #003163;
  border-radius: 4px;
  list-style: none;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 12px;
  transition: background-color 0.3s ease;
}
</style>
