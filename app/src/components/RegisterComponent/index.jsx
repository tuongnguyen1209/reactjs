import { Button, Col, Divider, Form, Input, Row, Spin } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { RegisterFormContainer } from './styled'

const RegisterComponent = ({ onCancel, isReset, onUpdateReset, onOpenLogin }) => {
	const [isSubmit, setIsSubmit] = useState(false)
	const [form] = Form.useForm()
	const [field, setField] = useState([{ name: 'email', errors: [] }])
	const [isSpinning, setIsSprinning] = useState(false)

	const handleOnOpenLogin = () => {
		if (onOpenLogin) {
			onOpenLogin()
		}
	}

	useEffect(() => {
		if (isReset && onUpdateReset) {
			form.resetFields()
			onUpdateReset()
		}
	}, [isReset])

	const handleOnFinish = async (value) => {
		setIsSprinning(true)
		console.log(value)
		setIsSprinning(false)
	}

	return (
		<RegisterFormContainer>
			<Spin size="large" tip={'LOADING'} spinning={isSpinning}>
				<div className={'register_form'}>
					<Row gutter={100}>
						<Col span={24}>
							<h1>Đăng Ký </h1>
						</Col>
					</Row>
					<Form
						form={form}
						initialValues={{
							email: '',
							username: '',
							password: '',
							repassword: '',
						}}
						onFinish={handleOnFinish}
						fields={field}
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
							name="username"
							rules={[{ required: true, message: 'Bạn phải nhập username' }]}
						>
							<Input size="large" placeholder="Username" />
						</Form.Item>
						<Form.Item
							name="password"
							dependencies={['password']}
							rules={[{ required: true, message: 'Bạn phải nhập password' }]}
						>
							<Input.Password size="large" placeholder={'Nhập password'} />
						</Form.Item>
						<Form.Item
							name="repassword"
							rules={[
								{
									required: true,
									message: 'Bạn phải nhập password!',
								},
								({ getFieldValue }) => ({
									validator(_, value) {
										if (!value || getFieldValue('password') === value) {
											return Promise.resolve()
										}

										return Promise.reject(new Error('2 password phải giống nhau'))
									},
								}),
							]}
						>
							<Input.Password size="large" placeholder={'Nhập lại password'} />
						</Form.Item>

						<Form.Item>
							<Button size="large" type="primary" htmlType="submit">
								Tạo tài khoảng
							</Button>
						</Form.Item>
						<Divider>Hoặc</Divider>
						<Form.Item>
							<Button size="large" type="link" htmlType="button">
								<Row className="custom-ant-row" gutter={10}>
									<Col className="custom-ant-col">
										{/* <Image src={googleLogo} alt="Logo" height={22} /> */}
									</Col>
									<Col>Google</Col>
								</Row>
							</Button>
						</Form.Item>
						<Form.Item>
							<Link to="/" locale="vi">
								Quên mật khẩu
							</Link>
						</Form.Item>
					</Form>
				</div>
			</Spin>
		</RegisterFormContainer>
	)
}

export default RegisterComponent
