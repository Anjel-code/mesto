export class UserInfo {
    constructor(selectors) {
        this._nameSelector = document.querySelector(selectors.profileName);
        this._infoSelector = document.querySelector(selectors.profileJob);
    }

    getUserInfo() {
       return this._userInfo = {
            name: this._nameSelector.textContent,
            job: this._infoSelector.textContent
        }
    }

    setUserInfo(userData) {

        this._nameSelector.textContent = userData.name;
        this._infoSelector.textContent = userData.job;

    }
}