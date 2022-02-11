import "../../assets/Home.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState } from "react";
import SideMenu, { menuItems } from "./Sidebar";
import { Criptocoin } from "./Criptocoin";
import { Metas } from "./Metas";

const Dashboard = () => <main>hola</main>;
const Criptomonedas = () => <h1></h1>;
const Criptocoins = () => <main>{<Criptocoin />}</main>;
const Videos = () => <h1>Content/Videos</h1>;
const Design = () => <h1>Design</h1>;
const Content2 = () => <h1>Content2</h1>;
const Courses2 = () => <h1>Content/Courses 2</h1>;
const Videos2 = () => <h1>Content/Videos 2</h1>;
const Design2 = () => <h1>Design 2</h1>;

function HomeScreen() {
	const [inactive, setInactive] = useState(false);

	return (
		<div className="Home">
			<Router>
				<SideMenu
					onCollapse={(inactive) => {
						console.log(inactive);
						setInactive(inactive);
					}}
				/>

				<div className={`containerH ${inactive ? "inactive" : ""}`}>
					{menuItems.map((menu, index) => (
						<>
							<Route key={menu.name} exact={menu.exact} path={menu.to}>
								<h1 key={index + 1}>{menu.screen}</h1>
							</Route>
							{menu.subMenus && menu.subMenus.length > 0
								? menu.subMenus.map((subMenu, i) => (
										<Route key={subMenu.name} path={subMenu.to}>
											<h1 key={i}>{subMenu.screen}</h1>
										</Route>
								  ))
								: null}
						</>
					))}
				</div>
			</Router>
		</div>
	);
}

export default HomeScreen;
