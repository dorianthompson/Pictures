import React from 'react';

class SearchBar extends React.Component{
	state = { term : ''};
	
	onFormSubmit = (event) => {
		//default behavior for from submittal
		event.preventDefault();
		//in a class based componenet we reference the prop with 'this'
		this.props.onSubmit(this.state.term);
	}

	render(){
		return (
			<div className="ui segment"> 
				<form onSubmit= {this.onFormSubmit} className= "ui form">
					<div className="field">
						<label>Image Search</label>
						<input 
							type="text" 
							value={this.state.term} 
							onChange= {(event) => this.setState({ term: event.target.value})}
						/>
					</div>
				</form>
			</div>
		);
	}
};

export default SearchBar;