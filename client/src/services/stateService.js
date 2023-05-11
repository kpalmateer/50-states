import axios from 'axios'

export default {
    // make a request via the route
    getAllStates() {
        return axios.get('/api/states').then( response => {
            return response.data
        })
    },

    setVisited(stateName, visited){
        // request to api/state/Wisconsin, e.g.
        let requestData = { visited: visited }
        return axios.patch('api/states/' + stateName, requestData).then( response => {
            // Vue component will receive and be able to parse the data
            return response.data
        })
    },
    getOneState(stateName) {
        return axios.get('/api/state/' + stateName).then( response => {
            return response.data
        })
    },
    // request the array of visited states
    getVisitedStates() {
        return axios.get('/api/states/visited').then( response => {
            return response.data
        })
    }
}