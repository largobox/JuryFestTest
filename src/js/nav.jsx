class NavBar extends React.Component {

	constructor(){
		super();
		this.state = {
			activeNavEl: ''
		}
	}

	isActive(ind){
		return ind === this.state.activeNavEl ? 'active' : ''
	}

	handleClick(e){
		this.setState({
			activeNavEl: e
		});
	}

	render(){
		return (
			<nav>
				<ul>
					<li className = {this.isActive('0')}><a href = '#about_fest_anchor' onClick = {this.handleClick.bind(this, '0')}>О фестивале</a></li>
					<li className = {this.isActive('1')}><a href = '#jury_anchor' onClick = {this.handleClick.bind(this, '1')}>Спикеры и жюри</a></li>
					<li className = {this.isActive('2')}><a href = '#add_form_anchor' onClick = {this.handleClick.bind(this, '2')}>Участникам</a></li>
					<li className = {this.isActive('3')}><a href = '#contacts_anchor' onClick = {this.handleClick.bind(this, '3')}>Контакты</a></li>
				</ul>
			</nav>
		);
	}

}