export class Api {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }

    _handleResponse(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Ошибка ${res.status}`);
        }
    }

    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: {
                authorization: this._headers
            }
        })
            .then((res) => this._handleResponse(res))
    }

    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: {
                authorization: this._headers
            }
        })
            .then((res) => this._handleResponse(res))
    }

    patchUserInfo(info) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: this._headers,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: info.name,
                about: info.about
            })
        })
            .then((res) => this._handleResponse(res))
    }

    addCard(data) {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: {
                authorization: this._headers,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.name,
                link: data.link
            })
        })
            .then((res) => this._handleResponse(res))
    }

    deleteCard(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
            method: 'DELETE',
            headers: {
                authorization: this._headers
            }
        })
            .then((res) => this._handleResponse(res))
    }

    addLike(cardId) {
        return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
            method: 'PUT',
            headers: {
                authorization: this._headers
            }
        })
            .then((res) => this._handleResponse(res))
    }

    removeLike(cardId) {
        return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
            method: 'DELETE',
            headers: {
                authorization: this._headers
            }
        })
            .then((res) => this._handleResponse(res))
    }

    setAvatar(link) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: {
                authorization: this._headers,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ avatar: link })
        })
            .then((res) => this._handleResponse(res))
    }
}