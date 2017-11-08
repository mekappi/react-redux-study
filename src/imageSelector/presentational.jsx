import React, {Component} from 'react';


export default class ImageSelector extends Component{

	changeEvent(event){
		console.log("【presentational changeEvent】 event" , event);
		let file = event.target.files[0];
		let reader = new FileReader();
		reader.onload = (e) => {
			console.log("【presentational changeEvent FileReader Onload】 event, reader", e);
			// actionCreator
			this.props.handleOnChange({
				id: this.props.file.id,
				data: e.target.result,
				fileName: file.name
			});
		};

		reader.readAsDataURL(file);

	}

	render(){
		console.log("【presentational render】 props", this.props);

		return(
			<label>
				<img className="thumbnail" alt={this.props.file.fileName} title={this.props.file.fileName} 
						src={this.props.file.data} ref={(ref) => (this.image = ref)}/>
				<input className="upfile" type="file" onChange={(event) =>(this.changeEvent(event)) }/>
			</label>
		)
	}

}