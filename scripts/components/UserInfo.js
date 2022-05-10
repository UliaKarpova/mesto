export class UserInfo {
    constructor({firstSelector, secondSelector}) {
        this._firstSelector = firstSelector,
        this._secondSelector = secondSelector,
        this._firstElement = document.querySelector(this._firstSelector),
        this._secondElement = document.querySelector(this._secondSelector)
    }
    getUserInfo() {
        const userInfo = {
            name: this._firstElement.textContent,
            info: this._secondElement.textContent
        };
        return userInfo;
    }
    setUserInfo(item) {
        this._firstElement.textContent = item.name;
        this._secondElement.textContent = item.info;
    }
}