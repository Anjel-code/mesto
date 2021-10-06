export class UserInfo {
    constructor(selectors) {
        this._name = document.querySelector(selectors.profileName);
        this._info = document.querySelector(selectors.profileJob);
    }

    getUserInfo() {
       return this._userInfo = {
            name: this._name.textContent,
            job: this._info.textContent
        }
    }

    setUserInfo(userData) {

        this._name.textContent = userData.name;
        this._info.textContent = userData.job;

    }
}