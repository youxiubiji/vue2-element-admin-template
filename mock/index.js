import Mock from 'mockjs'
const { param2Obj } = require('../src/utils')

// 设置200-2000毫秒延时请求数据
Mock.setup({
    timeout: '200-2000',
})

let configArray = []

//使用webpack的require.context()遍历所有的mock文件
const files = require.context('.', true, /\.js$/)
files.keys().forEach(key => {
    if (key === './index.js') return
    configArray = configArray.concat(files(key).default)
})

function XHR2ExpressReqWrap(respond) {
    return function (options) {
        let result = null
        if (respond instanceof Function) {
            const { body, type, url } = options
            result = respond({
                method: type,
                body: JSON.parse(body),
                query: param2Obj(url),
            })
        } else {
            result = respond
        }
        return Mock.mock(result)
    }
}

//注册所有的mock服务
configArray.forEach(item => {
    for (let [path, target] of Object.entries(item)) {
        let protocol = path.split('|')
        Mock.mock(new RegExp('^' + protocol[1]), protocol[0], XHR2ExpressReqWrap(target))
    }
})