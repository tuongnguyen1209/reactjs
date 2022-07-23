import { Col, Row } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { CategoryContainer } from './styled'

const CategoryFilter = ({ categoryList }) => {
	return (
		<CategoryContainer>
			<div className={'category_filter'}>
				<h1>Loại</h1>
				<div className="category_item">
					<Row gutter={100}>
						<Col span={12}>
							<div className="category_name">
								<Link to={`/product `}>
									<a>All</a>
								</Link>
							</div>
						</Col>
					</Row>
				</div>
				{categoryList.map((item, index) => (
					<div className="category_item" key={index}>
						<Row gutter={100}>
							<Col span={12}>
								<div className="category_name">
									<Link to={`/product?category=${item._id}`}>
										<a>{item.name}</a>
									</Link>
								</div>
							</Col>
							<Col span={12}>
								<div className="category_quantity">{item.quantity}</div>
							</Col>
						</Row>
					</div>
				))}
			</div>
		</CategoryContainer>
	)
}

export default CategoryFilter
