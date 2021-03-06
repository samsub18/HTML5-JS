function setupInput() {
	window.addEventListener('keydown', handleKeyDown);
	window.addEventListener('mousedown', handleMouseDown);
}

function handleKeyDown(evt) {
	switch (evt.keyCode) {
		case 32: // SPACE or ENTER
			if (showStartScreen) {
				setup();
				showStartScreen = false;
			} else if (showPauseScreen) {
				showPauseScreen = false;
			} // else if(showEndScreen){
			//	setup();
			// }
			break;
		case 13:
			if (showStartScreen) {
				setup();
				showStartScreen = false;
			} else if (showPauseScreen) {
				showPauseScreen = false;
			} // else if(showEndScreen){
			//	setup();
			//}
			break;
		case 27: // esc
			if (!showStartScreen && !showEndScreen) {
				showPauseScreen = true;
			}
			break;
		case 82: // r
			if (!showStartScreen && !showEndScreen) {
				setup();
			}
			break;
	}
}

function handleMouseDown(evt) {
	if (showStartScreen) {
		setup();
		showStartScreen = false;
	} else if (showPauseScreen) {
		showPauseScreen = false;
	}
}