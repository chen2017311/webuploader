import AppDispatcher from '../dispatcher/AppDispatcher'


export default {
    setClassList(list){
        AppDispatcher.dispatch({
            actionType : 'GET_CLASS_LIST',
            list : list
        })
    },
    setClassDetail(list){
        AppDispatcher.dispatch({
            actionType : 'SET_CLASS_DETAIL_LIST',
            list : list
        })
    }
}