function JuryList(props){
	let arr = props.members.slice(0, props.maxElements);

	return (
		<ul>
			{ arr.map( el => ( 
					<div>
						<li key={el.id}>{el.name}</li>
						<button onClick = {props.juryDelete} value = {el.id}>Удалить</button>
					</div>
				))
			}
		</ul>
	);
}

class JuryApp extends React.Component {

	constructor(props){
		super(props)
		this.jurySernameChange = this.jurySernameChange.bind(this)
		this.juryNameChange = this.juryNameChange.bind(this)
		this.juryStatusChange = this.juryStatusChange.bind(this)
		this.juryCompanyChange = this.juryCompanyChange.bind(this)
		this.juryImageChange = this.juryImageChange.bind(this)
		this.jurySiteChange = this.jurySiteChange.bind(this)
		this.juryAdd = this.juryAdd.bind(this)
		this.increaseLimit = this.increaseLimit.bind(this)
		this.juryDelete = this.juryDelete.bind(this)
		this.state = {
			idCounter: 0,
			members: props.members,
			maxElements: 5,
			jurySername: '',
			juryName: '',	
			juryStatus: '',
			juryCompany: '',
			juryImage: '',
			juryImageName: '',
			jurySite: ''
		}
	}

	jurySernameChange(e){ this.setState({jurySername: e.target.value});}
	juryNameChange(e){ this.setState({juryName: e.target.value});}
	juryStatusChange(e){ this.setState({juryStatus: e.target.value});}
	juryCompanyChange(e){ this.setState({juryCompany: e.target.value});}
	jurySiteChange(e){ this.setState({jurySite: e.target.value});}

	juryImageChange(e){
		let n = e.target.value.search(/\w+\.\w+/);

		this.setState({
			juryImageName: e.target.value.substring(n)
		});

		let file = e.target.files[0]
		let reader = new FileReader()
		let url = reader.readAsDataURL(file)

		reader.onloadend = function(e){
			this.setState({
				juryImage: [reader.result]
			})
		}.bind(this)
	}

	increaseLimit(){
		this.setState( prevState => ({
			maxElements: prevState.maxElements + 5
		}));
	}

	juryAdd(){
		var newMember = {
			id: this.state.idCounter,
			sername: this.state.jurySername,
			name: this.state.juryName,
			status: this.state.juryStatus,
			company: this.state.juryCompany,
			image: this.state.juryImage,
			site: this.state.jurySite
		}

		this.setState( prevState => ({ 
			members: prevState.members.concat(newMember),
			jurySername: '',
			juryName: '',
			juryStatus: '',
			juryCompany: '',
			juryImage: '',
			juryImageName: '',
			jurySite: '',
			idCounter: prevState.idCounter+1
		}));
	}

	juryDelete(e){
		let value = parseInt(e.target.value);	

		this.setState( prevState => ({
				members: prevState.members.filter(function(member){return member.id !== value})
			})
		)
	}

	render(){
		return (
			<div>
				<div className = 'section_divider'></div>
				<NavBar />
				<AboutSection />
				<div className = 'section_divider'></div>
				<JurySection	members = {this.state.members}
											juryDelete = {this.juryDelete}
											maxElements = {this.state.maxElements}
											increaseLimit = {this.increaseLimit}
				/>
				<div className = 'section_divider'></div>
				<AddFormSection jurySernameChange = {this.jurySernameChange}
												juryNameChange = {this.juryNameChange}
												juryStatusChange = {this.juryStatusChange}
												juryCompanyChange = {this.juryCompanyChange}
												juryImageChange = {this.juryImageChange}
												jurySiteChange = {this.jurySiteChange}
												jurySername = {this.state.jurySername}
												juryName = {this.state.juryName}
												juryStatus = {this.state.juryStatus}
												juryCompany = {this.state.juryCompany}
												jurySite = {this.state.jurySite}
												juryImage = {this.state.juryImage}
												juryImageName = {this.state.juryImageName}
												juryAdd = {this.juryAdd}
				/>
				<Footer />
			</div>
		);
	}	
}

// let juryVar = [
// 	{
// 		id: -2,
// 		sername: 'Лукичева',
// 		name: 'Ксения',
// 		status: 'Вице-президент',
// 		company: 'Ассоциации Коммуникационных Агентств России',
// 		site: 'www.akarussia.ru'
// 	},
// 	{
// 		id: -1,
// 		sername: 'Загорский',
// 		name: 'Саша',
// 		status: 'Вице-президент',
// 		company: 'Ассоциации Коммуникационных Агентств России',
// 		site: 'www.akarussia.ru'
// 	}
// ];

ReactDOM.render(<JuryApp members = {[]} />,	document.getElementById('root'));