import $ from '../core'

$.prototype.setAttr = function (oldNameAttr, newNameAttr = '') {
	for (let i = 0; i < this.length; i++) {
		if (!this[i].setAttribute) {
			continue
		}

		this[i].setAttribute(oldNameAttr, newNameAttr)
	}

	return this
}

$.prototype.removeAttr = function (nameAttr) {
	for (let i = 0; i < this.length; i++) {
		if (!this[i].removeAttribute) {
			continue
		}

		this[i].removeAttribute(nameAttr)
	}

	return this
}