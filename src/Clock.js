import React from 'react';

class Clock extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            time: new Date()
        };
    }

    componentDidMount = () => {
        this.interval = setInterval(this.tick, 1000)
    }

    componentWillUnmount = () => {
        clearInterval(this.interval)
    }

    tick = () => {
        this.setState({time: new Date()})
    }
    
    render = () => (
        <div className='clock-widget'>
            <div><h1>Clock</h1></div>
            <div>
                <h2>{
                    `${this.state.time.getMonth()}/
                    ${this.state.time.getDate()}/
                    ${this.state.time.getFullYear()}
                    `
                }</h2>
            </div>
            <div>
                <h2>{
                    `${this.state.time.getHours()}:
                    ${this.state.time.getMinutes()}:
                    ${this.state.time.getSeconds()}
                    `
                }</h2>
            </div>
        </div>
    )
};

export default Clock;