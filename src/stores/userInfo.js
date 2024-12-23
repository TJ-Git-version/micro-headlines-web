import {defineStore} from 'pinia';
import {getToken, removeToken, setToken} from '../utils/token-utils';
import {getUserInfo, removeUserInfo, setUserInfo} from '../utils/user-utils.ts';
import {getLogin} from '../api/index';


/**
 * 用户信息
 * @methods setUserInfos 设置用户信息
 */
export const useUserInfoStore = defineStore('userInfo', {

    state: () => ({
        token: getToken(),
        nickname: '',
        uid: '',
    }),

    actions: {
        // 登陆的异步action
        async login(loginForm) {
            // 发送登陆的请求
            const result = await getLogin(loginForm)
            // 请求成功后, 取出token保存  pinia和local中
            const token = result.token

            this.token = token
            console.log(result)
            setUserInfo(JSON.stringify(result))
            setToken(token) // 设置全局请求头
        },
        getInfo() {
            // const result = await getUserInfo()
            const userInfo = JSON.parse(getUserInfo());
            if (userInfo) {
                this.nickname = userInfo.nickname === '' ? userInfo.username : userInfo.nickname
                this.uid = userInfo.id
            }
        },
        initUserInfo() {
            removeToken()
            removeUserInfo()
            this.nickname = ""
            this.uid = ""
            console.log('1111111111');
        }
    },
});
