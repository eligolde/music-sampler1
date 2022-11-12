let audioDivs = document.querySelectorAll('.music-players');
let albumIcons = document.querySelectorAll('.image-icon');
let players = document.querySelectorAll('audio');

function hideAll() {
  audioDivs.forEach(function(el) {
    el.style.display = 'none';
  });
}
hideAll();

albumIcons.forEach(function(el) {
  el.onclick = (e) => {
    // hide all the divs to ensure that only one will be open

		hideAll();
		
players.forEach(function(el) {
        el.pause();
        el.currentTime = 0;
    });


switch (e.target.getAttribute('id')) {
	case 'album1':
		document.querySelector('#audio1')
		.style.display = 'block';
		break;
	case 'album2':
		document.querySelector('#audio2')
		.style.display = 'block';
		break;
	case 'album3':
		document.querySelector('#audio3')
		.style.display = 'block';
		break;
	case 'album4':
		document.querySelector('#audio4')
		.style.display = 'block';
		break;
	default:

}
}
})
