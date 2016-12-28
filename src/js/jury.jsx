function JuryMember(props){
	return (
		<li key = {props.member.id}>
			<button className = 'delete_btn_cnt' value = {props.member.id} onClick = {props.juryDelete}>Удалить</button>
			<img src = {props.member.image}/>
			<div className = 'jury_name'>{props.member.name}<br/>{props.member.sername}</div>
			<div className = 'jury_status'>{props.member.status}<br/>{props.member.company}</div>
			<div className = 'jury_site'>{props.member.site}</div>
		</li>
	);
}

class JurySection extends React.Component {

	constructor(props){
		super(props)
	}

	render(){

		let arr = this.props.members.slice(0, this.props.maxElements);

		return (
			<div id = 'jury_anchor' className = 'jury_parent_cnt'>
				<section className = 'jury_cnt'>
					<h2>Спикеры и жюри</h2>
					<ul className = 'clearfix'>
						{	arr.map( m => <JuryMember member = {m} juryDelete = {this.props.juryDelete} />)	}
					</ul>
					<div className = 'jury_btns_cnt'>
						<div className = 'jury_btn' onClick= {this.props.increaseLimit}>Показать ещё</div>
						<div className = 'jury_btn jury_btn_add'><a href = '#add_form_anchor'>Добавить спикера</a></div>
					</div>
				</section>
			</div>
		);
	}

}