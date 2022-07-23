import { ShoppingCartOutlined } from '@ant-design/icons'
import { Avatar, Badge, Button, Drawer, Dropdown, Image, Layout, Menu, Modal, Space } from 'antd'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { Link, useNavigate } from 'react-router-dom'
import { authAction } from 'src/app/slices/AuthSlice'
import CartComponent from 'src/components/CartComponents'
import LoginComponent from 'src/components/LoginForm'
import RegisterComponent from 'src/components/RegisterComponent'
import { APP_MENU_LIST } from 'src/constants/appMenu'
import { ROUTERS_BASE } from 'src/constants/common'
import { HeaderAppContainer } from './styled'

const Logo = () => {
	return (
		<svg width="85" height="42" viewBox="0 0 85 42" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M35.7208 6.46191H2.83099V40.5477H35.7208V6.46191Z" fill="#009245" />
			<path
				d="M21.2896 1.12843C22.1159 1.12977 22.9081 1.45808 23.4924 2.04141C24.0768 2.62474 24.4056 3.41553 24.407 4.24048V9.36145H14.1931V4.24048C14.1937 3.41488 14.5227 2.62333 15.1078 2.03978C15.6928 1.45623 16.486 1.12843 17.313 1.12843H21.2896ZM21.2896 0H17.313C16.7553 -9.922e-08 16.203 0.109702 15.6878 0.322837C15.1726 0.535972 14.7045 0.848364 14.3103 1.24216C13.916 1.63596 13.6034 2.10345 13.3902 2.61791C13.177 3.13238 13.0674 3.68373 13.0677 4.24048V10.5H25.5272V4.24048C25.5272 3.11759 25.0811 2.04054 24.2867 1.24558C23.4922 0.450627 22.4144 0.00267994 21.2896 0V0Z"
				fill="#006837"
			/>
			<path
				d="M32.8037 42H5.86984C4.31306 42 2.82004 41.3826 1.71924 40.2837C0.618428 39.1848 0 37.6943 0 36.1402L0 9.04517H38.6735V36.1402C38.6735 37.6943 38.0551 39.1848 36.9543 40.2837C35.8535 41.3826 34.3604 42 32.8037 42Z"
				fill="#00A300"
			/>
			<path
				d="M32.3221 25.9742C32.2511 26.0349 32.1751 26.0931 32.1067 26.1614L25.5779 32.674C25.1774 33.0712 24.9975 33.0712 24.592 32.674C24.4044 32.4893 24.2169 32.3046 24.0344 32.1148C23.9726 32.0708 23.9223 32.0127 23.8876 31.9454C23.8529 31.8781 23.8348 31.8034 23.8348 31.7277C23.8348 31.652 23.8529 31.5773 23.8876 31.51C23.9223 31.4427 23.9726 31.3846 24.0344 31.3406C24.3892 30.9763 24.7542 30.6195 25.1141 30.2602C26.6499 28.727 28.1875 27.1962 29.7268 25.6681C29.8991 25.4985 29.8763 25.415 29.7268 25.2658C27.8564 23.4103 25.9901 21.5499 24.1281 19.6843C23.7505 19.3073 23.7505 19.115 24.1281 18.7381L24.5844 18.2649C25.0051 17.8449 25.1724 17.8424 25.5981 18.2649L32.132 24.7952C32.1954 24.8584 32.2587 24.9166 32.3221 24.9773V25.9742Z"
				fill="white"
			/>
			<path
				d="M22.5568 15.9549C22.4732 16.256 22.3794 16.5925 22.2805 16.929C20.5081 23.0435 18.734 29.1588 16.9582 35.2749C16.8188 35.7531 16.6489 35.8493 16.1649 35.7177C15.9368 35.657 15.7061 35.6013 15.478 35.533C15.0928 35.4217 14.9711 35.2091 15.0902 34.8144C15.5667 33.1648 16.0441 31.516 16.5222 29.8681L20.6509 15.6614C20.7953 15.1554 20.9651 15.0694 21.4619 15.206C21.7154 15.2718 21.9536 15.3325 22.1969 15.4084C22.3137 15.4395 22.4149 15.5123 22.4813 15.6131C22.5477 15.7139 22.5746 15.8356 22.5568 15.9549Z"
				fill="white"
			/>
			<path
				d="M12.533 17.9639C12.6075 17.9627 12.6813 17.978 12.7492 18.0087C12.8171 18.0393 12.8774 18.0844 12.9258 18.141C13.1336 18.3468 13.3389 18.5517 13.5417 18.7558C13.8813 19.0974 13.8813 19.3099 13.5417 19.6464C12.3099 20.876 11.079 22.1048 9.84896 23.3328C9.19506 23.983 8.54877 24.6409 7.88474 25.281C7.73267 25.4302 7.75295 25.5062 7.88474 25.6453C9.75518 27.5007 11.6214 29.3562 13.4834 31.2116C13.8838 31.6113 13.8838 31.796 13.4834 32.1958C13.2958 32.383 13.1134 32.5702 12.9233 32.7524C12.6394 33.0257 12.4164 33.0282 12.1249 32.7524L9.47386 30.1084C8.14748 28.786 6.82195 27.4653 5.49727 26.1463C5.37636 26.0255 5.30496 25.864 5.29705 25.6934C5.23115 25.1874 5.43391 24.8407 5.80394 24.4865C7.90755 22.4042 9.99342 20.3068 12.0894 18.2169C12.1401 18.1446 12.2061 18.0845 12.2828 18.0407C12.3595 17.997 12.4449 17.9707 12.533 17.9639Z"
				fill="white"
			/>
			<path
				d="M34.887 7.91673L35.7361 6.46191H18.2203H18.0835H2.83101L3.68259 7.91673L0 9.04517H18.0835H18.2203H38.5671L34.887 7.91673Z"
				fill="#006837"
			/>
			<path
				d="M23.2208 3.40555C24.0431 3.40622 24.8315 3.73279 25.4128 4.31349C25.994 4.89419 26.3205 5.68151 26.3205 6.50241V9.36145H12.2719V6.50241C12.2726 5.68172 12.5993 4.89479 13.1804 4.31423C13.7614 3.73367 14.5494 3.40689 15.3716 3.40555H23.2284H23.2208ZM23.2284 2.26193H15.3716C14.8137 2.26193 14.2614 2.37162 13.746 2.58472C13.2306 2.79782 12.7624 3.11018 12.3679 3.50394C11.5713 4.29919 11.1238 5.37777 11.1238 6.50241V10.5H27.4686V6.50241C27.4686 5.37777 27.0211 4.29919 26.2244 3.50394C25.4278 2.7087 24.3474 2.26193 23.2208 2.26193H23.2284Z"
				fill="#00A300"
			/>
			<path
				d="M47.3668 26.0603C46.7624 25.7388 46.2734 25.2374 45.9677 24.6257C45.6288 23.9154 45.4638 23.135 45.4862 22.3486V19.2466C45.4636 18.4602 45.6286 17.6797 45.9677 16.9695C46.2745 16.3573 46.7631 15.8545 47.3668 15.5299C48.0483 15.1787 48.8075 15.0046 49.5743 15.0239C50.2383 15.0123 50.8942 15.1699 51.4802 15.4818C52.051 15.7968 52.529 16.2556 52.8666 16.8127C53.2566 17.4584 53.515 18.1746 53.6269 18.9203H51.4194C51.3495 18.5806 51.2181 18.2564 51.0316 17.9639C50.874 17.7147 50.6583 17.5073 50.4031 17.3592C50.15 17.2178 49.8642 17.1454 49.5743 17.1492C49.2198 17.1415 48.8697 17.2288 48.5605 17.4022C48.2783 17.5684 48.0543 17.8176 47.9193 18.1157C47.7639 18.4712 47.6886 18.8564 47.6988 19.2441V22.3435C47.6881 22.7305 47.7634 23.115 47.9193 23.4694C48.0557 23.7659 48.2794 24.0139 48.5605 24.1804C48.8701 24.3526 49.2199 24.4399 49.5743 24.4334C49.8669 24.4381 50.1558 24.3675 50.4132 24.2285C50.6712 24.0843 50.8884 23.8771 51.0443 23.6263C51.2265 23.3313 51.3528 23.0054 51.4169 22.6648H53.6244C53.5096 23.4098 53.2514 24.1255 52.864 24.7724C52.526 25.3282 52.0491 25.7867 51.4802 26.1033C50.8962 26.4155 50.2418 26.5732 49.5794 26.5612C48.8115 26.5815 48.0508 26.4092 47.3668 26.0603Z"
				fill="white"
			/>
			<path
				d="M57.2993 26.0349C56.6834 25.7005 56.1793 25.1929 55.8496 24.5751C55.4988 23.9016 55.3245 23.1504 55.3427 22.3916V19.1935C55.3248 18.4339 55.4991 17.682 55.8496 17.0075C56.18 16.3909 56.684 15.8843 57.2993 15.5501C57.9702 15.2109 58.7117 15.0341 59.4638 15.0341C60.2158 15.0341 60.9573 15.2109 61.6282 15.5501C62.2441 15.8835 62.7483 16.3903 63.0779 17.0075C63.4284 17.682 63.6028 18.4339 63.5848 19.1935V22.3916C63.6031 23.1504 63.4287 23.9016 63.0779 24.5751C62.749 25.1934 62.2448 25.7012 61.6282 26.0349C60.9573 26.3742 60.2158 26.5509 59.4638 26.5509C58.7117 26.5509 57.9702 26.3742 57.2993 26.0349ZM60.475 24.1804C60.7624 24.0192 60.996 23.7772 61.1467 23.4846C61.3113 23.1631 61.3932 22.8057 61.3849 22.4447V19.1378C61.3926 18.7769 61.3108 18.4197 61.1467 18.098C60.9958 17.806 60.7623 17.5649 60.475 17.4047C60.1618 17.2426 59.8141 17.1579 59.4612 17.1579C59.1084 17.1579 58.7607 17.2426 58.4475 17.4047C58.164 17.5665 57.9341 17.8075 57.786 18.098C57.623 18.4201 57.5413 18.777 57.5477 19.1378V22.4447C57.5406 22.8056 57.6224 23.1627 57.786 23.4846C57.9366 23.7772 58.1702 24.0192 58.4576 24.1804C58.7713 24.3409 59.1188 24.4246 59.4714 24.4246C59.8239 24.4246 60.1714 24.3409 60.4852 24.1804H60.475Z"
				fill="white"
			/>
			<path
				d="M65.8481 15.1504H67.9771V26.4347H65.8481V15.1504ZM66.9101 24.3853H69.6219C70.2082 24.4222 70.7875 24.242 71.2491 23.8793C71.4447 23.6982 71.5978 23.4761 71.6973 23.2289C71.7968 22.9817 71.8402 22.7157 71.8244 22.4498V19.1302C71.8401 18.8668 71.7976 18.6031 71.7 18.3578C71.6023 18.1125 71.4518 17.8917 71.2592 17.7108C70.7977 17.3481 70.2183 17.1679 69.6321 17.2048H66.9101V15.1554H69.5763C70.4066 15.1321 71.2317 15.2938 71.9917 15.6286C72.6302 15.9198 73.1618 16.4028 73.5123 17.01C73.8762 17.681 74.0563 18.4359 74.0344 19.1986V22.3916C74.0504 23.1316 73.8759 23.8634 73.5276 24.5169C73.1833 25.1316 72.6576 25.6254 72.0221 25.9312C71.2544 26.2894 70.4132 26.4627 69.5662 26.4372H66.9101V24.3853Z"
				fill="white"
			/>
			<path
				d="M76.2876 15.1504H78.4191V26.4347H76.2876V15.1504ZM77.0479 15.1504H83.8505V17.2048H77.0657L77.0479 15.1504ZM77.0479 19.8058H82.9963V21.8552H77.0657L77.0479 19.8058ZM77.0479 24.3853H83.8505V26.4347H77.0657L77.0479 24.3853Z"
				fill="white"
			/>
			<path
				d="M46.1274 30.6878H46.8446L46.9207 31.3811H46.9435C47.2147 30.8928 47.5391 30.5588 48.1474 30.5588C48.6695 30.5588 48.9964 30.8624 49.1485 31.4696C49.4526 30.9054 49.777 30.5588 50.3853 30.5588C51.1228 30.5588 51.5588 31.1331 51.5588 32.1831V35.9555H50.6666V32.2489C50.6666 31.6417 50.4943 31.3279 50.104 31.3279C49.7137 31.3279 49.5388 31.5987 49.2549 32.1401V35.9555H48.4312V32.2489C48.4312 31.6417 48.2791 31.3279 47.8888 31.3279C47.4985 31.3279 47.2806 31.5987 47.0195 32.1401V35.9555H46.1274V30.6878Z"
				fill="white"
			/>
			<path
				d="M52.8741 34.5918C52.8741 33.4077 53.9817 32.8334 56.7063 32.6183C56.6759 31.9023 56.3261 31.295 55.3072 31.295C54.6458 31.3353 54.0075 31.5529 53.4596 31.925L53.1023 31.3178C53.8036 30.8543 54.6189 30.5918 55.4593 30.5588C56.9014 30.5588 57.6085 31.414 57.6085 32.7271V35.9555H56.8482L56.7722 35.242H56.7418C56.1639 35.6975 55.4035 36.0871 54.666 36.0871C53.6877 36.0871 52.8741 35.533 52.8741 34.5918ZM56.7063 34.5791V33.2129C54.4481 33.3875 53.7637 33.8328 53.7637 34.526C53.7637 35.1231 54.3061 35.3609 54.9144 35.3609C55.5227 35.3609 56.098 35.0776 56.7063 34.5791Z"
				fill="white"
			/>
			<path
				d="M60.0974 30.6878H60.8451L60.9338 31.9352H60.954C61.1957 31.5232 61.5394 31.1802 61.9522 30.9392C62.365 30.6981 62.833 30.5671 63.3111 30.5588C63.6707 30.5453 64.0281 30.6191 64.3528 30.7739L64.1475 31.5455C63.8356 31.4253 63.5035 31.366 63.1692 31.371C62.3759 31.371 61.6282 31.7733 60.9971 32.889V35.9657H60.0974V30.6878Z"
				fill="white"
			/>
			<path
				d="M66.1776 28.2387H67.0799V33.4533H67.123L69.9514 30.6878H70.983L67.0748 34.526V35.9555H66.1725L66.1776 28.2387ZM68.2052 33.1598L68.7476 32.5753L71.2668 35.9555H70.2682L68.2052 33.1598Z"
				fill="white"
			/>
			<path
				d="M72.2933 33.3116C72.2791 32.9516 72.3386 32.5926 72.4682 32.2564C72.5977 31.9202 72.7946 31.6139 73.0468 31.3562C73.2989 31.0986 73.6011 30.895 73.9348 30.7578C74.2684 30.6207 74.6266 30.553 74.9874 30.5588C76.5081 30.5588 77.3977 31.5455 77.3977 33.0307C77.396 33.212 77.3816 33.3929 77.3546 33.5722H72.8914V32.8916H76.8224L76.5943 33.1446C76.5943 31.8972 75.9759 31.2799 75.0077 31.2799C74.0395 31.2799 73.1829 32.0187 73.1829 33.3293C73.1829 34.6955 74.075 35.3888 75.2459 35.3888C75.821 35.3842 76.3814 35.208 76.8553 34.8828L77.1797 35.4672C76.5822 35.875 75.8759 36.0945 75.1522 36.0972C73.5529 36.0871 72.2933 35.0675 72.2933 33.3116Z"
				fill="white"
			/>
			<path
				d="M80.3073 33.9036V31.4089H78.8221V30.741L80.3428 30.6878L80.4619 28.9977H81.2222V30.6878H83.8074V31.414H81.2222V33.9188C81.2222 34.8625 81.5365 35.3483 82.5579 35.3483C82.9915 35.3492 83.4214 35.2685 83.8251 35.1105L84.0203 35.7734C83.4941 35.9775 82.9349 36.0838 82.3703 36.0871C80.8091 36.0871 80.3073 35.2092 80.3073 33.9036Z"
				fill="white"
			/>
		</svg>
	)
}

