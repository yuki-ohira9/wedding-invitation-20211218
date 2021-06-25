class User {
  isLoggedIn = () => this.get('isLoggedIn') === 'true';

  userId = () => this.get('userId');
  userName = () => this.get('userName');
  userEmail = () => this.get('userEmail');
  isAttend = () => this.get('isAttend');
  address = () => this.get('address');
  tel = () => this.get('tel');
  hasAllergy = () => this.get('hasAllergy');
  allergyDetail = () => this.get('allergyDetail');
  message = () => this.get('message');

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

    let isLoggedIn = false;

    let userId = '';
    let userName = '';
    let userEmail = '';
    let isAttend = '';
    let address = '';
    let tel = '';
    let hasAllergy = '';
    let allergyDetail = '';
    let message = '';

    // ログイン時にCSRFトークンを初期化
    await axios.get("/sanctum/csrf-cookie").then(async response=> {
      await axios.post("/api/login", {
        email,
        password
      }).then(res => {
        if (res.data.result) {
          userId = res.data.user.id;
          userName = res.data.user.name;
          userEmail = res.data.user.email;
          isAttend = res.data.invitation?.is_attend ?? null;
          address = res.data.invitation?.address ?? '';
          tel = res.data.invitation?.tel ?? '';
          hasAllergy = res.data.invitation?.has_allergy ?? null;
          allergyDetail = res.data.invitation?.allergy_detail ?? '';
          message = res.data.invitation?.message ?? '';
          isLoggedIn = true;
        } else {
          isLoggedIn = false;
        }
      }).catch(err => {
        console.error(err);
        isLoggedIn = false;
      });
    });

    this.set('isLoggedIn', isLoggedIn);
    this.set('userId', userId);
    this.set('userName', userName);
    this.set('userEmail', userEmail);
    this.set('isAttend', isAttend);
    this.set('address', address);
    this.set('tel', tel);
    this.set('hasAllergy', hasAllergy);
    this.set('allergyDetail', allergyDetail);
    this.set('message', message);
    return isLoggedIn;
  };

  logout = async () => {
    if (this.isLoggedIn()) {
      this.set('isLoggedIn', false);
      this.set('userId', '');
      this.set('userName', '');
      this.set('userEmail', '');
      this.set('isAttend', '');
      this.set('address', '');
      this.set('tel', '');
      this.set('hasAllergy', '');
      this.set('allergyDetail', '');
      this.set('message', '');
    }
  };
}

export default new User();