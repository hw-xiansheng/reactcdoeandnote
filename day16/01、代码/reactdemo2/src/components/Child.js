import React, { Component } from 'react';

import PropTypes from 'prop-types';
console.log(PropTypes)

// 类组件里面，本身有一个props属性表示外部传入的数据！
class Child extends Component {
    constructor(props){
        super(props);
        console.log(this.props)  //undefined!!!
        // 注意：如果直接在组件的构造器函数里面去使用props，其实是没有的！
        // 解决此问题：
            // 构造器显示的传递一下props，且传给super函数！这样就可以在构造器中使用props!
    }
    render() {
        console.log(this)
        return (
            <div className="child">
                <button onClick={() => this.props.msg('呵呵呵！！！') }>点击吧！</button>
                {this.props.msg()}
                {this.props.hehe}
                {this.props.ok}
                {this.props.rmsg}
                {this.props.txt}
            </div>
        );
    }
}

// 类型检验、必须传入校验！
Child.propTypes = {
    hehe: PropTypes.string.isRequired,
    ok: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    // props 整个props对象，propName就是属性名！componentName当前组件名
    txt: function (props, propName, componentName){
        // console.log(props)
        // console.log(propName)
        // console.log(componentName)
        console.log(props[propName])
        if (props[propName].length>10){
            console.log("自定义验证出错！")
            throw new Error('自定义验证出错！')
        }
           
    }
}
// 默认值！
Child.defaultProps = {
    rmsg:"我是默认的rmsg"
}

export default Child;



// import React from 'react';

// // 函数式组件，函数有个形参props，就是组件外部传入的数据！
// const Child = (props) => {
//     console.log(props.hehe)
//     console.log(props.ok)
//     console.log(props.msg)
//     props.msg();
   

//     return (
//         <div>
            
//         </div>
//     );
// }

// export default Child;



