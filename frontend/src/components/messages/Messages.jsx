import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import useListenMessages from "../../hooks/useListenMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";




const Messages = () => {
	const {messages , loading} = useGetMessages();
	useListenMessages();
	const lastMessageRef = useRef();

	useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [messages]);

	return (
<div className="flex-1 overflow-y-auto px-4 py-2 space-y-2 bg-yellow-100">
	{!loading && messages.length > 0 && messages.map((msg, idx) => (
		<div key={msg._id} ref={idx === messages.length - 1 ? lastMessageRef : null}>
			<Message message={msg} />
		</div>
	))}

	{loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
	{!loading && messages.length === 0 && (
		<div className="flex items-center justify-center h-full">
			<p className="text-black-400">No messages yet. Start the conversation!</p>
		</div>
	)}
</div>
	);
};

export default Messages;