const HeaderApp = () => {
	const location = useLocation()
	const [visibleLoginModal, updateVisibleLoginModal] = useState(false)
	const [visibleRegisterModal, updateVisibleRegisterModal] = useState(false)
	const [isResetForm, setIsResetForm] = useState(false)
	const [showCart, setShowCart] = useState(false)
	const { userData, isLogin } = useSelector((state) => state.auth)
	const { cart } = useSelector((state) => state.cart)

	const dispatch = useDispatch()
	const getSelect = () => {
		const item = APP_MENU_LIST.find((e) => e.path !== '/' && location.pathname.includes(e.path))
		return item?.key || 'home'
	}

	const hanleOpenModalLogin = () => {
		updateVisibleRegisterModal(false)
		updateVisibleLoginModal(true)
	}

	const menuUser = (
		<Menu
			items={[
				{
					key: '1',
					label: <Link to={''}>Trang cá nhân</Link>,
				},
				{
					key: '2',
					label: (
						<Link
							to=""
							onClick={(e) => {
								e.preventDefault()
								dispatch(authAction.logout())
							}}
						>
							Đăng Xuất
						</Link>
					),
				},
			]}
		/>
	)

	return (
		<HeaderAppContainer>
			<Layout.Header className="app-header">
				<div className="d-flex">
					<div className="logo">
						<Link to={ROUTERS_BASE.app_view.home}>
							<Logo />
						</Link>
					</div>

					<div className="nav-right">
						<Space>
							<Badge count={cart?.length || 0}>
								<Button
									type="link"
									size="large"
									icon={<ShoppingCartOutlined width={20} />}
									onClick={() => setShowCart(true)}
								></Button>
							</Badge>
							{isLogin ? (
								<div>
									<Dropdown overlay={menuUser} trigger={['click']}>
										<div>
											<Avatar>{`${userData?.fullname}`.slice(0, 1)}</Avatar> {userData?.fullname}
										</div>
									</Dropdown>
								</div>
							) : (
								<Space>
									<Button type="link" onClick={() => updateVisibleLoginModal(true)}>
										Đăng nhập
									</Button>
									<div>/</div>
									<Button type="link" onClick={() => updateVisibleRegisterModal(true)}>
										Đăng Ký
									</Button>
								</Space>
							)}
						</Space>
					</div>
				</div>
			</Layout.Header>
			<div className="menu">
				<Menu
					defaultSelectedKeys={[getSelect()]}
					defaultOpenKeys={['sub1']}
					mode="horizontal"
					theme="light"
					className="menu-custom"
				>
					{APP_MENU_LIST.map((e) => (
						<Menu.Item key={e.key}>
							<Link to={e.path}>{e.title}</Link>
						</Menu.Item>
					))}
				</Menu>
			</div>
			<div>
				<Modal
					visible={visibleLoginModal}
					onCancel={() => updateVisibleLoginModal(false)}
					footer={false}
					closable={false}
					afterClose={() => setIsResetForm(true)}
				>
					<LoginComponent
						onCancel={() => updateVisibleLoginModal(false)}
						isReset={isResetForm}
						onUpdateReset={() => setIsResetForm(false)}
					/>
				</Modal>
			</div>
			<div>
				<Modal
					visible={visibleRegisterModal}
					onCancel={() => updateVisibleRegisterModal(false)}
					footer={false}
					closable={false}
					afterClose={() => setIsResetForm(true)}
				>
					<RegisterComponent
						onCancel={() => updateVisibleLoginModal(false)}
						isReset={isResetForm}
						onUpdateReset={() => setIsResetForm(false)}
						onOpenLogin={hanleOpenModalLogin}
					/>
				</Modal>
			</div>
			<div>
				<Drawer
					width={1000}
					title={'Giỏ hàng của bạn'}
					visible={showCart}
					onClose={() => setShowCart(false)}
				>
					<CartComponent />
				</Drawer>
			</div>
		</HeaderAppContainer>
	)
}

export default HeaderApp
