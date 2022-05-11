export class UserInfo {
    constructor({nameSelector, infoSelector}) {
        this._nameElement = document.querySelector(nameSelector),
        this._infoElement = document.querySelector(infoSelector)
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