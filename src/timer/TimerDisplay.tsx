import React from 'react';
import styled from 'styled-components';

const TimerTextWrapper = styled.div`
    text-align: center;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 4.5em;
`;

interface TimerDisplayProps {
    seconds: number
}

const TimerDisplay = (props: TimerDisplayProps) => {
    let minutes = Math.floor(props.seconds / 60);
    let seconds = props.seconds % 60;

    // Ternary to either append a leading 0 (if the number is single digit)
    // or use the number as is.
    let displayedMinutes = minutes < 10 ? '0' + minutes : minutes.toString();
    let displayedSeconds = seconds < 10 ? '0' + seconds : seconds.toString();

    return(
        <TimerTextWrapper>
            {`${displayedMinutes}:${displayedSeconds}`}    
        </TimerTextWrapper>
    );
};

export default TimerDisplay;