import { CloudDownloadOutlined, ShoppingCartOutlined, StarOutlined } from '@ant-design/icons'
import { Button, Col, Divider, Image, PageHeader, Row, Space, Spin, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { cartAction } from 'src/app/slices/CartSlice'
import { GetProductAction } from 'src/app/slices/ProductSlice'
import AppLayout from 'src/providers/AppLayout'
import { formatPrice } from 'src/utils/format'
import { ProductDetailContainer } from './styled'

const AppProductDetail = () => {
	const [data, setData] = useState({})
	const [isLoading, setIsLoading] = useState(false)
	const dispatch = useDispatch()
	const { id } = useParams()

	useEffect(() => {
		;(async () => {
			setIsLoading(true)
			const rs = await dispatch(GetProductAction(id))
			setData(rs.payload.data)
			setIsLoading(false)
		})()
	}, [])

	const routes = [
		{
			path: '/',
			breadcrumbName: 'Trang chủ',
		},
		{
			path: '/product',
			breadcrumbName: 'Sản phẩm',
		},
		{
			path: '/product',
			breadcrumbName: 'Chi tiết',
		},
	]

	return (
		<>
			<Spin spinning={isLoading}>
				<AppLayout>
					<ProductDetailContainer>
						<PageHeader className="site-page-header" title={data?.name} breadcrumb={{ routes }} />
						<Row gutter={20}>
							<Col style={{ marginTop: '.5rem' }} span={8}>
								<Image alt="result card" src={data?.image} />
							</Col>
							<Col span={12}>
								<div style={{ fontWeight: 'bold', fontSize: 18, color: '#001650' }}>
									{data?.name}
								</div>
								<div>
									<Row>
										<Col span={7}>
											<StarOutlined />
											{data?.rating}
										</Col>
										<Col span={4}>
											<CloudDownloadOutlined />
											&nbsp;{data?.download}
										</Col>
										<Col span={5}>
											<div>
												<span style={{ marginRight: '1rem' }}>
													{/* <Image src={mobile} alt="mobile" /> */}
												</span>
												<span className="category_item">
													{/* <Image src={java} alt="java" /> */}
												</span>
											</div>
										</Col>
									</Row>
									<Row>
										<ul
											style={{
												marginLeft: '1rem',
												color: '#001650',
											}}
										>
											{data?.listFeature &&
												data.listFeature.map((item) => {
													return <li>{item}</li>
												})}
										</ul>
									</Row>
								</div>
							</Col>
							<Col span={4}>
								<div style={{ position: 'absolute', bottom: 0, right: 0 }}>
									<div className="price">
										<b>{formatPrice(data?.price || 0)}</b>
									</div>
									<div>
										<Space>
											<Button
												size="large"
												danger
												onClick={() => {
													dispatch(cartAction.addToCart(data))
												}}
												icon={<ShoppingCartOutlined />}
											/>
										</Space>
									</div>
								</div>
							</Col>
						</Row>
						<Divider>Chi tiết</Divider>
						<Typography.Paragraph>{data?.description}</Typography.Paragraph>
					</ProductDetailContainer>
				</AppLayout>
			</Spin>
		</>
	)
}

export default AppProductDetail
