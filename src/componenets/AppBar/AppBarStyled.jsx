import styled from "styled-components";

export const HeaderNav = styled.header`
    
	position: fixed;
	width: 100vw;
	height: 18em;
	

    &::before {
	content: "";
	display: block;
	position: absolute;
	left: 0;
	bottom: 6em;
	width: 100%;
	height: calc(18em + 10em);
	z-index: -1;
	transform: skewY(-3.5deg);
	background:
		linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)),
		url(https://images.unsplash.com/photo-1495464101292-552d0b52fe41?auto=format&fit=crop&w=1350&q=80) no-repeat center,
		linear-gradient(#4e4376, #2b5876);
	background-size: cover;
	border-bottom: .2em solid #fff;
}


`;