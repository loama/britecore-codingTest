<template>
  <div class="blank">

    <div class="filters">
      <input class="search" type="text" v-model="filters.searchQuery" placeholder="filter...">
    </div>

    <div class="payments">
      <div class="head noHighlight">
        <div class="section id" v-on:click="selectOrderBy('id')"> Transaction ID </div>
        <div class="section name" v-on:click="selectOrderBy('name')"> Name </div>
        <div class="section description"> Description </div>
        <div class="section date" v-on:click="selectOrderBy('date')"> Date </div>
        <div class="section amount" v-on:click="selectOrderBy('amount')"> Amount </div>
      </div>

      <div class="payment" v-for="payment in paymentsSorted" :key="payment.id">

        <div class="id" v-html="payment.id"></div>

        <div class="name" v-html="payment.name"></div>

        <div class="description" v-html="payment.description"></div>

        <div class="date">
          {{payment.date.split('T')[0]}}
          {{payment.date.split('T')[1].split('-')[0]}}
        </div>

        <div class="amount" v-html="payment.amount"></div>

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
      ascending: true,
      filters: {
        searchQuery: ''
      }
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
      if (this.filters.searchQuery !== '') {
        let filteredPayments = []
        let payments = this.$store.state.payments
        let searchQuery = this.filters.searchQuery.toLowerCase()

        for (let i = 0; i < payments.length; i++) {

          let payment = {
            amount: '',
            date: '',
            description: '',
            floatAmount: '',
            id: '',
            name: ''
          }

          let includesAmount = payments[i].amount.toLowerCase().includes(searchQuery)
          let includesName = payments[i].name.toLowerCase().includes(searchQuery)
          let includesDescription = payments[i].description.toLowerCase().includes(searchQuery)
          let includesId = payments[i].id.toLowerCase().includes(searchQuery)

          payment.amount = payments[i].amount.replace(searchQuery, '<span class="highlighted">' + searchQuery + '</span>')

          payment.name = payments[i].name.toLowerCase().replace(searchQuery, '<span class="highlighted">' + searchQuery + '</span>')

          payment.description = payments[i].description.toLowerCase().replace(searchQuery, '<span class="highlighted">' + searchQuery + '</span>')

          payment.id = payments[i].id.toLowerCase().replace(searchQuery, '<span class="highlighted">' + searchQuery + '</span>')

          payment.date = payments[i].date
          payment.floatAmount = payments[i].floatAmount

          if (includesAmount || includesName || includesDescription || includesId) {
            filteredPayments.push(payment)
          }
        }
        return filteredPayments
      } else {
        return this.$store.state.payments
      }
    },
    paymentsSorted () {
      let list = this.paymentsFiltered
      switch (this.orderBy) {
        case 'name':
          if (this.ascending) {
            list.sort((a, b) => b.name.localeCompare(a.name))
          } else {
            list.sort((a, b) => a.name.localeCompare(b.name))
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
  .filters
    width: 100vw
    height: 24px
    text-align: right
    margin-top: 16px
    margin-bottom: 32px

    input.search
      outline: none
      border-radius: 2px
      box-shadow: inset 0 1px 3px #D0D0D0
      border: none
      height: 24px
      padding: 8px
      font-size: 14px

  .id
    width: 240px

  .name
    width: 144px

  .description
    width: calc(100% - 680px)
    overflow: hidden
    text-overflow: ellipsis
    white-space: nowrap

  .date
    width: 64px
    text-align: center

  .amount
    text-align: right
    width: 64px

  .payments
    margin-bottom: 40px
    border-radius: 2px
    width: 100vw
    background: #FFFFFF
    box-shadow: 0 1px 3px #D0D0D0

    .head
      position: sticky
      top: 0
      z-index: 1
      background: #FFFFFF
      border-bottom: 1px solid #D0D0D0

      .section
        vertical-align: top
        padding: 16px
        height: 20px
        display: inline-block
        cursor: pointer

    .payment
      height: 40px
      border-bottom: 1px solid #F0F0F0
      line-height: 40px

      &:nth-child(even)
        background: #F5F5F5

      div
        display: inline-block
        padding: 0 16px
        overflow: hidden
        white-space: nowrap

      .id
        text-transform: uppercase
        font-size: 12px
        text-align: center

      .name
        text-transform: capitalize
        font-size: 16px

  @media screen and (min-width: 768px)
    .filters
      width: 80vw
      margin-left: 10vw

    .payments
      width: 80vw
      margin-left: 10vw
</style>
