<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      };
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
div,h1
  font: 0.2rem/0.2rem 'microsoft yahei'
  color: #0ff
  margin: 0 auto
</style>
