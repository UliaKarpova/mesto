export default class Api {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
        this.sendNewProfileInfo =  this.sendNewProfileInfo.bind(this);
        this.addNewCard = this.addNewCard.bind(this);
        this.addLike = this.addLike.bind(this);
        this.deleteLike = this.deleteLike.bind(this);
        this.sendNewAvatar = this.sendNewAvatar.bind(this);
        this.deleteImage = this.deleteImage.bind(this);
    }

    getInfo() {
        return fetch(`${this._url}users/me`, {
            method: 'GET',
            headers: this._headers
        }).then((res) => {
            if (res.ok) {
            return res.json();
        }
        return Promise.reject('Произошла ошибка');
        });
    }

    getPhotos() {
        return fetch(`${this._url}cards`, {
            method: 'GET',
            headers: this._headers
        }).then((res) => {
            if (res.ok) {
            return res.json();
        }
        return Promise.reject('Произошла ошибка');
        });
    }

    sendNewProfileInfo(data) {
        return fetch(`${this._url}users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify(data) 
        }).then((res) => {
            if (res.ok) {
            return res.json();
        }
        return Promise.reject('Произошла ошибка');
        });
    }

    addNewCard(data) {
        return fetch(`${this._url}cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(data)
        }).then((res) => {
            if (res.ok) {
            return res.json();
        }
        return Promise.reject('Произошла ошибка');
        });
    }

    addLike(data) {
        return fetch(`${this._url}cards/${data._id}/likes`, {
            method: 'PUT',
            headers: this._headers,
            body: JSON.stringify(data)
        }).then((res) => {
            if (res.ok) {
            return res.json();
        }
        return Promise.reject('Произошла ошибка');
        });
    }

    deleteLike(data) {
        return fetch(`${this._url}cards/${data._id}/likes`, {
            method: 'DELETE',
            headers: this._headers,
        }).then((res) => {
            if (res.ok) {
            return res.json();
        }
        return Promise.reject('Произошла ошибка');
        });
    }

    deleteImage(data) {
        return fetch(`${this._url}cards/${data._id}`, {
            method: 'DELETE',
            headers: this._headers,
        }).then((res) => {
            if (res.ok) {
            return res.json();
        }
        return Promise.reject('Произошла ошибка');
        });
    }

    sendNewAvatar(data) {
        return fetch(`${this._url}users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({avatar: data.link}) 
        }).then((res) => {
            if (res.ok) {
            return res.json();
        }
        return Promise.reject('Произошла ошибка');
        });
    }
}
