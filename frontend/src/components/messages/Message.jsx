import { useAuthContext } from "../../context/authContext";
import useConversation from "../../zustand/useConversation";
import { extractTime } from "../../utils/extractTime";



const Message = ({ message }) => {
	const { authUser } = useAuthContext();
	const { selectedConversation } = useConversation();

	const fromMe = message.senderId === authUser._id;
	const chatClass = fromMe ? "justify-end" : "justify-start";
	const bubbleColor = fromMe ? "bg-amber-500" : "bg-amber-600";
	const profilePic = fromMe ? authUser.profilePic : selectedConversation.profilePic;
	const shakeClass = message.shouldShake ? "shake" : "";

	return (
		<div className={`flex ${chatClass}`}>
			{!fromMe && (
				<img src={profilePic} alt="avatar" className="w-8 h-8 rounded-full mr-2" />
			)}
			<div className={`max-w-xs md:max-w-md px-4 py-2 rounded-lg ${bubbleColor} ${shakeClass} text-black`}>
				<p>{message.message}</p>
				<p className="text-xs text-right text-gray-800 mt-1">{extractTime(message.createdAt)}</p>
			</div>
			{fromMe && (
				<img src={profilePic} alt="avatar" className="w-8 h-8 rounded-full ml-2" />
			)}
		</div>
	);
};

export default Message;