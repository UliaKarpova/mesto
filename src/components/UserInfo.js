export class UserInfo {
    constructor({nameSelector, aboutSelector, avatarSelector}) {
        this._nameElement = document.querySelector(nameSelector),
        this._aboutElement = document.querySelector(aboutSelector);
        this._avatarElement = document.querySelector(avatarSelector);
    }

    getUserInfo() {
        const userInfo = {
            name: this._nameElement.textContent,
            about: this._aboutElement.textContent
        };
        return userInfo;
    }
    
    setUserInfo(item) {
        this._nameElement.textContent = item.name;
        this._aboutElement.textContent = item.about;
    }

    setAvatar(item) {
        this._avatarElement.src = item;
    }
}