import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
	const { loading, logout } = useLogout();
    
	return (
		<div className="mt-6 text-white">
			{loading ? (
				<div className="w-6 h-6 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
			) : (
				<BiLogOut
					className="w-6 h-6 cursor-pointer hover:text-red-500 transition-colors"
					onClick={logout}
				/>
			)}
		</div>
	);
    

    return (
  <div className="mt-6 text-white">
    <BiLogOut className="w-6 h-6 cursor-pointer hover:text-red-500 transition-colors" />
  </div>
);

};

export default LogoutButton;
