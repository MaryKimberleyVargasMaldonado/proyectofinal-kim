import React from "react";
import "../../styles/side.css";
import { LoginScreen } from "../auth/LoginScreen";

export const Sidebar = () => {
	return (
		<div className="container-fluid">
			<div className="row flex-nowrap">
				<div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
					<div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
						<a
							href="/"
							className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
						>
							<span className="fs-5 d-none d-sm-inline">Menu</span>
						</a>
						<ul
							className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
							id="menu"
						>
							<li className="nav-item">
								<a href="#" className="nav-link align-middle px-0">
									<i className="fs-4 bi-house" />
									<span className="ms-1 d-none d-sm-inline">Home</span>
								</a>
							</li>
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
										<a href="#" className="nav-link px-0">
											<span className="d-none d-sm-inline">Ingresos</span>
											{/* //TODO: Add icons */}
										</a>
									</li>
									<li>
										<a href="#" className="nav-link px-0">
											<span className="d-none d-sm-inline">Inversiones</span>
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="#" className="nav-link px-0 align-middle">
									<i className="fs-4 bi-table"></i>
									<span className="ms-1 d-none d-sm-inline">Metas</span>
								</a>
							</li>
							<li>
								<a
									href="#submenu2"
									data-bs-toggle="collapse"
									className="nav-link px-0 align-middle "
								>
									<i className="fs-4 bi-bootstrap bi-currency-exchange" />
									<span className="ms-1 d-none d-sm-inline">Coin</span>
								</a>
								<ul
									className="collapse nav flex-column ms-1"
									id="submenu2"
									data-bs-parent="#menu"
								>
									<li className="w-100">
										<a href="#" className="nav-link px-0">
											<span className="d-none d-sm-inline">Cripto</span> 1
										</a>
									</li>
									<li>
										<a href="#" className="nav-link px-0">
											<span className="d-none d-sm-inline">Item</span> 2
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a
									href="#submenu3"
									data-bs-toggle="collapse"
									className="nav-link px-0 align-middle"
								>
									<i className="fs-4 bi-grid"></i>{" "}
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
										<a href="#" className="nav-link px-0">
											<span className="d-none d-sm-inline">Podcast</span> 1
										</a>
									</li>
									{/* <li>
										<a href="#" className="nav-link px-0">
											<span className="d-none d-sm-inline">Product</span> 2
										</a>
									</li>
									<li>
										<a href="#" className="nav-link px-0">
											<span className="d-none d-sm-inline">Product</span> 3
										</a>
									</li>
									<li>
										<a href="#" className="nav-link px-0">
											<span className="d-none d-sm-inline">Product</span> 4
										</a>
									</li> */}
								</ul>
							</li>
							{/* <li>
								<a href="#" className="nav-link px-0 align-middle">
									<i className="fs-4 bi-people"></i>
									<span className="ms-1 d-none d-sm-inline">Customers</span>
								</a>
							</li> */}
						</ul>
						<hr />

						<div className="dropdown pb-4">
							<a
								href="#"
								className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
								id="dropdownUser1"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								<img
									src="https://res.cloudinary.com/djxrplltk/image/upload/v1643832019/zwgkcpqbxktnlqwbgyr5.jpg"
									alt="hugenerd"
									width="30"
									height="30"
									className="rounded-circle"
								/>
								<span className="d-none d-sm-inline mx-1">Kim</span>
							</a>
							<ul
								className="dropdown-menu dropdown-menu-dark text-small shadow"
								aria-labelledby="dropdownUser1"
							>
								<li>
									<a className="dropdown-item" href="#">
										New project...
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Settings
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Profile
									</a>
								</li>
								<li>
									<hr className="dropdown-divider" />
								</li>
								<li>
									<a className="dropdown-item" href={<LoginScreen />}>
										Cerrar sesión
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				{/* <div className="col py-3">
					<h3>Left Sidebar with Submenus</h3>
					<p className="lead">
						An example 2-level sidebar with collasible menu items. The menu
						functions like an "accordion" where only a single menu is be open at
						a time. While the sidebar itself is not toggle-able, it does
						responsively shrink in width on smaller screens.
					</p>
					<ul className="list-unstyled">
						<li>
							<h5>Responsive</h5> shrinks in width, hides text labels and
							collapses to icons only on mobile
						</li>
					</ul>
				</div> */}
			</div>
			<div class="dropdown show">
				<a
					class="btn btn-secondary dropdown-toggle"
					href="#"
					role="button"
					id="dropdownMenuLink"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false"
				>
					Dropdown link
				</a>

				<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
					<a class="dropdown-item" href="#">
						Action
					</a>
					<a class="dropdown-item" href="#">
						Another action
					</a>
					<a class="dropdown-item" href="#">
						Something else here
					</a>
				</div>
			</div>
		</div>
	);
};
