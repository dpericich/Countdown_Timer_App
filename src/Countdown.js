import React, { Component } from 'react'
import './App.css'

class Countdown extends Component {
    state = {
        countdownOn : false,
        countdownStart: 0,
        countdownTime: 0,
    }
    startCountdown = () => {
        this.setState({
            countdownOn : true,
            countdownTime: this.state.countdownTime,
            countdownStart: this.state.countdownTime,
        });
        this.countdown = setInterval(() => {
            const newTime = this.state.countdownTime - 10;
            if (newTime >= 0) {
                this.setState({
                    countdownTime: newTime
                });
            } else {
                clearInterval(this.countdown);
                this.setState({ countdownOn : false });
            }
        }, 10);
    }

    stopCountdown = () => {
        this.setState({ countdownOn: false });
        clearInterval(this.countdown);
    }

    resetCountdown = () => {
        if ( this.state.countdownOn === false) {
            this.setState({
                countdownTime: this.state.countdownStart
            });
        }
    };
    render() {
        let { countdownTime } = this.state;
        return (
            <div className="Countdown">
                <div className="Countdown-header">Countdown</div>                
            </div>
        );
    }
}

export default Countdown;
