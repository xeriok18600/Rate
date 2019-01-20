<template lang="pug">
#app
	v-app
		v-toolbar(color="primary")
			v-toolbar-title.white--text RateTime
		v-content
			v-card
				v-card-title 最新更新日期 {{desserts[0].time}}
					v-spacer
					v-select(:items='desserts[0].time', label='選擇日期')
				v-data-table.elevation-1(:headers='headers', :items='desserts', hide-actions, disable-initial-sort)
					template(slot='items', slot-scope='props')
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
					text: "幣別",
					align: "left",
					sortable: false,
					value: "money"
				},
				{ text: "Fat (g)", value: "fat" },
				{ text: "Carbs (g)", value: "carbs" },
				{ text: "Protein (g)", value: "protein" },
				{ text: "Iron (%)", value: "iron" }
			],
			desserts: [
				{
					value: false,
					time: "2019-01-20",
					money: "美金 (USD)",
					fat: 6.0,
					carbs: 24,
					protein: 4.0,
					iron: "1%"
				},
				{
					value: false,
					time: "2019-01-20",
					money: "港幣 (HKD)",
					fat: 9.0,
					carbs: 37,
					protein: 4.3,
					iron: "1%"
				},
				{
					value: false,
					time: "2019-01-20",
					money: "英鎊 (GBP)",
					fat: 16.0,
					carbs: 23,
					protein: 6.0,
					iron: "7%"
				},
				{
					value: false,
					time: "2019-01-20",
					money: "澳幣 (AUD)",
					fat: 3.7,
					carbs: 67,
					protein: 4.3,
					iron: "8%"
				},
				{
					value: false,
					time: "2019-01-20",
					money: "加拿大幣 (CAD)",
					fat: 16.0,
					carbs: 49,
					protein: 3.9,
					iron: "16%"
				},
				{
					value: false,
					time: "2019-01-20",
					money: "新加坡幣 (SGD)",
					fat: 0.0,
					carbs: 94,
					protein: 0.0,
					iron: "0%"
				},
				{
					value: false,
					time: "2019-01-20",
					money: "瑞士法郎 (CHF)",
					fat: 0.2,
					carbs: 98,
					protein: 0,
					iron: "2%"
				},
				{
					value: false,
					time: "2019-01-20",
					money: "日圓 (JPY)",
					fat: 3.2,
					carbs: 87,
					protein: 6.5,
					iron: "45%"
				},
				{
					value: false,
					time: "2019-01-20",
					money: "南非幣 (ZAR)",
					fat: 25.0,
					carbs: 51,
					protein: 4.9,
					iron: "22%"
				},
				{
					value: false,
					time: "2019-01-20",
					money: "瑞典幣 (SEK)",
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