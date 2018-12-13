<template>
  <div class="blank">
    <div class="payments">

      <div class="head">
        <div class="section"> Transaction ID </div>
        <div class="section"> person </div>
        <div class="section"> date </div>
        <div class="section"> amount </div>
      </div>

      <div class="payment" v-for="(payment, idx) in payments" :key="payment.id">
        {{payment.id}}
        {{payment.name}}
        {{payment.description}}
        {{payment.date}}
        {{payment.amount}}
      </div>

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
  .payments
    margin-top: 100px
    margin-bottom: 40px
    border-radius: 2px
    width: 100vw
    background: #FFFFFF
    box-shadow: 0 1px 3px #D0D0D0

    .head
      border-bottom: 1px solid #D0D0D0

      .section
        padding: 16px
        height: 20px
        display: inline-block
        width: calc(25% - 32px)

    .payment
      height: 40px
      padding: 8px
      border-bottom: 1px solid #E0E0E0

  @media screen and (min-width: 768px)
    .payments
      width: 80vw
      margin-left: 10vw
</style>
