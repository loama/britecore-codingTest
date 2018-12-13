<template>
  <div class="blank">
    <div class="payments">

      <div class="head noHighlight">
        <div class="section" v-on:click="selectOrderBy('id')"> Transaction ID </div>
        <div class="section" v-on:click="selectOrderBy('name')"> name </div>
        <div class="section" v-on:click="selectOrderBy('date')"> date </div>
        <div class="section" v-on:click="selectOrderBy('amount')"> amount </div>
      </div>

      <div class="payment" v-for="payment in paymentsSorted" :key="payment.id">

        <div class="id" v-html="payment.id"></div>

        <div class="name" v-html="payment.name"></div>

        <div class="description" v-html="payment.description"></div>

        <div class="date">
          {{payment.date.split('T')[0]}}
          {{payment.date.split('T')[1].split('-')[0]}}
        </div>

        <div class="amount"> {{payment.amount}} </div>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Payments',
  props: {
    msg: String
  },
  data () {
    return {
      orderBy: 'date',
      ascending: true
    }
  },
  methods: {
    selectOrderBy: function (by) {
      if (by === this.orderBy) {
        this.ascending = !this.ascending
      } else {
        this.orderBy = by
        this.ascending = false
      }
    }
  },
  computed: {
    paymentsFiltered () {
      return this.$store.state.payments
    },
    paymentsSorted () {
      let list = this.paymentsFiltered
      switch (this.orderBy) {
        case 'name':
          if (this.ascending) {
            list.sort((a, b) => (a.name > b.name) - (a.name < b.name))
          } else {
            list.sort((a, b) => (a.name > b.name) + (a.name < b.name))
          }
          break

        case 'date':
          if (this.ascending) {
            list.sort((a, b) => (a.date > b.date))
          } else {
            list.sort((a, b) => (a.date < b.date))
          }
          break

        case 'amount':
          if (this.ascending) {
            list.sort((a, b) => (a.floatAmount) - (b.floatAmount))
          } else {
            list.sort((a, b) => (b.floatAmount) - (a.floatAmount))
          }
          break
      }
      return list
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
        cursor: pointer

    .payment
      height: 40px
      padding: 8px
      border-bottom: 1px solid #F0F0F0
      line-height: 56px

      div
        display: inline-block
        width: 20%
        overflow: hidden
        white-space: nowrap

      .id
        font-size: 12px

      .person
        font-size: 16px

  @media screen and (min-width: 768px)
    .payments
      width: 80vw
      margin-left: 10vw
</style>
