const Events = require('events');

// 仓库类！ 继承了 事件触发器模块！拥有了on 和 emit 方法
class Store extends Events {
    state = {
        rootmsg:"我是仓库里面的msg!",
        rootnum:10
    }
}
// 实例化一个仓库对象（on和emit方法）
let store = new Store();
// 暴露出去
export default store;

