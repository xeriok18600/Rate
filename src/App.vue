<template lang="pug">
#app
	v-app
		v-toolbar(color="primary")
			v-toolbar-title.white--text RateTime
			v-spacer
			router-link(to='/')
				v-tooltip(bottom='')
					span 首頁
					v-btn(slot='activator',icon='',fab='',color="primary")
						v-icon fas fa-home
			router-link(to='/analysis')
				v-tooltip(bottom='')
					span 歷史匯率
					v-btn(slot='activator',icon='',fab='',color="primary")
						v-icon fas fa-chart-line
		router-view
		v-footer.pa-3
			v-spacer
			div © {{ new Date().getFullYear() }}
</template>


<style lang="scss">
@import url("https://use.fontawesome.com/releases/v5.6.3/css/all.css");
* {
  font-family: "微軟正黑體";
}
html,
body {
  height: 100%;
}
</style>