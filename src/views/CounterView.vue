<template>
  <div class="app">
    <h1>計數器</h1>
    <h2>{{ count }}</h2>

    <div class="buttons">
      <button @click="increment">+1</button>
      <button @click="decrement">-1</button>
      <button @click="reset">歸零</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count += 1
    },
    decrement() {
      this.count -= 1
    },
    reset() {
      this.count = 0
    }
  }
}
</script>

<style>
.app {
  text-align: center;
  margin-top: 100px;
  font-family: sans-serif;
}
h2 {
  font-size: 48px;
  margin: 20px 0;
}
.buttons {
  display: flex;
  justify-content: center;
  gap: 10px;
}
button {
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
}
</style>
