export class UserInfo {
    constructor({name , description}) {
        this._name = document.querySelector(name);
        this._description = document.querySelector(description);
    }

    getUserInfo() {
        return {
          name: this._name.textContent,
          description: this._description.textContent
        }
      }

    setUserInfo = (nameValue, descriptionValue) => {
        this._name.textContent = nameValue.value
        this._description.textContent = descriptionValue.value
    }
}

