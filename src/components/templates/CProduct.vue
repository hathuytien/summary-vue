<template>
    <div class="item wow mb10">
        <p class="product wow fadeInRight">{{product.restaurant}}</p>
				<p class="link-product wow fadeInRight"><a v-bind:href="product.link_product" target="_blank">{{product.link_product}}</a></p>
		</div>
</template>

<script>
export default {
  name: "CProduct",
  props: {
    product: {
      type: Object,
      default: () => {
        return null
      }
    }
  },
  data() {
    return {
      
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
