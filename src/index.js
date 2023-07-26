import {fetchBreeds, fetchCatByBreed} from "./cat-api";
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import Notiflix from 'notiflix';


const selector = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');

loader.classList.replace('loader', 'is-hidden');
selector.classList.replace('breed-select', 'is-hidden');
error.classList.add('is-hidden');
catInfo.classList.add('is-hidden');



fetchBreeds()
.then(data => {
    const markup = data.map(({id,name}) => `<option value = "${id}">${name}</option>`)
    .join();
    selector.innerHTML = markup;

    selector.classList.replace('is-hidden', 'breed-select');

    new SlimSelect({
                     select: '.breed-select'
                   });
})
.catch(onFetchError);

Notiflix.Notify.success('Come on! Make Your choice!', {
    position: 'center-center',
    
});


selector.addEventListener('change', onSelectBreed);



function onSelectBreed(event) {
    loader.innerHTML = '';
    loader.classList.replace('is-hidden', 'loader');
    selector.classList.add('is-hidden');
    catInfo.classList.add('is-hidden');

    const breedId = event.currentTarget.value;
    fetchCatByBreed(breedId)
    .then(data => {
        loader.classList.replace('loader', 'is-hidden');
        selector.classList.remove('is-hidden');
        const { url, breeds } = data[0];
        
        catInfo.innerHTML = `<div class="box-img">
        <img src="${url}" alt="${breeds[0].name}" width="400"/>
        </div>
        <div class="box">
        <h1>${breeds[0].name}</h1>
        <p>${breeds[0].description}</p>
        <p>
        <b>Temperament:</b> ${breeds[0].temperament}</p>
        </div>`;
        catInfo.classList.remove('is-hidden');
    })
    .catch(onFetchError);
};

function onFetchError(error) {
    selector.classList.remove('is-hidden');
    loader.classList.replace('loader', 'is-hidden');

    Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page or select another cat breed!', {
        position: 'center-center',
        timeout: 5000,
        width: '400px',
        fontSize: '24px'
    });
};


