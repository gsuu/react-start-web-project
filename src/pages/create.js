import React, { Component, Fragment } from 'react';

class ClientInfo extends Component {
  constructor(props) {
    super(props);

    const today = new Date().toISOString().substring(0, 10);

    this.state = {
      name: '',
      area: '',
      tel: '',
      periodFrom: today,
      periodTo: today,
      periodNight: '4',
      periodDay: '5'
    };
  }

  textInputOnChanged = (e, key) => {
    let newState = {};
    newState[key] = e.target.value;

    newState = Object.assign({}, this.state, newState);

    this.props.onUpdate(newState);
  }

  render() {
    const today = new Date().toISOString().substring(0, 10);
    return (
      <div>
        <h2>고객정보</h2>
        <p>
          <label>이름: </label>
          <input type="text" onChange={e => this.textInputOnChanged(e, 'name')} />
        </p>
        <p>
          <label>연락처: </label>
          <input type="text" onChange={e => this.textInputOnChanged(e, 'tel')} />
        </p>
        <p>
          <label>여행지역: </label>
          <input type="text" onChange={e => this.textInputOnChanged(e, 'area')} />
        </p>
        <p>
          <label>여행기간: </label>
          <input type="date" defaultValue={today} onChange={e => this.textInputOnChanged(e, 'periodFrom')} />
           ~
          <input type="date" defaultValue={today} onChange={e => this.textInputOnChanged(e, 'periodTo')} />
        </p>
        <p>
          <label>기간: </label>
          <input type="number" defaultValue="4" min="0" onChange={e => this.textInputOnChanged(e, 'periodNight')} /> 박
          <input type="number" defaultValue="5" min="1" onChange={e => this.textInputOnChanged(e, 'periodDay')} /> 일
        </p>
      </div>
    )
  }
}

class Schedule extends Component {
  constructor(props) {
    super(props);

    this.state = {
      day : 1,
      time: '',
      place: '',
      price: '',
      description: ''
    }
  }

  selectOnChanged = (e) => {
    this.setState({
      day: e.target.value
    });
  }

  textInputOnChanged = (e, key) => {
    const newState = {};
    newState[key] = e.target.value;

    this.setState(newState);
  }

  createDayOption = () => {
    let options = [];
    for(let i=1; i<=Number(this.props.clientInfo.periodDay); i++) {
      options.push(<option value={i} key={i}>{i}일차</option>);
    }
    return options;
  }

  addOnClicked = () => {
    this.props.onUpdate(this.state);
  }

  render() {
    return (
      <div className="schedule-write">
        <h2>일정</h2>
        <p>
          <select onChange={e => this.selectOnChanged(e)}>
            {this.createDayOption()}
          </select>
        </p>
        <div>
          <p>
            <label>장소명: </label>
            <input type="text" onChange={e => this.textInputOnChanged(e, 'place')} />
          </p>
          <p>
            <label>예상소요시간: </label>
            <input type="text" onChange={e => this.textInputOnChanged(e, 'time')} />
          </p>
          <p>
            <label>예상금액: </label>
            <input type="text" onChange={e => this.textInputOnChanged(e, 'price')} />
          </p>
          <p>
            <label>설명: </label>
            <input type="text" onChange={e => this.textInputOnChanged(e, 'description')} />
          </p>
          <button type="button" onClick={this.addOnClicked}>추가</button>
        </div>
      </div>
    )
  }
}

class Output extends Component {
  render() {
    console.log(this.props.data)
    return (
      <div>

      </div>
    )
  }
}

class Create extends Component {
  constructor(props) {
    super(props);

    const today = new Date().toISOString().substring(0, 10);

    this.state = {
      title: '',
      errorMessage: null,
      client: {
        name: '',
        area: '',
        tel: '',
        periodFrom: today,
        periodTo: today,
        periodNight: 4,
        periodDay: 5
      },
      items: []
    };
  }

  onSubmit = (e) => {
    // console.log(this.state);
  }

  textInputOnChanged = (e, key) => {
    const newState = {};
    newState[key] = e.target.value;

    this.setState(newState);
  }

  onClientInfoUpdate = (val) => {
    this.setState({
      client: val
    });
  }

  onScheduleUpdate = (val) => {
    this.setState(prevState => ({
      items: [...prevState.items, val]
    }))
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          {this.state.errorMessage && (
            <p>{this.state.errorMessage}</p>
          )}
          <p>
            <label>제목: </label>
            <input type="text" onChange={e => this.textInputOnChanged(e, 'title')} />
          </p>
          <ClientInfo onUpdate={this.onClientInfoUpdate} />
          <Schedule onUpdate={this.onScheduleUpdate} clientInfo={this.state.client} />
          <Output data={this.state} />
          <button type="button" onClick={e => this.onSubmit(e)}>완료</button>
        </form>
      </div>
    );
  }
}

export default Create;
