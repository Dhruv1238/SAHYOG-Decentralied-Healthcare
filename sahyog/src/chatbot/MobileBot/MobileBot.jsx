import "./styles.css";
import { SendBirdProvider, ChannelList, Channel } from "@sendbird/uikit-react";
import "@sendbird/uikit-react/dist/index.css";
import { useState } from "react";
import ChatHeader from "./ChatHeader";
import ChannelPreview from "./ChannelPreview";
import Appbar from "../../components/appbar/Appbar";

export default function MobileBot() {
    const [channel, setChannel] = useState(null);

    const onChannelSelect = (_channel) => {
        setChannel(_channel);
        window.history.pushState({}, _channel.name, "/" + _channel.url);
    };

    const onBack = () => {
        setChannel(null);
        window.history.pushState({}, document.title, "/");
    };

    return (
        <>
            <div className="pb-16 App">
                <SendBirdProvider userId="1152" appId="25EBD513-9845-404D-9890-F22174F1630C" nickname="Sahyog">
                    {channel ? (
                        <Channel
                            channelUrl={channel.url}
                            renderChatHeader={({ channel, user }) => (
                                <ChatHeader channel={channel} user={user} onBack={onBack} />
                            )}
                        />
                    ) : (
                        <ChannelList
                            renderChannelPreview={({ channel }) => (
                                <ChannelPreview
                                    channel={channel}
                                    onChannelSelect={onChannelSelect}
                                />
                            )}
                        />
                    )}
                </SendBirdProvider>
            </div>
            <Appbar />
        </>
    );
}
