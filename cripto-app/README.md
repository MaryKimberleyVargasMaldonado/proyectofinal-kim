https://codepen.io/piyushpd/pen/gOYvZPG

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../actions/auth";

export const Sidebar = () => {
// U S E D I S P A T C H
const dispatch = useDispatch();

    // U S E   S E L E C T O R
    const { name } = useSelector((state) => state.auth);

    // H A N D L E   L O G O U T
    const handleLogout = () => {
    	dispatch(startLogout());
    };

    // r e t u r n
    return (
    	<div className="container-fluid">
    		<div className="row flex-nowrap">
    			<div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
    				<div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
    					<a className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
    						<span className="fs-5 d-none d-sm-inline">Menu</span>
    					</a>

    					<ul
    						className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
    						id="menu"
    					>
    						{/* H    O    M    E    */}
    						<li className="nav-item">
    							{/* <Link to="/auth/menu" className="link"> */}
    							<a className="nav-link align-middle px-0">
    								<i className="fs-4 bi-house" />
    								<span className="ms-1 d-none d-sm-inline">Home</span>
    							</a>
    							{/* </Link> */}
    						</li>

    						{/* D   A   S   H   B   O   A   R   D */}
    						<li>
    							<a
    								href="#submenu1"
    								data-bs-toggle="collapse"
    								className="nav-link px-0 align-middle"
    							>
    								<i className="fs-4 bi-speedometer2"></i>
    								<span className="ms-1 d-none d-sm-inline">Dashboard</span>
    							</a>
    							<ul
    								className="collapse show nav flex-column ms-1"
    								id="submenu1"
    								data-bs-parent="#menu"
    							>
    								<li className="w-100">
    									{/* <Link to="/auth/ingresos" className="link"> */}
    									<a className="nav-link px-0">
    										<span className="d-none d-sm-inline">Ingresos</span>
    										{/* //TODO: Add icons */}
    									</a>
    									{/* </Link> */}
    								</li>
    								<li>
    									{/* <Link to="/auth/inversiones" className="link"> */}
    									<a className="nav-link px-0">
    										<span className="d-none d-sm-inline">Inversiones</span>
    									</a>
    									{/* </Link> */}
    								</li>
    							</ul>
    						</li>
    						<li>
    							{/* <Link to="/auth/metas" className="link"> */}
    							<a className="nav-link px-0 align-middle">
    								<i className="fs-4 bi-table"></i>

    								<span className="ms-1 d-none d-sm-inline">Metas</span>
    							</a>
    							{/* </Link> */}
    						</li>
    						{/* C    O    N    I    S   -    A   P   I  */}
    						<li>
    							<a
    								data-bs-toggle="collapse"
    								className="nav-link px-0 align-middle "
    							>
    								<i className="fs-4 bi-bootstrap bi-currency-exchange" />
    								<span className="ms-1 d-none d-sm-inline">Coin</span>
    								{/* <Link
    									className="ms-1 d-none d-sm-inline"
    									to="/criptocurrency"
    								>
    									Coin
    								</Link> */}
    							</a>
    							<ul
    								className="collapse nav flex-column ms-1"
    								id="submenu2"
    								data-bs-parent="#menu"
    							>
    								<li className="w-100">
    									<a href="#" className="nav-link px-0">
    										<span className="d-none d-sm-inline">
    											Criptocurrencies
    										</span>
    										1
    									</a>
    								</li>
    								<li>
    									<a href="#" className="nav-link px-0">
    										<span className="d-none d-sm-inline">Item</span> 2
    									</a>
    								</li>
    							</ul>
    						</li>
    						{/* E     D    U    C    A   C    I    Ó     N    -    F    I   N    A    N    C   I    E   R  A */}
    						<li>
    							<a
    								href="#submenu3"
    								data-bs-toggle="collapse"
    								className="nav-link px-0 align-middle"
    							>
    								<i className="fs-4 bi-grid"></i>
    								<span className="ms-1 d-none d-sm-inline">
    									Educación Financiera
    								</span>
    							</a>
    							<ul
    								className="collapse nav flex-column ms-1"
    								id="submenu3"
    								data-bs-parent="#menu"
    							>
    								<li className="w-100">
    									<a className="nav-link px-0">
    										<span className="d-none d-sm-inline">Podcast</span> 1
    									</a>
    								</li>
    							</ul>
    						</li>
    					</ul>
    					<hr />

    					{/* D  R  O  P  D  O  W  N  */}
    					<div className="dropdown pb-4">
    						<a
    							className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
    							id="dropdownUser1"
    							data-bs-toggle="dropdown"
    							aria-haspopup="true"
    							aria-expanded="false"
    						>
    							<img
    								src="https://res.cloudinary.com/djxrplltk/image/upload/v1643832019/zwgkcpqbxktnlqwbgyr5.jpg"
    								alt="hugenerd"
    								width="30"
    								height="30"
    								className="rounded-circle"
    							/>
    							<span className="d-none d-sm-inline mx-1">{name}</span>
    						</a>
    						<ul
    							className="dropdown-menu dropdown-menu-dark text-small shadow"
    							aria-labelledby="dropdownUser1"
    						>
    							{/* D R O P D O W N   L I S T  */}
    							<li>
    								<a className="dropdown-item">Settings</a>
    							</li>
    							<li>
    								<a className="dropdown-item">Profile</a>
    							</li>
    							<li>
    								<hr className="dropdown-divider" />
    							</li>
    							<li>
    								<a className="dropdown-item" onClick={handleLogout}>
    									Cerrar sesión
    								</a>
    							</li>
    						</ul>
    					</div>
    				</div>
    			</div>
    			{/* <MenuScreen /> */}
    		</div>
    	</div>
    );

};

    </div>
    			<div className="panel right-panel">
    				<div className="content">
    					<h3>¿Ya tienes usuario?</h3>
    					<p>
    						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
    						laboriosam ad deleniti.
    					</p>
    					<Link to="/auth/login" className="link">
    						<button className="btn transparent" id="sign-in-btn">
    							Inicia sesión
    						</button>
    					</Link>
    				</div>
    				<img src="../../img/register.svg" className="image" alt="registrar" />
