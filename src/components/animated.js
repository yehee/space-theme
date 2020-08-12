import React, { useState } from 'react'
import Lottie from 'react-lottie'

const Animated = ({ animationData, canPause, canStop, canPlay, ...props }) => {
    const [isStopped, setStopped] = useState(false)
    const [isPaused, setPaused] = useState(false)

    const buttonStyle = {
        display: 'block',
        margin: '10px auto',
    }

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    }

    return (
        <div {...props}>
            <Lottie
                options={defaultOptions}
                height={325}
                width={325}
                isStopped={isStopped}
                isPaused={isPaused}
            />
            {canStop && <button style={buttonStyle} onClick={() => setStopped(true)}>stop</button>}
            {canPlay && <button style={buttonStyle} onClick={() => setStopped(false)}>play</button>}
            {canPause && <button style={buttonStyle} onClick={() => setPaused(prev => !prev)}>pause</button>}
        </div>
    )
}

export default Animated
