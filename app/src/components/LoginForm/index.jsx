import { Alert, Button, Col, Divider, Form, Image, Input, Row, Spin } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { LoginFormContainer } from './styled'

const LoginComponent = ({ onCancel, isReset, onUpdateReset }) => {
	const [showNotify, setShowNotify] = useState(false)
	const [form] = Form.useForm()
	const dispatch = useDispatch()
	const [isSpinning, setIsSprinning] = useState(false)

	useEffect(() => {
		if (isReset && onUpdateReset) {
			form.resetFields()
			onUpdateReset()
		}
	}, [isReset])

	const handleOnFinish = async ({ email, password }) => {
		console.log(email, password)
	}

	const onClose = () => {
		setShowNotify(false)
	}

	return (
		<LoginFormContainer>
			<Spin size="large" tip={'LOADING'} spinning={isSpinning}>
				<div className={'login_form'}>
					<Row gutter={100}>
						<Col span={24}>
							<h1>Đăng Nhập</h1>
						</Col>
					</Row>
					<Form
						form={form}
						initialValues={{
							email: '',
							password: '',
						}}
						onFinish={handleOnFinish}
					>
						<Form.Item
							name="email"
							rules={[
								{
									required: true,
									message: 'Email bắc buộc',
								},
								{
									pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
									message: 'Bạn cần nhập đúng định dạng mail',
								},
							]}
						>
							<Input size="large" placeholder="Email" />
						</Form.Item>
						<Form.Item
							name="password"
							rules={[{ required: true, message: 'Bạn phải nhập password' }]}
						>
							<Input.Password size="large" placeholder={'Password'} />
						</Form.Item>
						{showNotify && (
							<div className="tag_message--login-failed">
								<Alert
									message={'Login Thất bại'}
									type="error"
									closable
									onClose={onClose}
									showIcon
								/>
							</div>
						)}
						<Form.Item>
							<Button size="large" type="primary" htmlType="submit">
								Đăng nhập
							</Button>
						</Form.Item>
						<Divider>Hoặc</Divider>
						<Form.Item>
							<Button size="large" type="link" htmlType="button">
								<Row className="custom-ant-row" gutter={10}>
									<Col className="custom-ant-col">
										{/* <Image src={googleLogo} alt="Logo" height={22} /> */}
									</Col>
									<Col className="google-input">Google</Col>
								</Row>
							</Button>
						</Form.Item>
						<Form.Item>
							<Link to={''} onClick={(e) => e.preventDefault()}>
								<a>Quên mật khẩu</a>
							</Link>
						</Form.Item>
					</Form>
				</div>
			</Spin>
		</LoginFormContainer>
	)
}

export default LoginComponent
