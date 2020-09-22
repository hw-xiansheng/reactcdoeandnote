import React, { Component,Fragment } from 'react';

class Info extends Component {
    render() {
        // 动态路由的数据！
        console.log(this.props.match.params)
        // console.log(this.props)
        // this.props.history.go()/goBack()/goForward()/replace()/push()

        return (
            <Fragment>
                <button onClick={this.props.history.goBack }>返回</button>
                新闻详情 <hr/>
                新闻的ID是：{this.props.match.params.id}
            </Fragment>
        );
    }
    componentDidMount(){
        // 发送ajax请求！
    }
}

export default Info;


