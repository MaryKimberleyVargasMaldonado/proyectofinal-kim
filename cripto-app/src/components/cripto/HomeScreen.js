import React from "react";
// import { useSelector } from "react-redux";
import { Sidebar } from "./Sidebar";
import { MenuScreen } from "./MenuScreen";

export const HomeScreen = () => {
	// U S E   S E L E C T O R
	// const { active } = useSelector((state) => state.notes);

	// R E T U R N
	return (
		<div className="cripto__main-content animate__animated animate__fadeIn animate__faster">
			<Sidebar />

			<main>
				<MenuScreen />
			</main>
		</div>
	);
};

//			<main>{active ? <MenuScreen /> : <NothingSelected />}</main>
