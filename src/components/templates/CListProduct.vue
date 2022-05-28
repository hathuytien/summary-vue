<template>
    <div class="list" id="listproduct">
			  <CProduct class="item wow mb10" v-for="product in listproduct" v-bind:key="product.id" v-bind:product="product"/>
		</div>
</template>

<script>
import CProduct from './CProduct.vue';
export default {
  name: "CListProduct",
  props: {
    listproduct: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      
    };
  },
  components:{
    CProduct
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
