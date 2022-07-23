import React from 'react'
import CategoryFilter from '../CategoryFilter'

const ListFilterForSearch = ({ category }) => {
	return (
		<div>
			<div>
				<CategoryFilter categoryList={category} />
			</div>
		</div>
	)
}

export default ListFilterForSearch
