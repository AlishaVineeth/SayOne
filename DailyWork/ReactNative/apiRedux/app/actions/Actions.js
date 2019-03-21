import axios from 'axios'

export const loadQuote = () => {

    return (dispatch, _getState) => {

        dispatch({ type: 'LOAD_QUOTE_START' })
        axios.get('https://breaking-bad-quotes.herokuapp.com/v1/quotes').then(function (response) {
            console.log(response)
            dispatch({ type: 'LOAD_QUOTE_SUCCESS', payload: response.data[0].quote, payload2: response.data[0].author })

        }).catch(function (error) {
            dispatch({ type: 'LOAD_QUOTE_FAILURE', payload: error })
        })
    }

}
