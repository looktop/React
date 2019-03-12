import React, { Component } from 'react';

class Counter extends Component{

    constructor(props){
        
        super(props);
        this.state = {
            value:0            
        }

        // this.정의
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        // 리액트 개발자에 의해 만들어진 프로세스를 통하여 안정적으로 업데이트 시킴 (setState)
        this.setState({
            value:this.state.value + 1,
            name: "I want love React! on step on step ~ "
        });
        
        // 이렇게 하게되면 React의 장점인 바뀐 부분만 Update하겠다는 부분을 완전 무시하는 것임
        // this.state.value = this.state.value + 1;
        // this.forceUpdate();
    }

    render(){
        return(
            <div>
                <h2>{this.state.value}</h2>
                <h2>{this.state.name}</h2>
                <button onClick={this.handleClick}>Press Me</button>
                {/* <button onClick={this.handleClick()}>Press Me</button> */}
            </div>
        )
    }
}

export default Counter;