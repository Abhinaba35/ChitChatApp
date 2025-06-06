import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
	return (
		<div className="w-full max-w-xs h-screen border-r border-slate-800 bg-yellow-400 text-black flex flex-col p-4">
			<SearchInput />
			<div className="border-t border-slate-600 my-4" />
			<div className="flex-1 overflow-y-auto">
				<Conversations />
			</div>
			<LogoutButton />
		</div>
	);
};

export default Sidebar;
