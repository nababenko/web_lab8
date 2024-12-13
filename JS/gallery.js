
const images = [
    {
        preview: 'https://i.pinimg.com/736x/c5/fb/43/c5fb43b0c648f75d1f89f4882b37ef82.jpg',
        original: 'https://i.pinimg.com/736x/c5/fb/43/c5fb43b0c648f75d1f89f4882b37ef82.jpg',
        description: 'Опис зображення 1'
    },
    {
        preview: 'https://i.pinimg.com/736x/47/ed/ca/47edcace5242c0fe5fdc447c92d81129.jpg',
        original: 'https://i.pinimg.com/736x/47/ed/ca/47edcace5242c0fe5fdc447c92d81129.jpg',
        description: 'Опис зображення 2'
    },
    {
        preview: 'https://i.pinimg.com/736x/ff/e3/52/ffe35286d1b7ab2012bed123343c7252.jpg',
        original: 'https://i.pinimg.com/736x/ff/e3/52/ffe35286d1b7ab2012bed123343c7252.jpg',
        description: 'Опис зображення 3'
    },
    {
        preview: 'https://i.pinimg.com/736x/6e/e9/56/6ee95663ede222707661cf897a0723ca.jpg',
        original: 'https://i.pinimg.com/736x/6e/e9/56/6ee95663ede222707661cf897a0723ca.jpg',
        description: 'Опис зображення 4'
    },
    {
        preview: 'https://i.pinimg.com/736x/cb/14/e2/cb14e28165e442896335e8f8ad5ef3f0.jpg',
        original: 'https://i.pinimg.com/736x/cb/14/e2/cb14e28165e442896335e8f8ad5ef3f0.jpg',
        description: 'Опис зображення 5'
    },
    {
        preview: 'https://i.pinimg.com/736x/30/b6/45/30b64569e8b4d49eeb26c8ff0d4800fb.jpg',
        original: 'https://i.pinimg.com/736x/30/b6/45/30b64569e8b4d49eeb26c8ff0d4800fb.jpg',
        description: 'Опис зображення 6'
    },
    {
        preview: 'https://i.pinimg.com/736x/c6/b2/95/c6b29562a115c1d0b1758f30b3be7f97.jpg',
        original: 'https://i.pinimg.com/736x/c6/b2/95/c6b29562a115c1d0b1758f30b3be7f97.jpg',
        description: 'Опис зображення 7'
    },
    {
        preview: 'https://i.pinimg.com/736x/f0/4d/92/f04d92f113cc8e6e6e8a2b4e4d08b7fb.jpg',
        original: 'https://i.pinimg.com/736x/f0/4d/92/f04d92f113cc8e6e6e8a2b4e4d08b7fb.jpg',
        description: 'Опис зображення 8'
    },
    {
        preview: 'https://i.pinimg.com/736x/1c/c8/63/1cc8630b38e0442e040f717ce7742acc.jpg',
        original: 'https://i.pinimg.com/736x/1c/c8/63/1cc8630b38e0442e040f717ce7742acc.jpg',
        description: 'Опис зображення 9'
    },
    {
        preview: 'https://i.pinimg.com/736x/9b/eb/c7/9bebc7bd5ac499439400cebf71f4b8b1.jpg',
        original: 'https://i.pinimg.com/736x/9b/eb/c7/9bebc7bd5ac499439400cebf71f4b8b1.jpg',
        description: 'Опис зображення 10'
    }
];

function generateGallery(images) {
    const gallery = document.querySelector('.gallery');

    images.forEach(image => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = image.preview;
        img.alt = image.description;
        img.dataset.original = image.original;

        li.appendChild(img);
        gallery.appendChild(li);
    });
}

generateGallery(images);

document.querySelector('.gallery').addEventListener('click', event => {
    if (event.target.tagName.toLowerCase() === 'img') {
        const originalImage = event.target.dataset.original;

        console.log('Посилання на велике зображення:', originalImage);

        const instance = basicLightbox.create(`
            <img src="${originalImage}" alt="Збільшене зображення">
        `);

        instance.show();
    }
});

