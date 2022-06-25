import User from '../models/User';

export const state = () => ({
    users: [new User('Emil', 'mail.bg', '123')],
    currentUser: null,
    error: ''
  })
  
  export const getter = {
    getCurrentUser(state) {
      return state.currentUser
    }
  }
  
  export const mutations = {
    login(state, params) {

      const user = state.users.find(x => x.email === params[0]);

      if (user && user.password === params[1]) {
        state.currentUser = user;
      } else {
        state.error = 'Incorrect username or password.'
      }
    },

    register(state, params) {
      const [fullName, email, password] = params;

      if (fullName && email && password) {
        const newUser = new User(fullName, email, password);
        state.currentUser = newUser;
      } else {
        state.error = 'Please fill out all fields.'
      }

    }
  }
  
  export const actions = {
    async fetchCounter(state) {
      // make request
      const res = { data: 10 };
      state.counter = res.data;
      return res.data;
    }
  }