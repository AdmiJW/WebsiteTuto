import ActionType from './actionType';

// const fetchPost = () => {
//     return function(dispatch) {
//         fetch("https://jsonplaceholder.typicode.com/posts")
//         .then(e => e.json() )
//         .then(e => dispatch({
//             type: ActionType.FETCH_POST,
//             payload: e
//         }));
//     };
// }

const fetchPost = (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(e => e.json() )
    .then(e => dispatch({
        type: ActionType.FETCH_POST,
        payload: e
    }) );
}

export default fetchPost;