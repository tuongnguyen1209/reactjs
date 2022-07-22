import styled from 'styled-components'

export const RegisterFormContainer = styled.div`
	.register_form {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		border-radius: 4px;

		h3 {
			color: black;
		}

		h1 {
			text-align: center;
			color: #001650;
			float: none;
			margin-top: 45%;
			font-size: 24.88px;
			width: 95px;
		}

		a {
			color: colors.$royal-blue-color2;
		}

		form {
			div.custom-ant-col {
				padding-top: 5px;
			}

			div.ant-form-item-control-input-content {
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: center;

				button.ant-btn {
					background-color: colors.$royal-blue-color2;
					color: white;
					border: none;
					width: 370px;
					box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
					border-radius: 2px;
				}

				button.ant-btn-link {
					background-color: white;
					color: black;
					height: 50px;
				}

				div.custom-ant-row {
					display: flex;
					flex-direction: row;
					justify-content: center;
					align-items: center;
					color: #7e7e7e;
				}
			}
		}
	}
`
