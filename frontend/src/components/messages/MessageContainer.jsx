import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/authContext";



const MessageContainer = () => {
	const { selectedConversation, setSelectedConversation } = useConversation();

	useEffect(() => {
		return () => setSelectedConversation(null);
	}, [setSelectedConversation]);

	return (
		<div className="flex flex-col flex-1 h-full bg-yellow-200 text-black">
			{!selectedConversation ? (
				<NoChatSelected />
			) : (
				<>
					<div className="bg-yellow-400 px-4 py-3 border-b border-slate-700">
						<p className="text-sm text-lime-400">
							 <span className="font-semibold text-black">{selectedConversation.fullName}</span>
						</p>
					</div>
					<Messages />
					<MessageInput />
				</>
			)}
		</div>
	);
};

export default MessageContainer;

const NoChatSelected = () => {
	const { authUser } = useAuthContext();


	return (
		<div className="flex items-center justify-center w-full h-full">
			<div className="px-4 text-center text-lg md:text-xl text-gray-800 font-semibold flex flex-col items-center gap-2">
				<p>Welcome 👋 {authUser?.fullName || "Guest"} ❄</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className="text-4xl md:text-6xl text-slate-500" />
			</div>
		</div>
	);
};