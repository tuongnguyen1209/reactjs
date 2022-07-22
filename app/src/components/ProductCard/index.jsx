import { ShoppingCartOutlined } from '@ant-design/icons'
import { Button, Card, Col, Image, Row, Space } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { ProductCardContainer } from './styled'

const ProductCard = ({ data }) => {
	return (
		<ProductCardContainer>
			<Card>
				<Row gutter={20}>
					<Col style={{ marginTop: '.5rem' }} span={8}>
						<Image alt="result card" src={data?.img} />
					</Col>
					<Col span={12}>
						<div style={{ fontWeight: 'bold', fontSize: 18, color: '#001650' }}>{data?.name}</div>
						<div>
							<Row style={{ fontSize: 10 }}>
								<Col span={4}>{data?.author}</Col>
								<Col span={4}>{data?.version}</Col>
								<Col span={5}>
									<Link to={'/'} style={{ fontSize: 10 }} title="View on Youtube" />
								</Col>
							</Row>
							<Row>
								<Col span={7}>
									{/* <Image src={rating} alt="rating" /> &nbsp; */}
									{data?.rating}
								</Col>
								<Col span={4}>
									{/* <Image src={download} alt="download" /> */}
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
								<b>${data?.price}</b>
							</div>
							<div>
								<Space>
									<Button type="link" size="large">
										Chi tiết
									</Button>

									<Button size="large" danger icon={<ShoppingCartOutlined />} />
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
