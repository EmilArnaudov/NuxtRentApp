import Room from '../models/Room';

export const state = () => ({
    rooms: [new Room(1, 6, 'Small', 'Room 1', [1,2,3,4,5,6]), new Room(2, 12, 'Big', 'Room 2'), new Room(3, 6, 'Small', 'Room 3'), 
    new Room(4, 12, 'Big', 'Room 4'), new Room(5, 6, 'Small', 'Room 5'), new Room(6, 6, 'Small', 'Room 6')]
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