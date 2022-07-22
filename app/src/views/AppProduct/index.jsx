import { Col, Layout, Menu, PageHeader, Row, Typography } from 'antd'
import React from 'react'
import ListFilterForSearch from 'src/components/ListFilterForSearch'
import ProductCard from 'src/components/ProductCard'
import { ROUTERS_BASE } from 'src/constants/common'
import AppLayout from 'src/providers/AppLayout'
import { AppProductContainer } from './styled'

const AppProduct = () => {
	const data = [
		{
			name: 'Android Online Shop',
			author: 'by Firebase',
			version: 'version 12.0',
			rating: 120,
			download: 1050,
			listFeature: ['Login by Firebase', 'Get API', 'Document Analysis'],
			price: 90,
		},
	]
	return (
		<AppLayout>
			<AppProductContainer>
				<div className={'search-page'}>
					<div style={{ marginTop: '1rem', marginBottom: '1rem' }}></div>
					<div>
						<Row>
							<Col span={5}>
								<ListFilterForSearch
									category={[
										{ name: 'All', quantity: 1201 },
										{ name: 'Mobile', quantity: 114 },
										{ name: 'Web', quantity: 897 },
										{ name: 'Desktop', quantity: 51 },
										{ name: 'Cloud', quantity: 51 },
										{ name: 'Other', quantity: 51 },
									]}
								/>
							</Col>
							<Col className="product-list" span={19}>
								{data.map((e) => (
									<ProductCard data={e} />
								))}
							</Col>
						</Row>
					</div>
				</div>
			</AppProductContainer>
		</AppLayout>
	)
}

export default AppProduct
