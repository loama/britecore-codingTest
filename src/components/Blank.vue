<template>
  <div class="blank">
    <h3>{{ msg }}</h3>
  </div>
</template>

<script>
export default {
  name: 'Blank',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
</style>
