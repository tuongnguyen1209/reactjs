import { DeleteOutlined } from '@ant-design/icons'
import { Button, Descriptions, Divider, Image, Popconfirm, Table } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { cartAction, CreateOrdersAction } from 'src/app/slices/CartSlice'
import { formatPrice } from 'src/utils/format'

const CartComponent = () => {
	const { cart, isLoading } = useSelector((state) => state.cart)
	const { userData } = useSelector((state) => state.auth)
	const dispatch = useDispatch()
	const columns = [
		{
			title: 'Hình ảnh',
			dataIndex: 'item.image',
			key: 'image',
			render: (_, item) => <Image width={100} src={item.item?.image} />,
		},
		{
			title: 'Tên',
			dataIndex: 'item.name',
			key: 'item.name',
			render: (_, item) => item.item?.name,
		},
		{
			title: 'Giá',
			dataIndex: 'item.price',
			key: 'price',
			render: (_, item) => formatPrice(item.item?.price),
		},
		{
			title: 'Xóa',
			dataIndex: 'delete',
			key: 'delete',
			render: (_, item) => (
				<Popconfirm
					title="Bạn có muốn xóa?"
					onConfirm={() => {
						dispatch(cartAction.removeItem(item.id))
					}}
					okText="Có"
					cancelText="Không"
				>
					<Button danger type="primary" icon={<DeleteOutlined />} />
				</Popconfirm>
			),
		},
	]

	const getPrice = () => {
		let total = 0
		cart.forEach((element) => {
			total += Number(element.item.price)
		})

		return formatPrice(total)
	}

	return (
		<div>
			<Table dataSource={cart} columns={columns} />

			<Divider />
			<Descriptions layout="horizontal" bordered column={1}>
				<Descriptions.Item label="Số lượng">{cart.length || 0}</Descriptions.Item>
				<Descriptions.Item label="Thành tiền">{getPrice()}</Descriptions.Item>
				<Descriptions.Item>
					<Popconfirm
						title="Bạn có muốn đặt hàng không?"
						onConfirm={async () => {
							const newData = {
								user: userData._id,
								detail: cart.map((e) => ({
									product: e.id,
									quatity: 1,
									price: e.item.price,
								})),
							}
							await dispatch(CreateOrdersAction(newData))
						}}
						okText="Có"
						cancelText="Không"
					>
						<Button type="primary" loading={isLoading}>
							Đặt hàng
						</Button>
					</Popconfirm>
				</Descriptions.Item>
			</Descriptions>
		</div>
	)
}

export default CartComponent
