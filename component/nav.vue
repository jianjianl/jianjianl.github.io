<template>
<ul class="nav">
    <li v-for="item in items">
        {{item.message}}
    </li>
</ul>
</template>

<script>
export default {
  data () {
    return {
        items: [
            {
                message: '主导航',
                path: '/main'
            },
            {
                message: '标签',
                path: '/tag'
            }
        ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>