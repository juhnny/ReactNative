import React, {Component} from 'react'


export default class MyComponent5 extends Component{

    render(){
        return (
            <View>
                {/* 버튼에 설정할 props가 여러개일 때 한방에 적용 */}
                {/* ... - 스프레드 연산자(XML에서 속성명과 속성값이 props에 자동 적용) */}
                <Button {...this.props}></Button>
            </View>
        )
    }

}