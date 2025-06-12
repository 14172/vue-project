<template>
  <div>
    <nav>
      <router-link to="/todo">代辦清單</router-link> |
      <router-link to="/counter">計數器</router-link> |
      <router-link to="/calculator">計算機</router-link>
    </nav>
    <router-view />
  </div>
</template>
