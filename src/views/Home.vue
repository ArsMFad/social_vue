<template>
	<v-app>
		
	</v-app>
</template>

<script>
export default {
  name: 'Home',
  methods:{ 
	init(){
		if(this.$store.state.userId == '-1')
			this.$router.push('/login');
	}
  },
  mounted(){
	this.init()
  },
  watch:{
	$route(){
		this.init();
	}
  }
}
</script>
