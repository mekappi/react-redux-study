import { connect } from 'react-redux';
import actionCreator from './actionCreator';
import Container from './container';

// stateの中から、対象のコンポーネントに合ったプロパティを生成する為のもの
function mapStateToProps(state){

	console.log("【mapStateToProps】 state", state);



	// shallow copy
	var props = [].concat(state.file);
	
	props.push({
		id: props.length + 1,
		data: "./no_image.png",
		fileName: "クリックして画像を選択"
	});

	return Object.assign({}, state, {
		file: props
	});
}

// 
function mapDispatchToProps(dispatch){

	console.log("【mapDispatchToProps】");


	return {
		selectedAction(file){
			console.log("【mapDispatchToProps selectedAction】 file" , file);
			dispatch(actionCreator.selected(file));
		}
	};
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(Container);
export default AppContainer;