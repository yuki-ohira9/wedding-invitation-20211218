import { readyException } from "jquery";

class User {
  isLoggedIn = () => this.get('isLoggedIn') === 'true';

  userInfo = {};

  set = (key, value) => localStorage.setItem(key, value);

  get = key => this.getLocalStorage(key);

  getLocalStorage = key => {
    const ret = localStorage.getItem(key);
    if (ret) {
      return ret;
    }
    return null;
  };

  login = async (email, password) => {

    let result = false;
    let userInfo = {};

    // ログイン時にCSRFトークンを初期化
    await axios.get("/sanctum/csrf-cookie").then(async response=> {
      await axios.post("/api/login", {
        email,
        password
      }).then(res => {
        if (res.data.result) {
          userInfo = res.data.user;
          result = true;
        } else {
          result = false;
        }
      }).catch(err => {
        result = false;
      });
    });

    this.set('isLoggedIn', result);
    this.userInfo = userInfo;
    return result;
  };

  logout = async () => {
    if (this.isLoggedIn()) {
      this.set('isLoggedIn', false);

      // ログアウト処理
      //　他に必要な処理があるのならこちら

    }
  };
}

export default new User();