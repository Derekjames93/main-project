const mainDrop = document.querySelector('.dropdown-menu')
const dropItem = document.querySelector('.dropdown-item')

function fetchArtist(name) {
    fetch(`./dom.json`)
    then((res) => res.json()).then((data) => {
        let output = '<h2>Artist</h2>'; data.forEach(function (trains) {
            output += `<ul><li>train: ${correctDom.name}</li> </ul>`;
});

mainDrop.addEventListener('click',function(e){
    e.preventDefault()
    fetchArtist(correctDom);
})
