import { createStore } from "vuex";

const store = createStore({
  state: {
  },
  getters: {},
  actions: {
    sendForm(context, data) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(data);
        }, 1000);
      });
    }
    
  },
  mutations: {},
  modules: {},
});

export {
    store as default,
}
