<template>
  <div class="container">
    <nuxt />
  </div>
</template>
<style lang="scss">
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    background: #141414;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  button {
    font-size: 2rem;
    outline: none;
  }
  .container {
    align-items: center;
    display: flex;
    height: 100vh;
    justify-content: center;
    width: 100vw;
  }
</style>
