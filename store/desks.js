import Desk from '../models/Desk';

export const state = () => ({
    desks: [new Desk(1, 80, 'Small', 'Next to window'), new Desk(2, 80, 'Small', 'Next to window'), new Desk(3, 80, 'Small', 'Next to window'), 
    new Desk(4, 80, 'Small', 'Next to window'), new Desk(5, 80, 'Small', 'Next to window'), new Desk(6, 80, 'Small', 'Next to window')],
    selectedDeskToRent: null,
  })
  
  export const getter = {

  }
  
  export const mutations = {
    rentDesk(state, params) {
      const [id, email] = params;
     let desk =  state.desks.find(x => x._id === id);
     desk.rentedBy = email;
     desk.isTaken = true;
    },
    selectDeskToRent(state, desk) {
      state.selectedDeskToRent = desk;
    }
  }
  
  export const actions = {
  }