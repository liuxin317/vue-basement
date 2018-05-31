<template>
  <section class="box">
    <h1>{{ title }}</h1>
    <p>当前数量：{{ count }}</p>
    <button @click="changeCount">修改count</button>
    <button @click="asyncChangeCount">异步修改count</button>
  </section>
</template>

<script>
  import { mapState, mapMutations, mapActions } from 'vuex'

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
      ...mapActions([ // 映射action
        'asyncChangeState'
      ]),
      changeCount () {
        this.changeState({
          count: this.count + 20
        })
      },
      asyncChangeCount () {
        this.asyncChangeState({
          name: 'changeState',
          payload: { count: this.count + 20 }
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
