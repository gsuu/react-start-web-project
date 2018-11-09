import React, { Component } from 'react';

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null
  }

  myRef = null; // ref를 설정할 부분

  constructor(props) {
    super(props);

    console.log('constructor');
  }

  static getDerivedStateFromProps(nextProps, prevProps) {
    /*
     * 리액트 v16.3이후에 새로 만든 메서드
     * props로 받아온 값을 state에 동기화 시키는 용도로 사용하며, 컴포는트를 마운트하거나 props를 변경할 때 호출됨
     */

    if(nextProps.color !== prevProps.color) {
      return {
        color : nextProps.color
      }
    }

    return null;
  }

  componentDidMount() {
    /*
     * 컴포넌트를 만들고, 첫 렌더링을 다 마친 후 실행
     * 이 안에서 다른 자바스크립트 라이브러리 또는 프레임 워크의 함수를 호출하거나 등록, 비동기 작업을 처리하면 됨
     */

    console.log('componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    /*
     * props나 state를 변경했을 때 리렌더링을 시작할지 여부를 지정
     * 반드시 true나 false값을 반환해야 함
     * 컴포넌트 업데이트의 성능을 개선할 때에 중요하게 사용됨!!!!
     */

    console.log('shouldComponentUpdate', nextProps, nextState);

    // 숫자의 마지막 자리가 4면 리렌더링 하지 않는다.
    return nextState.number % 10 !== 4;
  }

  componentWillUnmount(){
    /*
     * 컴포는트를 DOM에서 제거할 때 실행
     * componentDidMount에서 등록한 이벤트, 타이머, 직접생성한 DOM이 있다면 여기에서 제거 작업을 하면 된다.
     */

    console.log('componentWillUnmount');
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1
    });
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    /*
     * 리액트 v16.3이후에 만든 메서드
     * render메서드를 호출한 후 DOM에 변화를 반영하기 바로 직전에 호출함
     * 주로 업데이트 하기 직전의 값을 참고할 일이 있을 때 활용 (예: 스크롤바 위치 유지)
     */

    console.log('getSnapshopBeforeUpdate');

    if(prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }

    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    /*
     * 리렌더링 완료 후 실행 (업데이트 직후)
     * DOM관련 처리를 해도 무방하다.
     * getSnapshopBeforeUpdate에서 반환한 값이 있다며 여기에서 snapshot 값을 전달받을 수 있다.
     */

    console.log('componentDidUpdate', prevProps, prevState);

    if(snapshot) {
      console.log('업데이트 되기 직전 색상 : ', snapshot);
    }
  }

  render() {
    /*
     * 컨포넌트의 모양새를 정의
     * 이 메서드 안에서 this.props, this.state에 접근할 수 있으며, 리액트 요소를 반환한다.
     * 이 메서드 안에서는 절대로 state를 변형해서는 안되며, 웹브라우저에 접근해서도 안된다.
     * 아무것도 반환하고 싶지 않다면 null이나 false를 반환
     */

    console.log('render');

    const style = {
      color: this.props.color
    };

    return (
      <div>
        <h1 style={style} ref={ref => this.myRef=ref}>{this.state.number}</h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    )
  }
}

export default LifeCycleSample;
