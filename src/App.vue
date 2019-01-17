<template lang="pug">
#app
	v-app
		v-toolbar(color="primary")
			v-toolbar-title.white--text RateTime
		v-content
			v-card
				v-data-table.elevation-1(:headers='headers', :items='desserts', :search='search', hide-actions)
					template(slot='items', slot-scope='props')
						td {{ props.item.time }}
						td {{ props.item.money }}
						td {{ props.item.fat }}
						td {{ props.item.carbs }}
						td {{ props.item.protein }}
						td {{ props.item.iron }}
		v-footer.pa-3
			v-spacer
			div © {{ new Date().getFullYear() }}
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      headers: [
        {
          text: "時間",
          align: "left",
          sortable: false,
          value: "time"
        },
        { text: "幣別", value: "money" },
        { text: "Fat (g)", value: "fat" },
        { text: "Carbs (g)", value: "carbs" },
        { text: "Protein (g)", value: "protein" },
        { text: "Iron (%)", value: "iron" }
      ],
      desserts: [
        {
          value: false,
          time: "Frozen Yogurt",
          money: '美金 (USD)',
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%"
        },
        {
          value: false,
          time: "Ice cream sandwich",
          money: '港幣 (HKD)',
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%"
        },
        {
          value: false,
          time: "Eclair",
          money: '英鎊 (GBP)',
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%"
        },
        {
          value: false,
          time: "Cupcake",
          money: '澳幣 (AUD)',
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8%"
        },
        {
          value: false,
          time: "Gingerbread",
          money: '加拿大幣 (CAD)',
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: "16%"
        },
        {
          value: false,
          time: "Jelly bean",
          money: '新加坡幣 (SGD)',
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: "0%"
        },
        {
          value: false,
          time: "Lollipop",
          money: '瑞士法郎 (CHF)',
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: "2%"
        },
        {
          value: false,
          time: "Honeycomb",
          money: '日圓 (JPY)',
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: "45%"
        },
        {
          value: false,
          time: "Donut",
          money: '南非幣 (ZAR)',
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: "22%"
        },
        {
          value: false,
          time: "KitKat",
          money: '瑞典幣 (SEK)',
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
* {
  font-family: "微軟正黑體";
}
.v-toolbar {
  background-color: blue;
}
</style>