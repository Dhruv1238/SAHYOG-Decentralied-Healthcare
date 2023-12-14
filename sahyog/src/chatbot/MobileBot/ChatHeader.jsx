import IconArrowLeft from "./icon-arrow-left.svg";

const ChatHeader = ({ channel, user, onBack }) => (
  <div className="custom-channel-header">
    <button onClick={onBack}>
      <img width={20} heigth={20} src={IconArrowLeft} alt="Back button" />
    </button>
    <span>Sahyog</span>
    <span>Sahyog</span>
  </div>
);

export default ChatHeader;
