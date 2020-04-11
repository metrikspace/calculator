<template>
  <div class="calculator">
    <h1 class="display">{{ displayNumber }}</h1>
    <button
      class="add"
      data-action="addition"
      v-on:click="clicked"
    >
      +
    </button>
    <button
      class="sub"
      data-action="subtract"
      v-on:click="clicked"
    >
      -
    </button>
    <button
      class="mul"
      data-action="multiple"
      v-on:click="clicked"
    >
      *
    </button>
    <button
      class="div"
      data-action="divide"
      v-on:click="clicked"
    >
      /
    </button>
    <button
      class="nine"
      data-action="number"
      v-on:click="clicked"
    >
      9
    </button>
    <button
      class="eight"
      data-action="number"
      v-on:click="clicked"
    >
      8
    </button>
    <button
      class="seven"
      data-action="number"
      v-on:click="clicked"
    >
      7
    </button>
    <button
      class="six"
      data-action="number"
      v-on:click="clicked"
    >
      6
    </button>
    <button
      class="five"
      data-action="number"
      v-on:click="clicked"
    >
      5
    </button>
    <button
      class="four"
      data-action="number"
      v-on:click="clicked"
    >
      4
    </button>
    <button
      class="three"
      data-action="number"
      v-on:click="clicked"
    >
      3
    </button>
    <button
      class="two"
      data-action="number"
      v-on:click="clicked"
    >
      2
    </button>
    <button
      class="one"
      data-action="number"
      v-on:click="clicked"
    >
      1
    </button>
    <button
      class="zero"
      data-action="number"
      v-on:click="clicked"
    >
      0
    </button>
    <button
      class="decimal"
      data-action="decimal"
      v-on:click="clicked"
    >
      .
    </button>
    <button
      class="clear"
      data-action="clear"
      v-on:click="clicked"
    >
      AC
    </button>
    <button
      class="equal"
      data-action="equal"
      v-on:click="clicked"
    >
      =
    </button>
  </div>
</template>
<script>
  import { mapActions, mapGetters } from 'vuex';
  export default {
    computed: {
      ...mapGetters({
        displayNumber: 'GET_DISPLAYNUMBER'
      })
    },
    methods: {
      ...mapActions({
        clicked: 'CLICKED'
      })
    }
  };
</script>
<style lang="scss">
  .calculator {
    display: grid;
    grid-template-areas:
      'display display display display'
      'add     sub     mul     div'
      'seven   eight   nine    equal'
      'four    five    six     equal'
      'one     two     three   equal'
      'zero    decimal clear   equal';
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 5fr repeat(5, 4fr);
    height: 100%;
    width: 100%;
    @media screen and (min-width: 320px) {
      height: 100%;
      width: 100%;
    }
    @media screen and (min-width: 375px) {
      height: 95%;
      width: 95%;
    }
    @media screen and (min-width: 375px) {
      height: 90%;
      width: 90%;
    }
    @media screen and (min-width: 425px) {
      height: 90%;
      width: 85%;
    }
    @media screen and (min-width: 768px) {
      height: 90%;
      width: 65%;
    }
    @media screen and (min-width: 1024px) {
      height: 90%;
      width: 55%;
    }
    @media screen and (min-width: 1440px) {
      height: 90%;
      width: 45%;
    }
    @media screen and (min-width: 2550px) {
      height: 90%;
      width: 40%;
    }
  }

  .display {
    align-items: center;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    border: 1px solid white;
    color: white;
    display: flex;
    font-weight: 400;
    grid-area: display;
    justify-content: flex-end;
    padding-right: 1rem;
  }

  .add {
    grid-area: add;
  }
  .sub {
    grid-area: sub;
  }
  .mul {
    grid-area: mul;
  }
  .div {
    grid-area: div;
  }

  .nine {
    grid-area: nine;
  }
  .eight {
    grid-area: eight;
  }
  .seven {
    grid-area: seven;
  }

  .six {
    grid-area: six;
  }
  .five {
    grid-area: five;
  }
  .four {
    grid-area: four;
  }

  .three {
    grid-area: three;
  }
  .two {
    grid-area: two;
  }
  .one {
    grid-area: one;
  }

  .zero {
    grid-area: zero;
  }
  .decimal {
    grid-area: decimal;
  }
  .clear {
    grid-area: clear;
  }

  .equal {
    grid-area: equal;
  }
</style>
