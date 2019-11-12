import { createGlobalStyle } from 'styled-components';
import { rem,rgba } from 'polished';

const GlobalStyles = createGlobalStyle`

a, a:focus, a:hover {
	color: inherit;
	display: inline-block;
	text-decoration: none;
	-webkit-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
	-moz-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
	transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s
}
img{
	max-width: 100%;
}
.container{
	margin: 0 auto;
	max-width: ${rem('1170px')};
	overflow: auto;
	padding: 0 ${rem('15px')};
	width: 100%;
}
.margin-top{
	margin-top: ${rem('30px')};
}
h1, h2, h3, h4, h5, h6 {
	margin-top: 0;
}
h1{
	font-size: ${rem('44px')};
	font-weight: ${({ theme }) => theme.__OriginateLib.fontWeight.semiBold};
	line-height: ${rem('64px')};
}
h2{
	font-size: ${rem('32px')};
	font-weight: ${({ theme }) => theme.__OriginateLib.fontWeight.semiBold};
	line-height: ${rem('48px')};
}
h3{
	font-size: ${rem('24px')};
	font-weight: ${({ theme }) => theme.__OriginateLib.fontWeight.semiBold};
	line-height: ${rem('32px')};
}
h4{
	font-size: ${rem('20px')};
	font-weight: ${({ theme }) => theme.__OriginateLib.fontWeight.semiBold};
	line-height: ${rem('27px')};
  color:${({ theme }) => theme.__OriginateLib.colors.text3};
}
h5{
	font-size: ${rem('16px')};
	font-weight: ${({ theme }) => theme.__OriginateLib.fontWeight.semiBold};
	line-height: ${rem('24px')};
}
h6{
	font-size: ${rem('14px')};
	font-weight: ${({ theme }) => theme.__OriginateLib.fontWeight.semiBold};
	line-height: ${rem('27px')};
  color:${({ theme }) => theme.__OriginateLib.colors.text3};
}
::-moz-selection {
	background: ${({ theme }) => theme.__OriginateLib.colors.primary};
	color: #ffffff;
	opacity: 1;
	text-shadow: none;
}
::selection {
	background: ${({ theme }) => theme.__OriginateLib.colors.primary};
	color: #ffffff;
	opacity: 1;
	text-shadow: none;
}
.center-text{
	text-align: center;
}
.left-text{
	text-align: left;
}

.right-text{
	text-align: right;
}
.bold-text{
	font-weight: ${({ theme }) => theme.__OriginateLib.fontWeight.semiBold};
}
.rwt__tablist:not([aria-orientation="vertical"]) .rwt__tab[aria-selected="true"]:after {
	border-bottom: 3px solid  ${({ theme }) => theme.__OriginateLib.colors.primary} !important;
}
.rwt__tab {
	color:${({ theme }) => theme.__OriginateLib.colors.text2};
	font-size: ${rem('12px')} !important;
	font-weight: ${({ theme }) => theme.__OriginateLib.fontWeight.semiBold};
	letter-spacing: 0.05em;
}

.rwt__tab[aria-selected="true"] {
	color:  ${({ theme }) => theme.__OriginateLib.colors.primary};
	position: relative;
}
.rwt__tab[aria-selected="false"]:hover, .rwt__tab:focus {
	outline: 0;
	background-color: transparent !important;
}

.no-loan{
	color:${({ theme }) => theme.__OriginateLib.colors.text2};
	text-align: center;

	h3{
		font-size: ${rem('28px')};
		font-weight: ${({ theme }) => theme.__OriginateLib.fontWeight.regular};
		line-height:  ${rem('35px')};
		margin: 0 auto  ${rem('40px')};
		max-width:  ${rem('500px')};
	}

	.smiley-holder{
		margin: 0 0  ${rem('30px')};

		svg{
			width: 45px;
		}

	}
}
div.rwt__tablist {
	@include phone{
		display: block;
		overflow-y: auto;
		width: 100%;
		white-space: nowrap;
	}
}
.secure-iframe--holder{
	height: 100vh;
	left: 0;
	padding: 0;
	position: fixed;
	top: 0;
	width: 100vw;
	z-index: 99;

	iframe{
		background: ${({ theme }) => theme.__OriginateLib.colors.white};
		box-shadow: 0 4px 13px ${({ theme }) => rgba(theme.__OriginateLib.colors.black, 0.25)};
		border: none;
		border-radius: ${rem('10px')};
		height: ${rem('500px')};
		max-width: ${rem('450px')};
		padding: 0;
		margin: 0 auto;
		transform: translateY(50%);
		width: 100%;
	}
  &:before{
		background: ${({ theme }) => rgba(theme.__OriginateLib.colors.black, 0.4)};
		bottom: 0;
		content: "";
		height: 100%;
		left: 0;
		position: absolute;
		right: 0;
		top: 0;
		width: 100%;
		z-index: -1;
	}
}
.hidden {
	opacity: 0;
}
.resend-otp,
.resend-verification{
	color:  ${({ theme }) => theme.__OriginateLib.colors.secondary};
	cursor: pointer;
	font-weight:  ${({ theme }) => theme.__OriginateLib.fontWeight.semibold};;
	text-decoration: underline;
	transition: 0.3s;

	&:hover{
		text-decoration: none;
	}
}

`;

export  {GlobalStyles};