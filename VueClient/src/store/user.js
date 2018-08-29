import { getUserList } from "../api/user.js"

const user = {
    namespaced: true,
    state: {
        token: "",
        name: '',
        avatar: '',
        roles: [],
        list: []
    },

    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token
        },
        SET_NAME: (state, name) => {
            state.name = name
        },
        SET_AVATAR: (state, avatar) => {
            state.avatar = avatar
        },
        SET_ROLES: (state, roles) => {
            state.roles = roles
        },
        SAVE: (state, data) => {
            //state.list = data.list;
            state = { ...state, ...data }
        }

    },

    actions: {
        // 登录
        getList({ commit }, userInfo) {
            return new Promise((resolve, reject) => {
                getUserList().then(response => {
                    const data = response.data;
                    let payload = {
                        list: data
                    }
                    console.log(data)
                    commit('SAVE', payload)
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        },
        
    }
}

export default user