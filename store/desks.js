import Desk from '../models/Desk';

export const state = () => ({
    desks: [new Desk(1, 80, 'Small', 'Next to window'), new Desk(2, 80, 'Small', 'Next to window'), new Desk(3, 80, 'Small', 'Next to window'), 
    new Desk(4, 80, 'Small', 'Next to window'), new Desk(5, 80, 'Small', 'Next to window'), new Desk(6, 80, 'Small', 'Next to window')]
  })
  
  export const getter = {

  }
  
  export const mutations = {
    rentDesk(state, id) {
     let desk =  state.desks.find(x => x._id === id); 
     desk.isTaken = true;
    }
  }
  
  export const actions = {
  }