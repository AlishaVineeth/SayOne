var boolean = true;
const initialState = {
    img: 'https://cdn-images-1.medium.com/max/2000/1*VGpesuB6J8E58Jq-7t5i1Q.jpeg'
}
const toggleReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_PICTURE': if(boolean == true) {
            boolean = false;
            return { img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png'}
    }
    else{
        boolean = true;
        return initialState;
  
    }

}
    return state
}




export default toggleReducer