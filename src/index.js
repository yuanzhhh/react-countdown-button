/* eslint-disable */

import React from 'react';

import BaseComponent from './BaseComponent';

export default class CountdownButton extends BaseComponent {
    constructor(props) {
        super(props);

        this.bind(
            'countdown',
        );

        const {
            propsCountdownTimeS,
            propsShowText,
            propsDisabledColor,
        } = this.props;


        this.state = {
            countdownTimeS: propsCountdownTimeS || 60,
            showText: propsShowText || 'Click',
            countdownNow: propsCountdownTimeS || 60,
            isDisabled: false,
            countdownState: false,
            disabledColor: propsDisabledColor || '#999',
        }
    }

    componentDidUpdate() {
        const {countdownNow, countdownTimeS, countdownState} = this.state;
        const {countdownIng, countdownEnd} = this.props;

        this.stateCallback('countdownIng', countdownNow);

        if(countdownState && countdownNow === 0) {
            this.setState({
                countdownState: false,
                countdownNow: countdownTimeS,
                isDisabled: false,
            });

            this.stateCallback('countdownEnd');
        } else if (countdownState) {
            const _this =  this;

            setTimeout(() => {
                _this.setState({
                    countdownNow: countdownNow - 1,
                });
            }, 1000);
        }
    }

    stateCallback(stateName, ...state) {
        const {countdownStart, countdownIng, countdownEnd} = this.props;

        const countdownCallback = {
            countdownStart,
            countdownIng,
            countdownEnd,
        }[stateName];

        if (typeof countdownCallback === 'function') {
            countdownCallback(...state);
        }
    }

    countdown() {
        this.setState({
            countdownState: true,
            isDisabled: true,
        });

        this.stateCallback('countdownStart');
    }

    render() {
        const {
            showText, 
            isDisabled, 
            countdownState, 
            countdownNow, 
            disabledColor
        } = this.state;

        const {
            className,
        } = this.props;

        return (
            <button
                className = {className}
                disabled = {isDisabled}
                onClick = {this.countdown}
                style={{color: countdownState ? disabledColor : false}}
            >
                {countdownState ? `${countdownNow}s` : showText}
            </button>
        )
    }
};