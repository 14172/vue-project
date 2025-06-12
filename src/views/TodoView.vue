<template>
  <div class="app">
    <h1>前端練習課程</h1>

    <div class="input-area">
      <input v-model="newTodo" placeholder="輸入代辦事項" />
      <select v-model="newCategory">
        <option value="工作">工作</option>
        <option value="學習">學習</option>
        <option value="生活">生活</option>

      </select>
      <button @click="addTodo">新增</button>
    </div>

    <ul>
  <li
  v-for="(item, index) in todos"
  :key="index"
  @click="toggleDone(index)"
  :class="{ done: item.done }"
>
  <span class="todo-text">{{ item.text }}</span>
  <span class="tag" :class="item.category">{{ item.label }}</span>
  <button @click.stop="removeTodo(index)">刪除</button>
  </li>
    </ul>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      newTodo: '',
      newCategory: '工作',
      todos: []
    }
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim()) {
        this.todos.push({
          text: this.newTodo,
          done: false,
          category: this.newCategory,      // class 用
          label: this.newCategory          // 顯示用
        })
          this.newTodo = ''
          this.newCategory = '工作'
          this.saveTodos()
      }
    },
    removeTodo(index) {
      this.todos.splice(index, 1)
      this.saveTodos()
    },
    toggleDone(index) {
      this.todos[index].done = !this.todos[index].done
      this.saveTodos()
    },
    saveTodos() {
      localStorage.setItem('todos', JSON.stringify(this.todos))
    },
    loadTodos() {
      const saved = localStorage.getItem('todos')
      if (saved) {
        this.todos = JSON.parse(saved).map(item => ({
        ...item,
        category: item.category || 'uncategorized',        // ⚠️ CSS用
        label: item.label || (item.category ? item.category : '未分類') // 顯示用
        }))
      }
    }
  },
  mounted() {
    this.loadTodos()
  }
}
</script>

<style>
.app {
  max-width: 400px;
  margin: 50px auto;
  font-family: sans-serif;
}

.工作 {
  background-color: #ff9f43;
}
.學習 {
  background-color: #00cfe8;
}
.生活 {
  background-color: #28c76f;
}

.未分類 {
  background-color: #b6b9b9;
}

h1 {
  text-align: center;
}

.input-area {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}

.input-area input {
  flex: 1;
  padding: 6px;
}

.input-area select {
  padding: 6px;
}

.input-area button {
  padding: 6px 12px;
  font-size: 12px;
}

ul {
  margin-top: 20px;
  list-style: none;
  padding: 0;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
  border-bottom: 1px solid #ddd;
}

.todo-text {
  flex: 1;
}

.done .todo-text {
  text-decoration: line-through;
  color: gray;
}

.tag {
  font-size: 10px;
  padding: 2px 6px;
  color: #fff;
  border-radius: 4px;
  margin-right: 10px;
}

button {
  padding: 3px 5px;
  font-size: 10px;
  cursor: pointer;
}
</style>
