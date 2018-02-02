<template>
  <div class="hello">
    <h6>在这里写下你想写的话吧~</h6>
    <textarea col="2"> </textarea>
    <h6>你写了就发现，写了也没用，凑合玩吧</h6>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello World!'
    }
  },
  props: {
    id: {
      type: String
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.hello {
  text-align: center;
}

h6 {
  color: #42b983;
}

</style>