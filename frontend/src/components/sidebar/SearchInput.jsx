import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import { toast } from "react-hot-toast";

const SearchInput = () => {
	const [search, setSearch] = useState("");
	const { setSelectedConversation } = useConversation();
	const { conversations } = useGetConversations();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!search) return;

		if (search.length < 3) {
			return toast.error("Search term must be at least 3 characters long.");
		}

		const conversation = conversations.find((c) =>
			c.fullName.toLowerCase().includes(search.toLowerCase())
		);

		if (conversation) {
			setSelectedConversation(conversation);
			setSearch("");
		} else {
			toast.error("No such user found!");
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="flex items-center gap-2 px-2 py-2 bg-yellow-700 rounded-full shadow-inner focus-within:ring-2 focus-within:ring-sky-500"
		>
			<input
				type="text"
				placeholder="Search…"
				className="flex-1 bg-transparent outline-none text-black placeholder-gray-800"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<button type="submit" className="text-white hover:text-sky-300">
				<IoSearchSharp className="w-5 h-5" />
			</button>
		</form>
	);
};

export default SearchInput;
