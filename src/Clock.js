import React, { Component } from 'react';
import { isMoment } from '../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/moment';

class Clock extends Component {

    
    render() {
        return (
            <div className="clock">
                <div className="clock__group clock__group--days">
                    <div className="clock__title"></div>
                    <div className="clock__amount">300</div>
                </div>
                <div className="clock__group clock__group--hours">
                    <div className="clock__title">Hours</div>
                    <div className="clock__amount">16</div>
                </div>
                <div className="clock_group clock__group--minutes">
                    <div className="clock__title">Minutes</div>
                    <div className="clock__amount">42</div>
                </div>
                <div className="clock_group clock__group--seconds">
                    <div className="clock__title">Seconds</div>
                    <div className="clock__amount">22</div>
                </div>
            </div>
        );
    }
}

export default Clock;       