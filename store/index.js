export const actions = {
  CLICKED: ({ commit }) => {
    commit('clicked');
  }
};
export const getters = {
  GET_DISPLAYNUMBER: (state) => state.displayNumber
};
export const mutations = {
  clicked: (state) => {
    const target = event.target;
    const action = target.dataset.action;
    const content = target.textContent.trim();
    switch (action) {
      case 'addition':
        {
          state.valueOne = parseFloat(state.displayNumber);
          state.displayNumber = '';
          state.operator = '+';
        }
        break;
      case 'subtract':
        {
          state.valueOne = parseFloat(state.displayNumber);
          state.displayNumber = '';
          state.operator = '-';
        }
        break;
      case 'multiple':
        {
          state.valueOne = parseFloat(state.displayNumber);
          state.displayNumber = '';
          state.operator = '*';
        }
        break;
      case 'divide':
        {
          state.valueOne = parseFloat(state.displayNumber);
          state.displayNumber = '';
          state.operator = '/';
        }
        break;
      case 'number':
        {
          if (state.displayNumber == '')
            state.displayNumber = content;
          else state.displayNumber += content;
        }
        break;
      case 'decimal':
        {
          state.displayNumber += '.';
        }
        break;
      case 'clear':
        {
          state.displayNumber = '';
        }
        break;
      case 'equal':
        {
          switch (state.operator) {
            case '+':
              {
                state.displayNumber =
                  state.valueOne +
                  parseFloat(state.displayNumber);
              }
              break;
            case '-':
              {
                state.displayNumber =
                  state.valueOne -
                  parseFloat(state.displayNumber);
              }
              break;
            case '*':
              {
                state.displayNumber =
                  state.valueOne *
                  parseFloat(state.displayNumber);
              }
              break;
            case '/':
              {
                state.displayNumber =
                  state.valueOne /
                  parseFloat(state.displayNumber);
              }
              break;
          }
        }
        break;
    }
  }
};
export const state = () => ({
  displayNumber: '',
  operator: '',
  valueOne: ''
});
