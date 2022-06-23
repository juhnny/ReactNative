import React, {Component} from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'

//ListView라는 컴포넌트를 쓰지 않고 그동안 배운 것만으로 비슷한 구조를 만들어보려 함
export default class Main extends Component{
    render(){
        let arr = ["aaa", "bbb", "ccc"] 
        // JSX 컴포넌트 객체를 변수에 저장
        // const t1 = new Text() //이렇게 Text 컴포넌트를 new로 쓸 수도 있다.
        const t2 = <Text>Hello</Text>
        const bbb = <View>
            <Text>Hahaha</Text>
            <Button title="Hahaha"></Button>
        </View>
        const ccc = [t2, bbb, this.showItemView()]
        //하지만 대부분의 배열은 컴포넌트가 아니라 데이터를 담고 있음
        const datas = ['aa', 'bb', 'cc', 'dd', 'ee', 'aa', 'bb', 'cc', 'dd', 'ee', 'aa', 'bb', 'cc', 'dd', 'ee']
        //이걸 View 안에 바로 보여주면 에러. 각 데이터를 보여줄 컴포넌트들에 담아서 보여줘야 함
        //map을 써보자(forEach와 유사)
        //배열의 요소만큼 function() 호출되며 파라미터로 해당 요소의 값, 인덱스, 배열객체가 전달되며, 요소의 개수만큼 리턴을 받아 새 배열을 만들어 리턴
        const datas2 = datas.map( function (value, index, array) {
            return (
                <View style={{margin:4, padding:8, borderWidth:1, borderRadius:4}}>
                    <Text>{value}</Text>
                </View>
            )
        })

        return(
            <View style={style.root}>
                <Text>List Layout {arr[0]}</Text>
                {/* 배열 이름을 쓰면 요소를 (콤마 없이) 나열 */}
                <Text>List Layout {arr}</Text>
                {/* 아래 모두 에러. 문자열을 보여줄 수 있는 건 Text 컴포넌트 뿐 */}
                {/* aaa */}
                {/* {arr} */}

                {/* 하지만 변수에 컴포넌트가 담겨있다면? */}
                {/* {t1} */}
                {t2}
                {bbb} 

                {/* 컴포넌트를 리턴하는 함수를 호출하기 */}
                {this.showItemView()}
                {this.showItemView()}

                {/* 인수를 전달해 값이 다른 컴포넌트 만들기 */}
                {this.showItemView2("Car", "Give me a car", "red")}

                {/* 컴포넌트를 요소로 갖는 배열을 만들어 활용하기 */}
                {ccc[0]}
                {ccc}

                {datas2}
                {/* 이렇게 유사 리스트뷰를 만들 수 있지만 길이가 길어져도 자동으로 스크롤이 되지도 않는다. */}
                {/* 이런 기능을 편리하게 만든 RecyclerView와 유사한 컴포넌트가 FlatList */}
            </View>
        )
    }

    //컴포넌트를 리턴하는 메소드를 정의
    // 콜백함수라면 화살표함수로 만드는 게 좋지만 그냥 리턴만 하는 함수니까 일반 함수로
    showItemView(){
        return (
            <View style={{margin:8}}>
                <Text>Item</Text>
            </View>
        )
    }

    //파라미터도 받아서 값을 바꿔보자
    showItemView2(name, title, color){
        return (
            <View style={{margin:8}}>
                <Text>{name}</Text>
                <Button title={title} color={color}></Button>
            </View>
        )
    }
}
    
const style = StyleSheet.create({
    root:{flex:1, padding:16},
    text:{color:'black'}
})