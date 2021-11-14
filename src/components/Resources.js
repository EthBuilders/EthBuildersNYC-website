import React from 'react'
import { Button } from "baseui/button";

const Resources = () => {

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }

    const onClickUrl = (url) => {
        return () => openInNewTab(url)
      }

    return (
        <div>
            <h1>Resources</h1>

            <Button onClick={onClickUrl('https://www.meetup.com/ethbuilders/')}> Meetup
            </Button>
                
    
        </div>
    )
}

export default Resources
