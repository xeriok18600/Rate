<template lang="pug">
v-content
	v-card
		v-card-title 最新更新日期 {{desserts[0].time}}
			v-spacer
			v-menu(:close-on-content-click='false', v-model='dateSelect', :nudge-right='40', lazy='', transition='scale-transition', offset-y='', min-width='290px')
				v-text-field(slot='activator', v-model='date', label='Picker without buttons', prepend-icon='event', readonly='')
				v-date-picker(v-model='date', @input='dateSelect = false')
		v-data-table.elevation-1(:headers='headers', :items='desserts', hide-actions, disable-initial-sort)
			template(slot='items', slot-scope='props')
				td {{ props.item.money }}
				td {{ props.item.fat }}
				td {{ props.item.carbs }}
				td {{ props.item.protein }}
				td {{ props.item.iron }}
</template>

<script>
export default {
  data() {
    return {
      date: "",
      dateSelect: false,
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
          iron: "1%",
          url:
            "https://cdn.discordapp.com/attachments/161411050300899328/536569843680280618/d113972873a9dd25.png"
        },
        {
          value: false,
          time: "2019-01-20",
          money: "港幣 (HKD)",
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%",
          url:
            "https://cdn.discordapp.com/attachments/161411050300899328/536569851582349314/2f1b7893950481b6.png"
        },
        {
          value: false,
          time: "2019-01-20",
          money: "英鎊 (GBP)",
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%",
          url:
            "https://cdn.discordapp.com/attachments/161411050300899328/536569844959543326/9dc4dc066114272c.png"
        },
        {
          value: false,
          time: "2019-01-20",
          money: "澳幣 (AUD)",
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8%",
          url:
            "https://cdn.discordapp.com/attachments/161411050300899328/536569933841301512/328ef08cc3644e94.png"
        },
        {
          value: false,
          time: "2019-01-20",
          money: "加拿大幣 (CAD)",
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: "16%",
          url:
            "https://cdn.discordapp.com/attachments/161411050300899328/536569794539814984/5d5b9d06b2bf57cf.png"
        },
        {
          value: false,
          time: "2019-01-20",
          money: "新加坡幣 (SGD)",
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: "0%",
          url:
            "https://cdn.discordapp.com/attachments/161411050300899328/536569855726583808/05049c29de2be151.png"
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
          iron: "45%",
          url:
            "https://cdn.discordapp.com/attachments/161411050300899328/536569943483875368/8b6d665722d8bf51.png"
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
        },
        {
          value: false,
          time: "2019-01-20",
          money: "紐元 (NZD)",
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%",
          url:
            "https://cdn.discordapp.com/attachments/161411050300899328/536569848407392256/19d49959ac4c0194.png"
        },
        {
          value: false,
          time: "2019-01-20",
          money: "泰幣 (THB)",
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%",
          url:
            "https://cdn.discordapp.com/attachments/161411050300899328/536569846612099102/50cb2a54cdeda15f.png"
        },
        {
          value: false,
          time: "2019-01-20",
          money: "菲國比索 (PHP)",
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%",
          url:
            "https://cdn.discordapp.com/attachments/161411050300899328/536569853276979202/abb0dba0d907af4e.png"
        },
        {
          value: false,
          time: "2019-01-20",
          money: "印尼幣 (IDR)",
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%",
          url:
            "https://cdn.discordapp.com/attachments/161411050300899328/536569841864409089/363f06ac0799fb2f.png"
        },
        {
          value: false,
          time: "2019-01-20",
          money: "歐元 (EUR)",
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%"
        },
        {
          value: false,
          time: "2019-01-20",
          money: "韓元 (KRW)",
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%",
          url:
            "https://cdn.discordapp.com/attachments/161411050300899328/536569937423106058/9e82c714b465b496.png"
        },
        {
          value: false,
          time: "2019-01-20",
          money: "越南盾 (VND)",
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%",
          url:
            "https://cdn.discordapp.com/attachments/161411050300899328/536569855042781195/e2ac7186c498fde3.png"
        },
        {
          value: false,
          time: "2019-01-20",
          money: "馬來幣 (MYR)",
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%",
          url:
            "https://cdn.discordapp.com/attachments/161411050300899328/536569850391298068/b6735ebc79031d36.png"
        },
        {
          value: false,
          time: "2019-01-20",
          money: "人民幣 (CNY)",
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%",
          url:
            "https://cdn.discordapp.com/attachments/161411050300899328/536569941130870784/c683575148fab4d9.png"
        }
      ]
    };
  }
};
</script>
