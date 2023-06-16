var nav = document.getElementById('access_nav');
var anchors = document.getElementById('anchors');
var icon = document.getElementById('icon');

	nav.addEventListener('click', function(e) {
		anchors.className = anchors.className? '' : 'show_nav';
        if (icon.className === 'fa fa-solid fa-bars') {
            icon.className = 'fas fa-times';
        }
        else {
            icon.className = 'fa fa-solid fa-bars';
        }

		e.preventDefault();
	});