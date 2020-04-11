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
  @media screen and (min-width: 320px) {
    font-size: 2rem;
  }
  @media screen and (min-width: 375px) {
    font-size: 2.5rem;
  }
  @media screen and (min-width: 375px) {
    font-size: 3rem;
  }
  @media screen and (min-width: 425px) {
    font-size: 3.5rem;
  }
  @media screen and (min-width: 768px) {
    font-size: 4rem;
  }
  @media screen and (min-width: 1024px) {
    font-size: 4.5rem;
  }
  @media screen and (min-width: 1440px) {
    font-size: 5rem;
  }
  @media screen and (min-width: 2550px) {
    font-size: 5.5rem;
  }
  outline: none;
}
.container {
  align-items: center;
  display: flex;
  height: 95vh;
  justify-content: center;
  width: 100vw;
}
</style>
