import Room from '../models/Room';

export const state = () => ({
    rooms: [new Room(1, 'Small', 'Room 1', [1,2,3,4], 'manager'), new Room(2, 'Big', 'Room 2', [5,6,7,8, 9, 10]),
     new Room(3, 'Small', 'Room 3', [11,12,13]), new Room(4, 'Big', 'Room 4', [14, 15, 16, 17, 18]), 
     new Room(5, 'Small', 'Room 5', [19,20]), new Room(6, 'Small', 'Room 6')]
  })
  
  export const getter = {
    getRooms(state) {
      return state.rooms
    }
  }
  
  export const mutations = {
    rentDesk(state, [roomId, deskId]) {
      let room = state.rooms.find(x => x._id === roomId);
      room.desksTaken += 1
    },
    freeDesk(state, [roomId, deskId]) {
      let room = state.rooms.find(x => x._id === roomId);
      room.desksTaken -= 1
    },
    deleteDesk(state, [roomId, deskId]) {
      let room = state.rooms.find(x => x._id === roomId);
      console.log(room.deskIds);
      room.deskIds = room.deskIds.filter(x => x !== deskId)
      console.log(room.deskIds);
    },
    changeRoomManager(state, props) {
      const [roomId, manager] = props;
      let room = state.rooms.find(x => x._id === roomId);
      room.manager = manager;
    },
    demoteRoomManager(state, roomId) {
      let room = state.rooms.find(x => x._id === roomId);
      room.manager = 'admin';
    },
    addNewDesk(state, [roomId, deskId]) {
      let room = state.rooms.find(x => x._id === roomId);
      room.deskIds.push(deskId);
    },

  }
  
  export const actions = {
  }