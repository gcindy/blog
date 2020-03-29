import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  // 定义变量
  state: {
    text: "测试测试测试",
    arrays: [
      { id: 1, name: "龚铱白" },
      { id: 2, name: "jj" },
      { id: 3, name: "薛之谦" }
    ]
  },
  // 相当于计算属性且值改变了才会改变值
  getters: {
    // 过滤arrays
    getArray: state => {
      return state.arrays.filter(arr => arr.name);
    },
    // 计算arrays的长度
    getArrayCount: (state, getters) => {
      return getters.getArray.length;
    },
    //根据传入的name返回对应的信息（查询不到不返回任何信息，亦不报错）
    getArrayName: (state) => (name) => {
      return state.arrays.find(array => array.name === name)
    },
  },
  // 直接更改state的状态
  mutations: {
    setMessage(state, message) {
      state.text = message
    }
  },
  // 更改页面状态,提交到mutations
  actions: {
    changeMutations({ commit }, message) {
      commit("setMessage", message)
    }
  }
});
