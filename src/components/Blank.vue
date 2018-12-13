<template>
  <div class="blank">
    <h3>{{ msg }}</h3>
    <div class="payment" v-for="(payment, idx) in payments" :key="idx">
      {{payment.amount}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Blank',
  props: {
    msg: String
  },
  data () {
    return {
      message: ''
    }
  },
  /* mounted () {
  }, */
  mounted () {
  },
  computed: {
    payments () {
      return this.$store.state.payments
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
</style>
