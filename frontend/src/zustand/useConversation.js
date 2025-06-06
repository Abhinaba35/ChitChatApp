import { create } from "zustand";

const useConversation = create((set) => ({
	selectedConversation: null,
	messages: [],
	setSelectedConversation: (conversation) => set({ selectedConversation: conversation }),
	setMessages: (messages) => set({ messages }), // ✅ Accepts full array
	addMessage: (message) =>
		set((state) => ({ messages: [...state.messages, message] })), // ✅ Safe update
}));

export default useConversation;
