import Desk from '../models/Desk';
import { getDeskFreeDate } from '../helpers/formatDate'; 

export const state = () => ({
    desks: [new Desk(1, 80, 'Small', 'Next to window', 1), new Desk(2, 80, 'Small', 'Next to window', 1), new Desk(3, 80, 'Small', 'Next to window', 1), 
    new Desk(4, 80, 'Small', 'Next to window', 1), new Desk(5, 80, 'Small', 'Next to window', 1), new Desk(6, 80, 'Small', 'Next to window', 1)],
    selectedDeskToRent: null,
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
    }
  }
  
  export const actions = {
  }