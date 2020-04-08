window.addEventListener('keydown',playsound)

function playsound(e){
	const key = document.querySelector(`button.key[data-key="${e.keyCode}"]`)
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)

	if (!audio) return

	audio.currentTime = 0
	audio.play()
	const randomColor = Math.floor(Math.random()*16777215).toString(16)
	key.style.background = "#" + randomColor
	key.classList.add('key-change')

}

function removestyle(key){
	if (key.propertyName != "transform") return
	console.log(this)
	this.classList.remove('key-change')
	this.style.background = "grey"
	

}

const keys = document.querySelectorAll('.key')
console.log(keys)
keys.forEach(k => k.addEventListener('transitionend',removestyle))