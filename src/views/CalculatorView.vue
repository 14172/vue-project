<template>
  <div class="calculator">
    <div class="display">{{ display }}</div>
    <div class="buttons">
      <button @click="clear">C</button>
      <button disabled></button>
      <button disabled></button>
      <button @click="append('/')">÷</button>

      <button @click="append('7')">7</button>
      <button @click="append('8')">8</button>
      <button @click="append('9')">9</button>
      <button @click="append('*')">×</button>

      <button @click="append('4')">4</button>
      <button @click="append('5')">5</button>
      <button @click="append('6')">6</button>
      <button @click="append('-')">−</button>

      <button @click="append('1')">1</button>
      <button @click="append('2')">2</button>
      <button @click="append('3')">3</button>
      <button @click="append('+')">＋</button>

      <button @click="append('0')">0</button>
      <button @click="append('.')">.</button>
      <button class="equal" @click="calculate">＝</button>
    </div>

    <div class="history" v-if="history.length">
      <h3>計算紀錄</h3>
      <ul>
        <li v-for="(item, index) in history" :key="index">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      display: '',
      history: [] // ✅ 紀錄用陣列
    }
  },
  methods: {
    append(value) {
      this.display += value
    },
    clear() {
      this.display = ''
    },
    calculate() {
      try {
        const result = eval(this.display)
        this.history.unshift(`${this.display} = ${result}`) // ✅ 加進紀錄
        this.display = result.toString()
      } catch {
        this.display = '錯誤'
      }
    }
  }
}
</script>

<style>
.calculator {
  max-width: 320px;
  margin: 60px auto;
  font-family: sans-serif;
  border: 2px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

.display {
  background: #222;
  color: #0f0;
  font-size: 2rem;
  padding: 20px;
  text-align: right;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

button {
  font-size: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  background: #f2f2f2;
  cursor: pointer;
}
button:hover {
  background: #e0e0e0;
}
.equal {
  grid-column: span 2;
  background: #007bff;
  color: white;
}

.history {
  background: #fafafa;
  padding: 15px;
  border-top: 1px solid #ddd;
}
.history h3 {
  margin-top: 0;
}
.history ul {
  list-style: none;
  padding-left: 0;
  margin: 0;
}
.history li {
  font-size: 14px;
  padding: 4px 0;
  border-bottom: 1px dotted #ccc;
}
</style>
