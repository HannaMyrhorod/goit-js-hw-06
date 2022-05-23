const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector(".gallery");

const createGalleryMarkup = () => {
  return images.map(img => `<li class="gallery-item"><img src=${img.url} alt=${img.alt} width=480 class="gallery-image"></li>`).join("")
};

gallery.insertAdjacentHTML("afterbegin", createGalleryMarkup());

// // Styles
// gallery.style.padding = 0;
// gallery.style.margin = "-10px";
// gallery.style.listStyle = "none";
// gallery.style.display = "flex";
// gallery.style.justifyContent = "space-between";
// gallery.style.flexWrap = "wrap";
// gallery.firstElementChild.style.margin = "10px";
// gallery.querySelector(".item").style.display = "block";
// gallery.querySelector(".item").style.objectFit = "cover";