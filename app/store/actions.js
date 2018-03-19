const API_ROOT = 'https://images-api.nasa.gov';
// /search

// GET/search?q='searchTerm'
// &media_type=image
// (separate spaces with %20)

export const IMAGE_ERROR = 'IMAGE_ERROR';
export const imageError = (err) => ({
  type: IMAGE_ERROR,
  err
});

export const IMAGE_REQUEST = 'IMAGE_REQUEST';
export const imageRequest = () => ({
  type: IMAGE_REQUEST
})

export const IMAGE_SUCCESS = 'IMAGE_SUCCESS';
export const imageSuccess = (image) => ({
  type: IMAGE_SUCCESS,
  image
})

export const getNasaImage = searchTerm => dispatch => {
  dispatch(imageRequest());
  return fetch(`${API_ROOT}/search`, {q: searchTerm})
    .then(res => {
        if(!res.ok){
          return new Promise.reject(res.message);
        }
        else res => res.json();
    })
    .then(res => console.log('res from NASA', res))
    .catch(err => console.log(err));    
};
