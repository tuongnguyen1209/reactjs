import { Col, Layout, Menu, PageHeader, Row, Spin, Typography } from 'antd'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useParams, useSearchParams } from 'react-router-dom'
import { GetListCategoryAction, GetListProductAction } from 'src/app/slices/ProductSlice'
import ListFilterForSearch from 'src/components/ListFilterForSearch'
import ProductCard from 'src/components/ProductCard'
import { ROUTERS_BASE } from 'src/constants/common'
import AppLayout from 'src/providers/AppLayout'
import { AppProductContainer } from './styled'

const AppProduct = () => {
	const dispatch = useDispatch()
	const { products, isLoading, categories } = useSelector((state) => state.product)
	const [searchParam] = useSearchParams()

	const cate = searchParam.get('category')
	useEffect(() => {
		console.log(cate)
		getData(cate ? { category: cate } : {})
	}, [cate])

	useEffect(() => {
		dispatch(GetListCategoryAction())
	}, [])

	const getData = async (params) => {
		await dispatch(GetListProductAction(params))
	}

	return (
		<Spin spinning={isLoading}>
			<AppLayout>
				<AppProductContainer>
					<div className={'search-page'}>
						<div style={{ marginTop: '1rem', marginBottom: '1rem' }}></div>
						<div>
							<Row>
								<Col span={5}>
									<ListFilterForSearch category={categories} />
								</Col>
								<Col className="product-list" span={19}>
									{products.map((e) => (
										<ProductCard data={e} />
									))}
								</Col>
							</Row>
						</div>
					</div>
				</AppProductContainer>
			</AppLayout>
		</Spin>
	)
}

export default AppProduct
