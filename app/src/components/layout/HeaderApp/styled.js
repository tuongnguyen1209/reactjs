import styled from 'styled-components'

export const HeaderAppContainer = styled.div`
	.d-flex {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.logo {
		width: 10%;
		height: 64px;
		cursor: pointer;

		a {
			font-size: 2rem;
			color: white;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
	.menu {
		width: 100%;
		&-custom {
			padding: 0 12%;
		}
	}
	.app-header {
		background-color: #001650;
		padding: 0 12%;
	}
	.nav-right {
		color: white;
		.ant-btn-link {
			color: white;
		}
	}
`
