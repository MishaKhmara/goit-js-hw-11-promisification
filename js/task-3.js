const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

//------------------------------ вариант первый-------------------------//

//   const imagesRef = document.querySelector('#gallery');
//   const componentRef = images.map(element =>{
//   const listRef = document.createElement('li')
//   listRef.classList.add('gallery-list')
//   const pictureRef = document.createElement('img')
//   pictureRef.classList.add('gallery-picture')
//   listRef.appendChild(pictureRef)
  
//   pictureRef.src = element.url;
//   pictureRef.alt =  element.alt
//    return listRef
//  })
//   imagesRef.append(...componentRef)
  
//     console.log(imagesRef)

//------------------------------ вариант второй-------------------------//
const createGalleryItem = ({ url, alt }) =>
  `<li class='gallery-list'><img class='gallery-picture' src="${url}" alt="${alt}"</li>`;
const galleryMarkup = images.reduce(
  (acc, item) => acc + createGalleryItem(item),
  ""
);
const imagesRef = document.querySelector("#gallery");
imagesRef.insertAdjacentHTML("afterbegin", galleryMarkup);

