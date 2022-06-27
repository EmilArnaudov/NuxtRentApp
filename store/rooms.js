import Room from '../models/Room';

export const state = () => ({
    rooms: [new Room(6, 'Small')]
  })
  
  export const getter = {
    getRooms(state) {
      return state.rooms
    }
  }
  
  export const mutations = {

  }
  
  export const actions = {
  }