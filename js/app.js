const body = document.getElementById('main');
const video = document.querySelector('video');
const transcript = document.querySelectorAll('.transcript span')

video.addEventListener('timeupdate', () => {
	for (let i = 0; i < transcript.length; i++) {
		let currentScript = transcript[i];
		let start_T = currentScript.getAttribute('data-start');
		let end_T = currentScript.getAttribute('data-end');
		let currentTime = video.getCurrentTime();
		
		if (currentTime >= start_T && currentTime <= end_T)	{
			currentScript.classList.add("highlight");
		} else {
			currentScript.classList.remove("highlight");
		}
		
	}
});

body.addEventListener('click', (e) => {
	if(e.target.hasAttribute('data-start'))	{
		let text_Time = parseFloat(e.target.getAttribute('data-start'));
		video.setCurrentTime(text_Time);
	}
});