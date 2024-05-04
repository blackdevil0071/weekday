// src/redux/actions/jobActions.js
export const fetchJobs = () => {
    return dispatch => {
      dispatch({ type: 'FETCH_JOBS_REQUEST' });
      fetch('https://api.weekday.technology/adhoc/getSampleJdJSON', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ limit: 10, offset: 0 })
      })
        .then(response => response.json())
        .then(data => {
          dispatch({ type: 'FETCH_JOBS_SUCCESS', payload: data });
        })
        .catch(error => {
          dispatch({ type: 'FETCH_JOBS_FAILURE', payload: error.message });
        });
    };
  };
  