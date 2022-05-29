export class UserInfo {
    constructor({name , about, avatar}) {
        this._name = document.querySelector(name);
        this._about = document.querySelector(about);
        this._avatar = document.querySelector(avatar);
    }

    getUserInfo() {
      this._userData = {
        name: this._name.textContent,
        about: this._about.textContent
      }
      return this._userData;
    };

    setUserInfo(userData) {
        this._name.textContent = userData.name;
        this._about.textContent = userData.about;
        this.setUserAvatar(userData);
    }

    setUserAvatar(data) {
      this._avatar.src = data.avatar;
    }
}



