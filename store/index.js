import User from '../models/User';

export const state = () => ({
    users: [new User('Guest Guestov', 'client', 'client'), new User('Admin', 'admin', 'admin', 'admin'), new User('Manager 1', 'manager', 'manager', 'RoomManager', [1])],
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
    },

    logout(state) {
      state.currentUser = null;
    },

    addRentedDesk(state, deskId) {
      state.currentUser.rentedDesks.push(deskId)
    },

    removeRentedDesk(state, [deskId, email]) {
      let user = state.users.find(x => x.email === email);
      user.rentedDesks = user.rentedDesks.filter(x => x !== deskId);
    },

    promoteToManager(state, email) {
      let user = state.users.find(x => x.email === email);
      user.role = 'RoomManager'
    },
    addManagedRoom(state, props) {
      const [roomId, email] = props;

      let user = state.users.find(x => x.email === email);
      user.roomsManaged.push(roomId);
    },
    demoteManager(state, email) {
      let user = state.users.find(x => x.email === email);
      user.role = 'client'
    },
    removeManagedRoom(state, props) {
      const [roomId, email] = props;
      let user = state.users.find(x => x.email === email);
      user.roomsManaged = [];
    },
    banUser(state, email) {
      state.users = state.users.filter(x => x.email !== email);
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