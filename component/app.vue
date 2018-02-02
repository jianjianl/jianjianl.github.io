<template>
  <div>
    <h3>闲来无聊，写了一个超级脑残的测色盲demo</h3>
    <div class = "container" :style="{width: width}">
      <div class="item" v-for="item in items" :class="{ diff: isDiff == item}" @click="uaction">
      </div>
    </div>
    <remark></remark>
  </div>
</template>

<script>
import remark from 'component/remark';
export default {
  data () {
    return {
      isDiff: '',
      itemsList: [16, 25, 36, 49, 64],
      level: 0,
      items: 16,
      width: '264px'
    }
  },

  created() {
    this.isDiff = Math.floor(Math.random() * 16);
  },

  methods: {
    uaction(e) {
      if (e.target.className.indexOf('diff') > -1) {
        this.reload();
      }
    },

    reload() {
      this.level = this.level < 4 ? ++this.level : this.level;
      this.items = this.itemsList[this.level];
      this.isDiff = Math.floor(Math.random() * this.items);
      this.width = 66 * (this.level + 4) + 'px';
    }
  },

  components: {
    remark
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.container {
  overflow: hidden;
  margin: 0 auto;
}

h3 {  
  text-align: center;
}

.item {
  float: left;
  width: 64px;
  height: 64px;
  border: 1px solid #42b983;
  background: #e0e0ee;
  &.diff {
    background: #e0e0e0;
  }
}

</style>