import { useSocketContext } from "../../context/SocketContext";
 import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation, lastIdx, emoji }) => {
	 const { selectedConversation, setSelectedConversation } = useConversation();
	 const isSelected = selectedConversation?._id === conversation._id;
	 const { onlineUsers } = useSocketContext();
	 const isOnline = onlineUsers.includes(conversation._id);

	return (
		<>
			<div
				className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-colors ${
					isSelected ? "bg-yellow-600" : "hover:bg-yellow-500"
				}`}
				 onClick={() => setSelectedConversation(conversation)}
			>
				<div className="relative">
					<img
						src={conversation.profilePic}
						alt="user avatar"
						className="w-12 h-12 rounded-full object-cover border-2 border-black"
					/>
					{isOnline && (
						<span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-black rounded-full"></span>
					)}
				</div>
				<div className="flex-1">
					<div className="flex justify-between items-center">
						<p className="text-black font-semibold">{conversation.fullName}</p>
						<span className="text-xl">{emoji}</span>
					</div>
				</div>
			</div>
			{!lastIdx && <div className="h-px bg-black my-2" />}
		</>
	);
};

export default Conversation;
