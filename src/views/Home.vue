<template lang="pug">
#home
  v-content
    v-card
      v-card-title 目前資料日期 {{rateData.DateTime}}
        v-spacer
        v-menu(:close-on-content-click='false', v-model='dateSelect', :nudge-right='40', lazy='', transition='scale-transition', offset-y='', min-width='290px')
          v-text-field(slot='activator', v-model='date', label='Picker without buttons', prepend-icon='event', readonly='')
          v-date-picker(v-model='date', @input='dateSelect = false')
      v-data-table.elevation-1(:headers='headers', :items='rateData.ExchangeRate', hide-actions='', disable-initial-sort='')
        template(slot='items', slot-scope='props')
          td {{ props.item.Currency }}
          td {{ props.item.CashSell }}
          td {{ props.item.CashBuy }}
          td {{ props.item.SpotSell }}
          td {{ props.item.SpotBuy }}
  v-app#inspire
    .text-xs-center
      v-dialog(v-model='dialog', width='500')
        v-card
          v-card-title.headline.grey.lighten-2(primary-title='')
            | ERROR
          v-card-text
            | 選取的日期無匯率資料，請重新選擇
          v-divider
          v-card-actions
            v-spacer
            v-btn(color='primary', flat='', @click='dialog = false')
              | I accept
</template>

<script>
export default {
  el: '#home',
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
      dateSelect: false,
      headers: [
        {
          text: "幣別",
          align: "left",
          sortable: false,
          value: "Currency"
        },
        { text: "現金買入", value: "CashSell" },
        { text: "現金賣出", value: "CashBuy" },
        { text: "即期買入", value: "SpotSell" },
        { text: "即期賣出", value: "SpotBuy" }
      ],
      rateData: [],
      dialog: false
    };
  },
  created() {
    this.getData();
    console.log(this.date);
  },
  watch: {
    date: function(date) {
      this.getData(date)
    }
  },
  methods: {
    getData(date) {
      this.axios
        .get(
          "https://limitless-sierra-15237.herokuapp.com/QueryDateTime/" +
            this.date +
            ""
        )
        .then(res => {
          this.rateData = res.data;
        })
        .catch(error => {   
          this.dialog = true
          console.log(error);
        });
    }
  }
};
</script>
