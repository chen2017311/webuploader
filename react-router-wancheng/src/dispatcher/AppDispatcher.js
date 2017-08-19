import {Dispatcher} from 'flux';
var AppDispatcher = new Dispatcher();
import ClassStore from '../stores/ClassStore';

AppDispatcher.register(function(action){
    switch (action.actionType){
        case 'GET_CLASS_LIST':
            ClassStore.setClassList(action.list);
            ClassStore.onChange();
            break;
        case 'SET_CLASS_DETAIL_LIST':
            ClassStore.setClassDetail(action.list);
            ClassStore.onChange();
            break;
        default:
            console.log('未找到')
            break;
    }
})

export default AppDispatcher