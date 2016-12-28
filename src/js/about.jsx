function ExText(props){
	return (<p>{props.number} Lorem ipsum <span>dolor</span> sit amet, consectetur adipisicing elit. 
		Inventore, hic sapiente mollitia exercitationem optio fuga blanditiis? 
		Maiores suscipit rerum aspernatur molestias natus nihil, dignissimos excepturi facere tempora, 
		dolores necessitatibus, aliquam.</p>);
}

class AboutSection extends React.Component {

	constructor(){
		super();
		this.state = {
			activeAboutEl: ''
		}
	}

	isObjActive(ind){
		return ind === this.state.activeAboutEl ? 'active_about_el' : ''
	}

	isLabelActive(ind){
		return ind === this.state.activeAboutEl ? ' active_about_el_label' : ''
	}

	handleClick(v){
		this.setState({
			activeAboutEl: v
		});
	}

	render(){
		return (
			<header id = 'about_fest_anchor' className = 'about_cnt'>
				<div className = 'about_cnt_nav'>
					<div className = 'about_el' onClick = {this.handleClick.bind(this, '0')}>
						<object className = {this.isObjActive('0')} data='dist/img/four_books.svg'></object>
						<div className = {'about_el_label' + this.isLabelActive('0')}>философия</div>
					</div>
					<div className = 'about_el' onClick = {this.handleClick.bind(this, '1')}>
						<object className = {this.isObjActive('1')} data='dist/img/lamp.svg'></object>
						<div className = {'about_el_label' + this.isLabelActive('1')}>идея</div>
					</div>
					<div className = 'about_el' onClick = {this.handleClick.bind(this, '2')}>
						<object className = {this.isObjActive('2')} data='dist/img/strange_rocket.svg'></object>
						<div className = {'about_el_label' + this.isLabelActive('2')}>цели</div>
					</div>										
				</div>
				<div className = 'about_el_desc'>
					<ExText number={this.state.activeAboutEl === '' ? 1 : this.state.activeAboutEl}/>
					<ExText number={this.state.activeAboutEl === '' ? 1 : this.state.activeAboutEl}/>								
					<ExText number={this.state.activeAboutEl === '' ? 1 : this.state.activeAboutEl}/>								
					<ExText number={this.state.activeAboutEl === '' ? 1 : this.state.activeAboutEl}/>								
					<ExText number={this.state.activeAboutEl === '' ? 1 : this.state.activeAboutEl}/>																
				</div>
			</header>
		);
	}
}