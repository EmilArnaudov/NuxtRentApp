import Desk from '../models/Desk';
import { getDeskFreeDate } from '../helpers/formatDate'; 

export const state = () => ({
    desks: [new Desk(1, 100, 'Small', 'Next to window', 1), new Desk(2, 80, 'Small', 'Center', 1),
    new Desk(3, 80, 'Small', 'Next to door', 1), new Desk(4, 100, 'Small', 'Next to window', 1),
    new Desk(5, 80, 'Small', 'Next to window', 2), new Desk(6, 85, 'Small', 'Next to window', 2),
    new Desk(7, 90, 'Small', 'Next to window', 2), new Desk(8, 85, 'Small', 'Next to window', 2),
    new Desk(9, 80, 'Small', 'Next to door', 2), new Desk(10, 80, 'Small', 'Next to door', 2),
    new Desk(11, 110, 'Big', 'Next to window', 3), new Desk(12, 110, 'Big', 'Next to window', 3),
    new Desk(13, 105, 'Big', 'Center', 3), new Desk(14, 60, 'Small', 'Next to window', 4),
    new Desk(15, 105, 'Big', 'Center', 4), new Desk(16, 60, 'Small', 'Next to window', 4),
    new Desk(17, 70, 'Small', 'Next to door', 4), new Desk(18, 60, 'Small', 'Next to window', 4),
    new Desk(19, 70, 'Small', 'Next to door', 5), new Desk(20, 60, 'Small', 'Next to window', 5)],
    
    selectedDeskToRent: null,
    latestDeskId: 20
  })
  
  export const getter = {

  }
  
  export const mutations = {
    rentDesk(state, params) {
      const [id, email, weeks] = params;
     let desk =  state.desks.find(x => x._id === id);
     desk.timePaidFor = weeks;
     desk.rentedBy = email;
     desk.isTaken = true;
     desk.freeOn = getDeskFreeDate(weeks);
    },
    selectDeskToRent(state, desk) {
      state.selectedDeskToRent = desk;
    },
    resetSelectedDesk(state) {
      state.selectDeskToRent = null;
    },
    freeDesk(state, deskId) {
      let desk =  state.desks.find(x => x._id === deskId);
      desk.timePaidFor = null;
      desk.rentedBy = null;
      desk.isTaken = false;
      desk.freeOn = null;
    },
    deleteDesk(state, deskId) {
      state.desks = state.desks.filter(x => x._id !== deskId);
    },
    addNewDesk(state, [roomId, deskSize, deskPosition, deskPrice]){
      state.latestDeskId += 1;

      const desk = new Desk(state.latestDeskId, Number(deskPrice), deskSize, deskPosition, Number(roomId));
      state.desks.push(desk);
    }
  }
  
  export const actions = {
  }