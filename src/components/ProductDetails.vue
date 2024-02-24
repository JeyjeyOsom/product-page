<template>
  <div>
    <div class="header-container">
      <h2>Product Details</h2>
      <router-link to="/products">Back</router-link>
    </div>
    <div v-if="product" class="main-container">
      <div class="left-container">
        <h3>{{ product.name }}</h3>
        <img :src="product.image" alt="Product Image" width="200" height="200" />
      </div>
      <div class="right-container">
        <p>Price: {{ product.price }}</p>
        <p>Description: {{ product.description }}</p>
        <p>Specifications: {{ product.specifications }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: null,
      products: [
        {
          id: 1,
          name: 'Jordan 4 Retro SE',
          price: '$149.99',
          description:
            'The Air Jordan 4 debuted in 1989 by building on the Air Jordan 3 ability to seamlessly blend on-court performance with off-court fashion. Straps framed the eyelets, which provided function for ballers seeking extra support -- or resembled wings on the side of the shoe when loosely laced. Michael Jordans footwear reached new heights when the Fire Red Jordan 4 was featured in Spike Lee’s classic Do the Right Thing. New iterations including Red Cement, Bred Reimagined and Metallic Gold continue the silhouette’s legacy.',
          specifications: 'Black US9M',
          image: '../img/j4s.png'
        },
        {
          id: 2,
          name: 'Nike x Supreme AF1',
          price: '$199.99',
          description:
            'Debuting as part of the New York brand’s Spring/Summer collection, the Nike Air Force 1 Supreme Triple White delivers a minimalist take on Nike’s iconic silhouette. The low-top features an upper crafted from full-grain leather in a monochromatic white finish, accented with Supreme’s signature red box logo on the lateral heel. Additional Supreme branding hits appear on the custom sockliner and a secondary set of red laces. ',
          specifications: 'White/White-White US11M',
          image: '../img/supxaf1.png'
        },
        {
          id: 3,
          name: 'Travis x Jordan 1',
          price: '$299.99',
          image: '../img/travxj1.png',
          description:
            'Travis Scott—hip-hop artist, record-label founder and Houston native—continues to leave his imprint on the AJ1 Low, keeping it classic while staying true to his love of vintage style. Crisp white stitching pops against premium black suede, while Cactus Jack branding on the tongue and a beetle on the left heel (symbolising progress, stability, love and nature) makes it a whole look.',
          specifications: 'Phantom black US9.5M'
        }
      ]
    }
  },
  mounted() {
    const productId = this.$route.params.id

    if (!this.products) {
      console.error('Products array is not defined.')
      return
    }

    this.product = this.products.find((p) => p.id == productId)
  }
}
</script>

<style scoped>
div.header-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
div.main-container {
  display: flex;
  flex-direction: row;
  border: 1px solid #003163;
  border-radius: 4px;
}
div.left-container {
  flex: 0.6;
  display: flex;
  flex-direction: column;
  align-items: center;
}
div.right-container {
  border-left: 1px solid #003163;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 0px 24px;
}

@media (max-width: 480px) {
  div.main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #003163;
    border-radius: 4px;
  }

  div.right-container {
    border-left: 0px solid #003163;
    border-top: 1px solid #003163;
  }
}
</style>
