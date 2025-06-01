function
main
() {
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);
    const jas = params.get('jas');
    if (jas) {
        document.getElementById('jas').value = jas;
    }
}
window.addEventListener('DOMContentLoaded', main);
function
submitForm() {
    const jas = document.getElementById('jas').value;
    if (jas) {
        const url = new URL(window.location.href);
        url.searchParams.set('jas', jas);
        window.location.href = url.toString();
    } else {
        alert('Please enter a valid JAS value.');
    }
}
function
resetForm() {
    const url = new URL(window.location.href);
    url.searchParams.delete('jas');
    window
    