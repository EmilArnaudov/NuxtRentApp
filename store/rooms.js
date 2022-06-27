import Room from '../models/Room';

export const state = () => ({
    rooms: [new Room(6, 'Small', 'Room 1'), new Room(12, 'Big', 'Room 2'), new Room(6, 'Small', 'Room 3'), new Room(12, 'Big', 'Room 4'), new Room(6, 'Small', 'Room 5'), new Room(6, 'Small', 'Room 6')]
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