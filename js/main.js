function toggleVideo() {
    const trailer = document.querySelector('.trailer');
    const iframe = document.querySelector('iframe')
    trailer.classList.toggle('active');
    var iframeSrc = iframe.src;
	iframe.src = iframeSrc;
};