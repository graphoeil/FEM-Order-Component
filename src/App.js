// Imports
import React, { useEffect } from "react";
import styled from "styled-components";
import "./css/displayMain.css";
import { useDispatch } from "react-redux";
import { setIsTouch } from "./store/features/orderSlice";
import mobileBCG from "./images/pattern-background-mobile.svg";
import desktopBCG from "./images/pattern-background-desktop.svg";
import Order from "./components/Order";

// Modernizr
const Modernizr = window.Modernizr;

// Component
const App = () => {

	// Dispatch
	const dispatch = useDispatch();

	// Is touch
	useEffect(() => {
		if (Modernizr.touchevents){
			dispatch(setIsTouch());
		}
	},[dispatch]);

	// Return
	return(
		<Wrapper mobileBCG={ mobileBCG } desktopBCG={ desktopBCG }>
			<Order plan="Annual plan" price="59.99"/>
		</Wrapper>
	);
	
};

// Styled
const Wrapper = styled.main`
	display: flex;
	justify-content: center;
	align-items: center;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-image: url(${ props => props.mobileBCG });
	background-repeat: no-repeat;
	background-size: 180%;
	background-position: top center;
	@media only screen and (min-width: 1024px){
		background-image: url(${ props => props.desktopBCG });
		background-size: contain;
	}
`;

// Export
export default App;