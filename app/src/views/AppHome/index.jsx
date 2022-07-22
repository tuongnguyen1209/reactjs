import React from 'react'
import AppLayout from 'src/providers/AppLayout'
import { AppHomeContainer } from './styled'
import { Button, Col, Divider, Image, Input, List, Row, Space } from 'antd'
import banner from 'src/assets/images/banner.png'
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons'
const data = Array.from({ length: 2 }).map((_, i) => ({
	href: 'https://ant.design',
	title: `ant design part ${i}`,
	avatar: 'https://joeschmoe.io/api/v1/random',
	description:
		'Ant Design, a design language for background applications, is refined by Ant UED Team.',
	content:
		'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
}))

const IconText = ({ icon, text }) => (
	<Space>
		{React.createElement(icon)}
		{text}
	</Space>
)
const AppHome = () => {
	return (
		<AppLayout>
			<AppHomeContainer>
				<Row>
					<Col span={12}>
						<div className="banner">
							<h1>Mua bán source code online</h1>
							<div className="search">
								<Input.Search size="large" placeholder="Tìm kiếm" />
							</div>
						</div>
					</Col>
					<Col span={12}>
						<Image src={banner} width={'100%'} preview={false} />
					</Col>
				</Row>
				<Divider>Danh sách sản phẩm</Divider>
				<List
					itemLayout="vertical"
					size="large"
					dataSource={data}
					renderItem={(item) => (
						<List.Item
							key={item.title}
							actions={[
								<IconText
									icon={StarOutlined}
									text="Thêm vào giỏ hàng"
									key="list-vertical-star-o"
								/>,
							]}
							extra={
								<img
									width={272}
									alt="logo"
									src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
								/>
							}
						>
							<List.Item.Meta
								title={<a href={item.href}>{item.title}</a>}
								description={item.description}
							/>
							{item.content}
						</List.Item>
					)}
				/>
			</AppHomeContainer>
		</AppLayout>
	)
}

export default AppHome
