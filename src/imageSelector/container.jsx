import React, {Component} from 'react';
import ImageSelector from './presentational';


export default class Container extends Component{

	render() {

		console.log("【Container render】 props", this.props);

		return (
			<form>
				{this.props.file.map((file) => {
					return <ImageSelector key={file.id} file={file} handleOnChange={this.props.selectedAction} />
				})}
			</form>
		)
	}

}
