export class UserInfo {
    constructor({nameSelector, infoSelector}) {
        this._nameSelector = nameSelector,
        this._infoSelector = infoSelector,
        this._nameElement = document.querySelector(this._nameSelector),
        this._infoElement = document.querySelector(this._infoSelector)
    }

    getUserInfo() {
        const userInfo = {
            name: this._nameElement.textContent,
            info: this._infoElement.textContent
        };
        return userInfo;
    }
    
    setUserInfo(item) {
        this._nameElement.textContent = item.name;
        this._infoElement.textContent = item.info;
    }
}