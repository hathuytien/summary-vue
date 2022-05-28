<template>
    <footer id="footer">
      <div class="wrap">
        <address>© Ha Thuy Tien</address>
      </div>
    </footer>
</template>

<script>
export default {
  name: "MFooter",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#footer {
    width: 100%;
    position: relative;
    background: #246bda;
    color: #fff;
    font-weight: bold;
    padding: 20px 0;
}
</style>
