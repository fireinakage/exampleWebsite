// Ripple effect: attach delegated click handler for buttons/elements with class `ripple`.
document.addEventListener('DOMContentLoaded', function () {
	document.body.addEventListener('click', function (e) {
		// find closest element with .ripple (could be button or any clickable element)
		var target = e.target;
		while (target && !target.classList.contains('ripple')) {
			target = target.parentElement;
		}
		if (!target) return;

		var rect = target.getBoundingClientRect();
		var ripple = document.createElement('span');
		ripple.className = 'ripple-effect';

		// Calculate size: make sure it covers the farthest corner
		var size = Math.max(rect.width, rect.height);
		ripple.style.width = ripple.style.height = size * 2 + 'px';

		// Position the ripple so its center is at the click point
		var x = e.clientX - rect.left - size;
		var y = e.clientY - rect.top - size;
		ripple.style.left = x + 'px';
		ripple.style.top = y + 'px';

		target.appendChild(ripple);

		// Remove ripple after animation ends (use timeout slightly longer than animation)
		setTimeout(function () {
			if (ripple && ripple.parentElement) ripple.parentElement.removeChild(ripple);
		}, 700);
	}, false);
});
