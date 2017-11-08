import actionType from './actionType';


// Action(type、他任意のプロパティを持ったオブジェクト)を作成する
// Storeのdispatch()メソッドの引数にAction Creatorを渡すことで、ActionがReducerに送られる
export default {

	init(){
		console.log("【actionCreator init】");
		return {
			type: actionType.INIT,
		}
	},

	selected(inputFile){
		console.log("【actionCreator selected】 inputFile", inputFile);
		return {
			type: actionType.SELECTED,
			file: inputFile
		}

	},

}