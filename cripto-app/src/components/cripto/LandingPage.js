import React from "react";
import {
	Card,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
	CardImg,
} from "reactstrap";

export const LandingPage = () => {
	return (
		<div>
			<div className="col-2">
				<div className="row-3">
					<Card style={{ width: "20rem" }}>
						{/* <CardImg style={{ width: "18rem" }} variant="top" /> */}
						<CardBody>
							<CardTitle className="mb-2 text-muted text-size-small">
								Criptomonedas
							</CardTitle>
							{/* <CardText className="text-size-small">
						Revisa las actualizaciones en el mercado de las criptomonedas.
					</CardText> */}
							<img src="../../img/menub.png" className="image" alt="login" />

							{/* <CardImg
						style={{ width: "10rem" }}
						variant="top"
						src="../../assets/menub.png"
						alt="criptocoins"
					/> */}
							{/* <button>Ir</button> */}
						</CardBody>
					</Card>
					<Card style={{ width: "20rem" }} className="mt-5">
						<CardBody>
							<CardTitle className="mb-2 text-muted text-size-small">
								Convertidor
							</CardTitle>

							<img src="../../img/conv.png" className="image" alt="login" />
						</CardBody>
					</Card>
				</div>
			</div>
		</div>
	);
};
