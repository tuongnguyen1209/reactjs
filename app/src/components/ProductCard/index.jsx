import { CloudDownloadOutlined, ShoppingCartOutlined, StarOutlined } from '@ant-design/icons'
import { Button, Card, Col, Image, Row, Space } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { cartAction } from 'src/app/slices/CartSlice'
import { formatPrice } from 'src/utils/format'
import { ProductCardContainer } from './styled'

const ProductCard = ({ data }) => {
	const dispatch = useDispatch()
	return (
		<ProductCardContainer>
			<Card>
				<Row gutter={20}>
					<Col style={{ marginTop: '.5rem' }} span={8}>
						<Image alt="result card" src={data?.image} />
					</Col>
					<Col span={12}>
						<div style={{ fontWeight: 'bold', fontSize: 18, color: '#001650' }}>{data?.name}</div>
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
										<span className="category_item">{/* <Image src={java} alt="java" /> */}</span>
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
									<Link to={`/product/${data._id}`}>
										<Button type="primary" size="large">
											Chi tiết
										</Button>
									</Link>

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
			</Card>
		</ProductCardContainer>
	)
}

export default ProductCard
