import React from 'react'

import '../App.css'

import SBProvider from '@sendbird/uikit-react/SendbirdProvider'
import '@sendbird/uikit-react/dist/index.css'
import CustomizedApp from './Llama'

import { APP_ID, USER_ID, NICKNAME } from './const'

function Chat() {
    if (!APP_ID) {
        return (
            <p>Set APP_ID in const.js</p>
        )
    }
    return (
        <SBProvider appId={APP_ID} userId={USER_ID} nickname={NICKNAME}>
            <CustomizedApp />
        </SBProvider>
    )
}

export default Chat