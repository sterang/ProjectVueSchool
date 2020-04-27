import Api from "./Api";
import Csrf from "./Csrf";

export default {
  async register(form) {
    await Csrf.getCookie();
    return Api.post("/register", form);
  },
  async registerMateria(form) {
    await Csrf.getCookie();
    return Api.post("/registerMateria", form);
  },
  async loadMateria(form) {
    await Csrf.getCookie();
    const data = await Api.post("/datasMateria", form);
    const dataF = data.data;
    return dataF;
  },
  async login(form) {
    await Csrf.getCookie();
    return Api.post("/login", form);
  },

  async logout() {
    await Csrf.getCookie();
    return Api.post("/logout");
  },

  auth() {
    return Api.get("/user");
  }
};
