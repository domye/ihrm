import { getToken, setToken, removeToken } from "@/utils/auth";
const state = {
  token: getToken(),
};

const mutations = {
  setToken(state, token) {
    state.token = token;
    setToken(token);
  },
  removeToken(state) {
    state.token = null;
    removeToken();
  },
};

const actions = {
  login(context, data) {
    console.log(data);
    //TODO: 调用登录接口
    context.commit("setToken", "123456");
  },
  logout(context) {
    context.commit("removeToken");
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
