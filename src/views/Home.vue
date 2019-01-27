<template lang="pug">
v-content
	v-card
		v-card-title 最新更新日期 {{rateData.DateTime}}
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
</template>

<script>
export default {
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
        { text: "現今賣出", value: "CashBuy" },
        { text: "即期買入", value: "SpotSell" },
        { text: "即期賣出", value: "SpotBuy" }
      ],
      rateData: []
    };
  },
  created() {
    this.getData();
    console.log(this.date);
  },
  updated() {
    this.getData();
  },
  methods: {
    getData() {
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
          console.log(error);
        });
    }
  }
};
</script>
