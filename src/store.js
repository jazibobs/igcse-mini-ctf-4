import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

export default new Vuex.Store({
  // plugins: [createPersistedState({
  //   storage: window.localStorage,
  // })],
  state: {
    colourScheme: "dhsz",
    currentScore: 0,
    tasks: [
      {
        name: "The first one is free",
        points: 100,
        detail: "Quickly test that the website is working for you, the answer is:",
        monospace: "dhszCTF{dulwich}",
        files: [],
        md5: "b33f71ec11ddcd26346f065288e32c6d",
        solved: false
      },
      {
        name: "This is supposed to be English?",
        points: 100,
        detail: "You have just received the following text message, but something has clearly gone wrong...",
        monospace: "01100100 01110101 01101100 01110111 01101001 01100011 01101000 01000011 01010100 01000110 01111011 01101010 01110101 01110011 01110100 01011111 01100001 01110011 01100011 01101001 01101001 01111101",
        files: [],
        md5: "15b5b28aedc665b43eb1a8335036af73",
        solved: false
      },
      {
        name: "What shot this photograph?",
        points: 100,
        detail: "There is something hidden within this photograph file, apparently the artist is very famous?",
        files: [],
        md5: "1b651b8ffdeda6f6da2476d4106243a1",
        solved: false
      },
      {
        name: "Check you're all set up",
        points: 100,
        detail: "The answer to this task is dhszCTF{dulwich}",
        files: [],
        md5: "b33f71ec11ddcd26346f065288e32c6d",
        solved: false
      },
      {
        name: "Check you're all set up",
        points: 100,
        detail: "The answer to this task is dhszCTF{dulwich}",
        files: [],
        md5: "b33f71ec11ddcd26346f065288e32c6d",
        solved: false
      }
    ]
  },
  mutations: {
    pushPoints(state, task) {
      state.currentScore = state.currentScore + task.points
      state.tasks[task.number].solved = true
    },
    updateColour(state, newColour) {
      state.colourScheme = newColour
    }
  }
});