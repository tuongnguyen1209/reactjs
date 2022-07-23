import React from 'react'
import AppLayout from 'src/providers/AppLayout'
import { AppHomeContainer } from './styled'
import { Button, Col, Divider, Image, Input, List, Row, Space } from 'antd'
import banner from 'src/assets/images/banner.png'
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons'
const data = Array.from({ length: 5 }).map((_, i) => ({
	href: 'http://khaigiang.vn/blog/cong-nghe-thong-tin/',
	title: `Bài viết ${i}`,
	avatar: 'https://joeschmoe.io/api/v1/random',
	description: 'Bài viết về Công nghệ thông tin',
	content:
		'CNTT hiểu theo nghĩa rộng và tổng quát nhất là việc sử dụng công nghệ hiện đại vào việc tạo ra, lưu trữ, truyền dẫn thông tin, xử lý, khai thác thông tin. .',
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
							<h1>Mua bán template online</h1>
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
