const form = document.querySelector(".comments-form")
const button = document.querySelector(".comments-button")
const comments = document.querySelector(".comments_face")
const firstComment = comments.querySelector(".comments")

form.addEventListener("submit", (e) => {
	e.preventDefault()
	const inputField = document.querySelector(".comments-form-input")
	const inputValue = inputField.value.trim()
	if(inputValue){
		const newMarkup = 
		`
			<div class="comments" id="comment0" style="display:block">
				<div class="profile">
					<img src="https://st2.depositphotos.com/8440746/11967/v/450/depositphotos_119671346-stock-illustration-user-icon-vector-male-person.jpg"></div>
				<div class="comment-content">
					<p class="name">
						<font style="vertical-align: inherit;">
						<font style="vertical-align: inherit;">unbekannt</font>
						</font>
					</p>
					<p>
						<font style="vertical-align: inherit;">
						<font style="vertical-align: inherit;">${inputValue}</font>
						</font>
					</p>
				</div>
				<div class="clr"></div>
				<div class="comment-status">
					<span>
						<font style="vertical-align: inherit;">
						<font style="vertical-align: inherit;">Curte·comente</font>
						</font>
						<font style="vertical-align: inherit;">
						<font style="vertical-align: inherit;">29</font>
						</font>
					</span>
					<font style="vertical-align: inherit;">
						<small>
						<font style="vertical-align: inherit;">·</font>
						</small>
						<small>
						<u>
							<font style="vertical-align: inherit;">1 minutos antes</font>
						</u>
						</small>
					</font>
					<small>
						<font style="vertical-align: inherit;"></font>
						<u>
						<font style="vertical-align: inherit;"></font>
						</u>
					</small>
				</div>
			</div>
		`
		firstComment.insertAdjacentHTML("afterend", newMarkup)
		inputField.value = ""
	} else{
		alert("Please fill in the text field")
	}
	
})
