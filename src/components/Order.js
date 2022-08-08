// Imports
import React from "react";
import styled from "styled-components";
import hero from "../images/illustration-hero.svg";
import music from "../images/icon-music.svg";

// Component
const Order = ({ plan, price }) => {

	// Return
	return(
		<Wrapper>
			<div className="hero">
				<img src={ hero } alt="dancing women" />
			</div>
			<div className="orderArea">
				<h1>Order summary</h1>
				<p>You can now listen to millions of songs, audiobooks, 
					and podcasts on any device anywhere you like !</p>
				<div className="price">
					<span>
						<img src={ music } alt="note" />
						<p><b>{ plan }</b><br/>${ price }/year</p>
					</span><span>
						{/* eslint-disable-next-line */}
						<a href="#" onClick={ (e) => { e.preventDefault(); } }>
							Change
						</a>
					</span>
				</div>
				<button className="proceedBtn">Proceed to Payment</button>
				<button className="cancelBtn">Cancel order</button>
			</div>
		</Wrapper>
	);

};

// Styled
const Wrapper = styled.article`
	position: relative;
	width: calc(100% - 30px);
	max-width: 450px;
	background-color: white;
	border-radius: 10px;
	overflow: hidden;
	.hero{
		img{
			display: block;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	.orderArea{
		padding: 20px;
		text-align: center;
		h1{
			font-size: 24px;
			font-weight: 900;
			text-transform: capitalize;
			margin: 0 0 20px 0;
		}
		p{
			padding: 0 20px;
			margin: 0 0 25px 0;
			font-size: 16px;
			font-weight: 500;
			line-height: 1.5em;
			color: var(--desaturateBlue);
		}
		.price{
			padding: 20px;
			border-radius: 10px;
			background-color: var(--veryPaleBlue);
			margin: 0 0 30px 0;
			span{
				display: inline-block;
				vertical-align: middle;
				&:first-of-type{
					width: 70%;
					text-align: left;
				}
				&:last-of-type{
					width: 30%;
					text-align: right;
				}
				img{
					display: inline-block;
					vertical-align: bottom;
					margin: 0 20px 0 0;
				}
				p{
					display: inline-block;
					padding: 0;
					margin: 0;
					b{
						font-weight: 900;
						color: var(--darkBlue);
						text-transform: capitalize;
					}
				}
				a{
					text-decoration: underline;
					font-weight: 700;
					font-size: 14px;
					color: var(--brightBlue);
				}
			}
		}
		.proceedBtn{
			display: block;
			width: 100%;
			padding: 15px;
			margin: 0 0 10px 0;
			border: none;
			border-radius: 10px;
			background-color: var(--brightBlue);
			color: white;
			font-family: var(--redHat);
			font-size: 16px;
			font-weight: 900;
			box-shadow: 0 10px 10px rgba(56, 42, 225, 0.2);
		}
		.cancelBtn{
			display: block;
			width: 100%;
			padding: 15px;
			border: none;
			background-color: transparent;
			color: var(--desaturateBlue);
			font-family: var(--redHat);
			font-size: 14px;
			font-weight: 900;
			text-transform: capitalize;
		}
	}
	@media only screen and (min-width: 1024px){
		.orderArea{
			padding: 40px;
			h1{
				font-size: 28px;
			}
		}
	}
	html.no-touchevents &{
		a{
			&:hover{
				color: var(--hover);
				text-decoration: none;
			}
		}
		.proceedBtn{
			transition: 0.35s background ease-in-out;
			&:hover{
				background-color: var(--hover);
			}
		}
		.cancelBtn{
			transition: 0.35s color ease-in-out;
			&:hover{
				color: var(--darkBlue);
			}
		}
	}
`;

// Export
export default Order;