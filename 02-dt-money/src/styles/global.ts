import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	:root {
			--background: #F0F2F5;
			--blue: #5429CC;
			--blue-light: #6933ff;
			--green: #33CC95;
			--red: #E62E4D;
			--text-title: #363F5F;
			--text-body: #969CB3;
			--shape: #FFFFFF;
	}

	* {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
	}

	html {
			@media(min-width: 1080px){
					font-size: 62.5%; // 10px
			}

			@media(max-width: 1080px){
					font-size: 56.25%; // 9px
			}

			@media(max-width: 720px){
					font-size: 37.5%; // 8px
			}
	}

	body {
			background: var(--background);
			-webkit-font-smoothing: antialiased;
			font-family: 'Poppins', sans-serif;
	}
	
	border-style,input, textarea, button {
			font-family: 'Poppins', sans-serif;
			font-weight: 400;
	}

	h1, h2, h3, h4, h5, h6, strong {
			font-weight: 600;
	}

	button {
			cursor: pointer;
	}

	[disabled] {
			opacity: .6;
			cursor: not-allowed;
	}

	.react-modal-overlay{
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.5);
		height: 100vh;
		width: 100vw;

		display: flex;
		align-items: center;
		justify-content: center;
	}

	.react-modal-content {
		position: relative;
		border: .1rem solid #ccc;
		background: var(--background);
		-webkit-overflow-scrolling: touch;
		border-radius: .4rem;
		outline: none;
		padding: 2rem;
		width: 100%;
		max-width: 57.6rem;


		&__close-btn {
			position: absolute;
			right: 2rem;
			border: none;
		}
	}
`
