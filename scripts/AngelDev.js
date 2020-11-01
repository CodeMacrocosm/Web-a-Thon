const MORE_INFO_BUTTON = document.querySelector('.main_image--more');
let moreInfo = document.querySelector('.divider');

MORE_INFO_BUTTON.addEventListener('click', () => moreInfo.classList.toggle('hidden'));
