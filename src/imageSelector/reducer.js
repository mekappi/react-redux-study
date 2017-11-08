import actionType from './actionType';

// 初期値を定義
const initialState = {
	file : []
}


// Actionに呼応してアプリケーションの状態（state）をどのように変化させるか指定する役割を持った関数
// ここでactionや元のstateを使って、更新されたstateを返却する
export default function reducer(state = initialState, action){

	console.log("【reducer】 state, action", state, action);

	switch(action.type){
		case actionType.SELECTED:
			console.log(state.file.length, action.file.id);
			if(state.file.length < action.file.id){
				// 新規追加
				state.file.push(action.file);
			}else{
				// 更新
				state.file[action.file.id - 1] = action.file;
			}

			return Object.assign({}, state);

		default: 
			return state;

	}
}