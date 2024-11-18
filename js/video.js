var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

	// page lode
    video = document.querySelector("#player1");
    video.autoplay = false;
	console.log("Auto play is set to " + video.autoplay);
    video.loop = false;
	console.log("loop is set to " + video.loop);
});

// play button
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

// pause button
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

// slow down button
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down Video");
	video.playbackRate *= 0.9;
	console.log("New speed is " + video.playbackRate);
});

// speed up button
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up Video");
	video.playbackRate /= 0.9;
	console.log("New speed is " + video.playbackRate);
});

// skip ahead button
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead Video");
	video.currentTime += 10;
   	console.log(video.currentTime);
});

// mute button
document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute Video");
	if (document.getElementById("mute").innerHTML === "Mute") {
		video.muted = true;
		document.getElementById("mute").innerHTML = "Unmute";
	} else {
		video.muted = false;
		document.getElementById("mute").innerHTML = "Mute";
	} 
});

// volume slider
document.querySelector("#slider").addEventListener("change", function() {
	console.log("Volume Slider");
	video.volume = document.querySelector("#slider").value / 100;
	document.getElementById("volume").innerHTML = video.volume * 100 + "%";
});

// style buttons
document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Vintage Video");
	video.classList.add("oldSchool");
});

// original
document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original Video");
	video.classList.remove("oldSchool");
});


document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
});
