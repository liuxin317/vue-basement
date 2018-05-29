<template>
  <section class="box">
    <h1>{{ title }}</h1>
    <p>当前数量：{{ count }}</p>
    <button @click="changeCount">修改count</button>
  </section>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'

  export default {
    name: 'store',
    computed: {
      ...mapState([ // 映射state
        'count'
      ])
    },
    data () {
      return {
        title: 'Store'
      }
    },
    methods: {
      ...mapMutations([ // 映射mutation
        'changeState'
      ]),
      changeCount () {
        this.changeState({
          count: this.count + 20
        })
      }
    }
  }
</script>

<style lang="scss" type="text/css">
.box {
  padding-bottom: 20px;
  border: #ccc solid 1px;

  button {
    width: 120px;
    height: 40px;
    border: none;
    background-color: green;
    color: white;
    border-radius: 10px;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	  outline: none;
  }
}
</style>
