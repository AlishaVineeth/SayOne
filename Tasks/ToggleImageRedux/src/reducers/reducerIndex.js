var myBoolean = true;
const initialState = {
    img: 'https://cdn-images-1.medium.com/max/2000/1*VGpesuB6J8E58Jq-7t5i1Q.jpeg'
}
const toggleReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_PICTURE': if(myBoolean == true) {
            myBoolean = false;
            return { img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png'}
    }
    else{
        myBoolean = true;
        return { img: 'https://cdn-images-1.medium.com/max/2000/1*VGpesuB6J8E58Jq-7t5i1Q.jpeg'}
  
    }

}
    return state
}




export default toggleReducer