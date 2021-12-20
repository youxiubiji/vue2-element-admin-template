const tokens = {
    admin: {
        token: 'admin-token',
    },
    editor: {
        token: 'editor-token',
    },
}

const users = {
    'admin-token': {
        roles: ['admin'],
        introduction: 'I am a super administrator',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: 'Super Admin',
    },
    'editor-token': {
        roles: ['editor'],
        introduction: 'I am an editor',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: 'Normal Editor',
    },
}
export default {
    'post|/user/login': config => {
        const { username } = config.body
        const token = tokens[username]
        return {
            code: 20000,
            data: token,
        }
    },
    'get|/user/info': config => {
        const { token } = config.query
        const info = users[token]

        return {
            code: 20000,
            data: info,
        }
    },
    'post|/user/logout': () => {
        return {
            code: 20000,
            data: 'success',
        }
    },
}
