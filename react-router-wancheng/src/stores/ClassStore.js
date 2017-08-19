import {EventEmitter} from 'events';
import assign from 'object-assign';


export default assign({},EventEmitter.prototype,{
    ClassList : [],
    ClassDetail : [],
    setClassList(list){
        this.ClassList = list;
    },
    getClassList(){
        return this.ClassList;
    },
    setClassDetail(item){
        this.ClassDetail = item;
    },
    getClassDetail(){
        return this.ClassDetail;
    },
    onChange(){
        this.emit('change')
    },
    addChangeListener(callback){
        this.on('change',callback)
    },
    removeChangeListener(callback){
        this.removeListener('change',callback)
        console.log('进入删除change')
    }

})