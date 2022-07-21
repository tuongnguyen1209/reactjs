import sweetalert from 'sweetalert2'

class Notification {
	static success(title, text) {
		return sweetalert.fire({
			title,
			text,
			icon: 'success',
		})
	}
	static error(title, text) {
		return sweetalert.fire({
			title,
			text,
			icon: 'error',
		})
	}
	static confirm(title, text) {
		return sweetalert.fire({
			title,
			text,
			icon: 'question',
			showCancelButton: true,
			confirmButtonText: 'Yes',
		})
	}
}

export default Notification
