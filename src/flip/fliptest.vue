<template>

</template>

<script>
export default {
  name: "fliptest",
  mounted() {
    this.$nextTick(() => {
      $('.flipbook').turn({
        width: 922,
        height: 600,
        elevation: 50,
        gradients: true,
        autoCenter: true
      });
    });
  }
}
</script>
<script>import turn from "../utils/turn"</script>
<style scoped>

</style>