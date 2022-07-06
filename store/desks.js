import Desk from '../models/Desk';
import { getDeskFreeDate } from '../helpers/formatDate'; 

export const state = () => ({
    desks: [new Desk(1, 80, 'Small', 'Next to window', 1), new Desk(2, 80, 'Small', 'Next to window', 1), new Desk(3, 80, 'Small', 'Next to window', 1), 
    new Desk(4, 80, 'Small', 'Next to window', 1), new Desk(5, 80, 'Small', 'Next to window', 1), new Desk(6, 80, 'Small', 'Next to window', 1)],
    selectedDeskToRent: null,
    latestDeskId: 6
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