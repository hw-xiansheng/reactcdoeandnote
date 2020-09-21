import React, { Component } from 'react';

import Child from "./components/Child"

import $ from "jquery"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';


class App extends Component {
    constructor(){
        super();
        this.state ={
            num:10
        }
        this.h3dom = React.createRef();
        this.ipt = null;
    }
    chagnenum= ()=>{
        this.setState(state=>({
            num:state.num+10
        }))
    }
    render() {
        return (
            <div>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                </Swiper>
                <hr/>
                我是脚手架！！！
                <button onClick={this.chagnenum}>修改num</button>
                <Child num={this.state.num}  ref="child" />
                <h3 ref={this.h3dom}>我是h3</h3>
                <input type='file' ref={(node) => {  this.ipt=node;  } } />
            </div>
        );
    }
    componentDidMount(){
        // refs的使用必须要在组件挂载完成之后！
        console.log(this.refs.child)
        console.log(this.h3dom.current)
        console.log(this.ipt)
        console.log($("input"))
    }
}
// 文档地址：https://swiperjs.com/react/

export default App;
