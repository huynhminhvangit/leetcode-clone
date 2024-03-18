import { authApi } from "@/services";
import React from "react";
import { FiLogOut } from "react-icons/fi";

const Logout: React.FC = () => {
	const handleLogout = async () => {
		await authApi.logout();
	};
	return (
		<button className='bg-dark-fill-3 py-1.5 px-3 cursor-pointer rounded text-brand-orange' onClick={handleLogout}>
			<FiLogOut />
		</button>
	);
};
export default Logout;
