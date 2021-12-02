import React from 'react'
import { Button } from "baseui/button";

const Join = () => {

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }

    const onClickUrl = (url) => {
        return () => openInNewTab(url)
      }

    return (
        <div className="container">
            <h1>Join the Meetup Group!</h1>
            <Button onClick={onClickUrl('https://www.meetup.com/ethbuilders/')}>Meetup</Button>
            <h1>Join the Slack!</h1>
            <Button onClick={onClickUrl('https://nyc-blockchain-devs.slack.com/')}>Slack</Button>
        </div>
    )
}

export default Join
