export class UserInfo {
    constructor({name , desc}) {
        this._name = name;
        this._desc = desc;
    }

    getUserInfo = () => {
        const userInfo = {
            name: this._name.textContent,
            job: this._desc.textContent
          }
        return userInfo
    }

    setUserInfo = (userInfo) => {
        this._name.textContent = userInfo.name;
        this._desc.textContent = userInfo.job;
    }
}

