<template lang="pug">
div
	v-layout
		v-flex(xs12='', sm6='')
			v-card
				v-card-title
					h3.headline 現金買入
				canvas#buycash
		v-flex(xs12='', sm6='')
			v-card
				v-card-title
					h3.headline 現金賣出
				canvas#sellcash
	v-layout
		v-flex(xs12='', sm6='')
			v-card
				v-card-title
					h3.headline 即期買入
				canvas#buyspot
		v-flex(xs12='', sm6='')
			v-card
				v-card-title
					h3.headline 即期賣出
				canvas#sellspot
</template>

<script>
import Chart from "chart.js";
export default {
  data() {
    return {};
  },
  mounted() {
    var ctx = document.getElementById("buycash");
    var buycash = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "一月",
          "二月",
          "三月",
          "四月",
          "五月",
          "六月",
          "七月",
          "八月",
          "九月",
          "十月",
          "十一月",
          "十二月"
        ],
        datasets: [
          {
            borderColor: ["rgba(255,99,132,1)"],
            borderWidth: 1,
            label: "美金 (USD)",
            data: [12, 19, 3, 5, 2, 3]
          },
          {
            label: "港幣 (HKD)",
            data: [22, 29, 31, 5, 8, 3]
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
    var ctx2 = document.getElementById("sellcash");
    var sellcash = new Chart(ctx2, {
      type: "line",
      data: {
        labels: [
          "一月",
          "二月",
          "三月",
          "四月",
          "五月",
          "六月",
          "七月",
          "八月",
          "九月",
          "十月",
          "十一月",
          "十二月"
        ],
        datasets: [
          {
            borderColor: ["rgba(255,99,132,1)"],
            borderWidth: 1,
            label: "美金 (USD)",
            data: [12, 19, 3, 5, 2, 3]
          },
          {
            label: "港幣 (HKD)",
            data: [22, 29, 31, 5, 8, 3]
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
    var ctx3 = document.getElementById("buyspot");
    var buyspot = new Chart(ctx3, {
      type: "line",
      data: {
        labels: [
          "一月",
          "二月",
          "三月",
          "四月",
          "五月",
          "六月",
          "七月",
          "八月",
          "九月",
          "十月",
          "十一月",
          "十二月"
        ],
        datasets: [
          {
            borderColor: ["rgba(255,99,132,1)"],
            borderWidth: 1,
            label: "美金 (USD)",
            data: [12, 19, 3, 5, 2, 3]
          },
          {
            label: "港幣 (HKD)",
            data: [22, 29, 31, 5, 8, 3]
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
    var ctx4 = document.getElementById("sellspot");
    var sellspot = new Chart(ctx4, {
      type: "line",
      data: {
        labels: [
          "一月",
          "二月",
          "三月",
          "四月",
          "五月",
          "六月",
          "七月",
          "八月",
          "九月",
          "十月",
          "十一月",
          "十二月"
        ],
        datasets: [
          {
            borderColor: ["rgba(255,99,132,1)"],
            borderWidth: 1,
            label: "美金 (USD)",
            data: [12, 19, 3, 5, 2, 3]
          },
          {
            label: "港幣 (HKD)",
            data: [22, 29, 31, 5, 8, 3]
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  }
};
</script>

