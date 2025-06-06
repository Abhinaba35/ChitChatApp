import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
	const [message, setMessage] = useState("");
	const { loading, sendMessage } = useSendMessage(); 

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!message.trim()) return; 
		await sendMessage(message); 
		setMessage(""); 
	 };

	return (
		 <form
            className="px-4 py-3 bg-yellow-400 border-t border-slate-700"
            onSubmit={handleSubmit}
        >
            <div className="relative">
                <input
                    type="text"
                    placeholder="Send a message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-2 pr-10 rounded-lg bg-yellow-700 text-white placeholder-gray-100 outline-none"
                />
                <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-red-900 hover:text-red-800"
                    disabled={loading} 
                >
                    {loading ? (
                        <div className="loading loading-spinner" />
                    ) : (
                        <BsSend />
                    )}
                </button>
            </div>
        </form>
    );
};

export default MessageInput;
