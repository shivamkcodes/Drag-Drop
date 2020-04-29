console.log('Welcome to the drag and drop');
const imgbox = document.querySelector('.imageBox');
const whiteBox = document.getElementsByClassName('whiteBox');

imgbox.addEventListener('dragstart', (e) => {
    console.log('drag start');
    e.target.className += ' hold';
    setTimeout(() => {
        e.target.className = 'hide';
    }, 0)


});
imgbox.addEventListener('dragend', (e) => {
    console.log('drag end');
    e.target.className = 'imageBox';



});

for (let i of whiteBox) {
    i.addEventListener('dragover', (e) => {
        console.log('dragover');
        e.preventDefault();

    })
    i.addEventListener('dragenter', (e) => {
        console.log('dragenter');
        e.target.className += ' dashed';

    })
    i.addEventListener('dragleave', (e) => {
        console.log('dragleave');
        e.target.className = 'whiteBox';

    })
    i.addEventListener('drop', (e) => {
        console.log('drop');
        e.target.append(imgbox)

    })
}