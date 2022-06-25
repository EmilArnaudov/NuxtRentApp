export const state = () => ({
    users: [],
    currentUser: null,
  })
  
  export const getter = {
    getCurrentUser(state) {
      return state.currentUser
    }
  }
  
  export const mutations = {
    login(state) {
      state.currentUser = 'Kamil'
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