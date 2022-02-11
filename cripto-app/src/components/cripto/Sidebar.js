import React, { useEffect, useState } from "react";
import logo from "../../assets/logo/logoU.svg";
import userP from "../../assets/userP.jpg";

import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../actions/auth";

import MenuItem from "./MenuScreen";
import { Criptocoin } from "./Criptocoin";
import { Convert } from "./Convert";
import { Ingresos } from "./Ingresos";
import { Gastos } from "./Gastos";
import { Inversiones } from "./Inversiones";
import { Metas } from "./Metas";
import { LandingPage } from "./LandingPage";

export const menuItems = [
	{
		name: "Dashboard",
		exact: true,
		to: "/",
		iconClassName: "bi bi-speedometer2",
		screen: <LandingPage />,
	},
	{
		name: "Criptomonedas",
		exact: true,
		to: `/c`,
		iconClassName: "bi-bootstrap bi-currency-exchange",
		screen: <LandingPage />,

		subMenus: [
			{ name: "Criptocoins", to: "/c/criptomonedas", screen: <Criptocoin /> },
			{ name: "Convertidor", to: "/c/convertidor", screen: <Convert /> },
		],
	},
	// {
	// 	name: "Educación Financiera",
	// 	to: `/educación`,
	// 	iconClassName: "bi bi-broadcast-pin",
	// },
	{
		name: "Salud Financiera",
		exact: true,
		to: `/saludf`,
		iconClassName: "bi bi-activity",
		screen: <LandingPage />,

		subMenus: [
			{ name: "Ingresos", to: "/saludf/ingresos", screen: <Ingresos /> },
			{ name: "Gastos", to: "/saludf/gastos", screen: <Gastos /> },
			{
				name: "Inversiones",
				to: "/saludf/inversiones",
				screen: <Inversiones />,
			},
			{ name: "Metas", to: "/saludf/metas", screen: <Metas /> },
		],
	},
	{ name: "Ajustes", to: `/settings`, iconClassName: "bi bi-gear" },
];

const SideMenu = (props) => {
	const [inactive, setInactive] = useState(false);

	useEffect(() => {
		if (inactive) {
			removeActiveClassFromSubMenu();
		}

		props.onCollapse(inactive);
	}, [inactive]);

	// R E M O V E   A C T I V E   C L A S S
	const removeActiveClassFromSubMenu = () => {
		document.querySelectorAll(".sub-menu").forEach((el) => {
			el.classList.remove("active");
		});
	};

	// U S E   E F F E C T
	useEffect(() => {
		let menuItems = document.querySelectorAll(".menu-item");
		menuItems.forEach((el) => {
			el.addEventListener("click", (e) => {
				const next = el.nextElementSibling;
				removeActiveClassFromSubMenu();
				menuItems.forEach((el) => el.classList.remove("active"));
				el.classList.toggle("active");
				console.log(next);
				if (next !== null) {
					next.classList.toggle("active");
				}
			});
		});
	}, []);

	// U S E   D I S P A T C H
	const dispatch = useDispatch();

	// U S E   S E L E C T O R
	const { name } = useSelector((state) => state.auth);

	// H A N D L E   L O G O U T
	const handleLogout = () => {
		dispatch(startLogout());
	};

	//  R E T U R N
	return (
		<div className={`side-menu ${inactive ? "inactive" : ""}`}>
			<div className="top-section ">
				<div className="logo">
					<img src={logo} alt="webscript" />
				</div>
				<div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
					{inactive ? (
						<i className="bi bi-arrow-right-square-fill"></i>
					) : (
						<i className="bi bi-arrow-left-square-fill"></i>
					)}
				</div>
			</div>

			<div className="search-controller">
				<button className="search-btn">
					<i className="bi bi-search"></i>
				</button>

				<input type="text" placeholder="Buscar . . ." />
			</div>

			<div className="divider"></div>

			<div className="main-menu">
				<ul>
					{menuItems.map((menuItem, index) => (
						<MenuItem
							key={index}
							name={menuItem.name}
							exact={menuItem.exact}
							to={menuItem.to}
							subMenus={menuItem.subMenus || []}
							iconClassName={menuItem.iconClassName}
							onClick={(e) => {
								if (inactive) {
									setInactive(false);
								}
							}}
						/>
					))}
				</ul>
			</div>

			<div className="side-menu-footer">
				<div className="avatar">
					<img src={userP} alt="user" />
				</div>
				<div className="user-info">
					<h5>{name}</h5>
					<p onClick={handleLogout} className="dropdown-item ">
						Cerrar sesión
					</p>
				</div>
			</div>
		</div>
	);
};

export default SideMenu;
