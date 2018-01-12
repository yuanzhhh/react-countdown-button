## Usage
```
# install
npm install react-countdown-button --save (or yarn)

# usage
const CountdownButton = require('react-countdown-button');

<CountdownButton
    className = { // className }
    propsCountdownTimeS = { // Countdown seconds}
    propsShowText = { // Button text }
    propsDisabledColor = { // Color state for disabled }
    countdownStart = { // Event start },
    countdownIng = { // Event ongoing },
    countdownEnd = { // Event end },
/>
```