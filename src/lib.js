// eslint-disable-next-line no-unused-vars
const install = function (Vue, _ops) { // 写下划线只是为了让我的eslint不报错而已，强迫症，不用在意。
    // ops 可以为Vue.use(lib, {})  这样调用时候传入的初始化参数。。。
    // 我们这里直接把App.vue当做组件输出出去
    Vue.component('data-design', () => import('./components/DataDesign'))
    // 这里还可以注册其他组件或者做自己的的一些初始化操作等
}

export default {
    install, // 这里导出的install会被use的时候调用，这些是Vue的一些原理或者称为原理吧
}

