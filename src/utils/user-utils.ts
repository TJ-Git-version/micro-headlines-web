const userKey = "micro-headlines-web-user"
export function getUserInfo() {
    return localStorage.getItem(userKey)
}

export function setUserInfo(userInfo: string) {
    localStorage.setItem(userKey, userInfo)
}

export function removeUserInfo() {
    localStorage.removeItem(userKey)
}
