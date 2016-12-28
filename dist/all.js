class NavBar extends React.Component {

	constructor() {
		super();
		this.state = {
			activeNavEl: ''
		};
	}

	isActive(ind) {
		return ind === this.state.activeNavEl ? 'active' : '';
	}

	handleClick(e) {
		this.setState({
			activeNavEl: e
		});
	}

	render() {
		return React.createElement(
			'nav',
			null,
			React.createElement(
				'ul',
				null,
				React.createElement(
					'li',
					{ className: this.isActive('0') },
					React.createElement(
						'a',
						{ href: '#about_fest_anchor', onClick: this.handleClick.bind(this, '0') },
						'\u041E \u0444\u0435\u0441\u0442\u0438\u0432\u0430\u043B\u0435'
					)
				),
				React.createElement(
					'li',
					{ className: this.isActive('1') },
					React.createElement(
						'a',
						{ href: '#jury_anchor', onClick: this.handleClick.bind(this, '1') },
						'\u0421\u043F\u0438\u043A\u0435\u0440\u044B \u0438 \u0436\u044E\u0440\u0438'
					)
				),
				React.createElement(
					'li',
					{ className: this.isActive('2') },
					React.createElement(
						'a',
						{ href: '#add_form_anchor', onClick: this.handleClick.bind(this, '2') },
						'\u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0430\u043C'
					)
				),
				React.createElement(
					'li',
					{ className: this.isActive('3') },
					React.createElement(
						'a',
						{ href: '#contacts_anchor', onClick: this.handleClick.bind(this, '3') },
						'\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B'
					)
				)
			)
		);
	}

}
function ExText(props) {
	return React.createElement(
		'p',
		null,
		props.number,
		' Lorem ipsum ',
		React.createElement(
			'span',
			null,
			'dolor'
		),
		' sit amet, consectetur adipisicing elit. Inventore, hic sapiente mollitia exercitationem optio fuga blanditiis? Maiores suscipit rerum aspernatur molestias natus nihil, dignissimos excepturi facere tempora, dolores necessitatibus, aliquam.'
	);
}

class AboutSection extends React.Component {

	constructor() {
		super();
		this.state = {
			activeAboutEl: ''
		};
	}

	isObjActive(ind) {
		return ind === this.state.activeAboutEl ? 'active_about_el' : '';
	}

	isLabelActive(ind) {
		return ind === this.state.activeAboutEl ? ' active_about_el_label' : '';
	}

	handleClick(v) {
		this.setState({
			activeAboutEl: v
		});
	}

	render() {
		return React.createElement(
			'header',
			{ id: 'about_fest_anchor', className: 'about_cnt' },
			React.createElement(
				'div',
				{ className: 'about_cnt_nav' },
				React.createElement(
					'div',
					{ className: 'about_el', onClick: this.handleClick.bind(this, '0') },
					React.createElement('object', { className: this.isObjActive('0'), data: 'dist/img/four_books.svg' }),
					React.createElement(
						'div',
						{ className: 'about_el_label' + this.isLabelActive('0') },
						'\u0444\u0438\u043B\u043E\u0441\u043E\u0444\u0438\u044F'
					)
				),
				React.createElement(
					'div',
					{ className: 'about_el', onClick: this.handleClick.bind(this, '1') },
					React.createElement('object', { className: this.isObjActive('1'), data: 'dist/img/lamp.svg' }),
					React.createElement(
						'div',
						{ className: 'about_el_label' + this.isLabelActive('1') },
						'\u0438\u0434\u0435\u044F'
					)
				),
				React.createElement(
					'div',
					{ className: 'about_el', onClick: this.handleClick.bind(this, '2') },
					React.createElement('object', { className: this.isObjActive('2'), data: 'dist/img/strange_rocket.svg' }),
					React.createElement(
						'div',
						{ className: 'about_el_label' + this.isLabelActive('2') },
						'\u0446\u0435\u043B\u0438'
					)
				)
			),
			React.createElement(
				'div',
				{ className: 'about_el_desc' },
				React.createElement(ExText, { number: this.state.activeAboutEl === '' ? 1 : this.state.activeAboutEl }),
				React.createElement(ExText, { number: this.state.activeAboutEl === '' ? 1 : this.state.activeAboutEl }),
				React.createElement(ExText, { number: this.state.activeAboutEl === '' ? 1 : this.state.activeAboutEl }),
				React.createElement(ExText, { number: this.state.activeAboutEl === '' ? 1 : this.state.activeAboutEl }),
				React.createElement(ExText, { number: this.state.activeAboutEl === '' ? 1 : this.state.activeAboutEl })
			)
		);
	}
}
function JuryMember(props) {
	return React.createElement(
		'li',
		{ key: props.member.id },
		React.createElement(
			'button',
			{ className: 'delete_btn_cnt', value: props.member.id, onClick: props.juryDelete },
			'\u0423\u0434\u0430\u043B\u0438\u0442\u044C'
		),
		React.createElement('img', { src: props.member.image }),
		React.createElement(
			'div',
			{ className: 'jury_name' },
			props.member.name,
			React.createElement('br', null),
			props.member.sername
		),
		React.createElement(
			'div',
			{ className: 'jury_status' },
			props.member.status,
			React.createElement('br', null),
			props.member.company
		),
		React.createElement(
			'div',
			{ className: 'jury_site' },
			props.member.site
		)
	);
}

class JurySection extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		let arr = this.props.members.slice(0, this.props.maxElements);

		return React.createElement(
			'div',
			{ id: 'jury_anchor', className: 'jury_parent_cnt' },
			React.createElement(
				'section',
				{ className: 'jury_cnt' },
				React.createElement(
					'h2',
					null,
					'\u0421\u043F\u0438\u043A\u0435\u0440\u044B \u0438 \u0436\u044E\u0440\u0438'
				),
				React.createElement(
					'ul',
					{ className: 'clearfix' },
					arr.map(m => React.createElement(JuryMember, { member: m, juryDelete: this.props.juryDelete }))
				),
				React.createElement(
					'div',
					{ className: 'jury_btns_cnt' },
					React.createElement(
						'div',
						{ className: 'jury_btn', onClick: this.props.increaseLimit },
						'\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0435\u0449\u0451'
					),
					React.createElement(
						'div',
						{ className: 'jury_btn jury_btn_add' },
						React.createElement(
							'a',
							{ href: '#add_form_anchor' },
							'\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u043F\u0438\u043A\u0435\u0440\u0430'
						)
					)
				)
			)
		);
	}

}
class AddFormSection extends React.Component {
	render() {
		return React.createElement(
			'div',
			{ id: 'add_form_anchor', className: 'add_parent_form_cnt' },
			React.createElement(
				'section',
				{ className: 'add_form_cnt' },
				React.createElement(
					'h2',
					null,
					'\u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0430\u043C'
				),
				React.createElement(
					'div',
					{ className: 'add_form_cnt_el' },
					React.createElement(
						'h3',
						null,
						'\u041D\u043E\u043C\u0438\u043D\u0430\u0446\u0438\u0438:'
					),
					React.createElement(NominationList, null)
				),
				React.createElement(
					'div',
					{ className: 'add_form_cnt_el' },
					React.createElement(
						'h3',
						null,
						'\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u043F\u0438\u043A\u0435\u0440\u0430:'
					),
					React.createElement(
						'form',
						null,
						React.createElement(
							'ul',
							null,
							React.createElement(
								'li',
								null,
								React.createElement('input', { placeholder: '\u0424\u0430\u043C\u0438\u043B\u0438\u044F', onChange: this.props.jurySernameChange, value: this.props.jurySername })
							),
							React.createElement(
								'li',
								null,
								React.createElement('input', { placeholder: '\u0418\u043C\u044F', onChange: this.props.juryNameChange, value: this.props.juryName })
							),
							React.createElement(
								'li',
								null,
								React.createElement('input', { placeholder: '\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C', onChange: this.props.juryStatusChange, value: this.props.juryStatus })
							),
							React.createElement(
								'li',
								null,
								React.createElement('input', { placeholder: '\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F', onChange: this.props.juryCompanyChange, value: this.props.juryCompany })
							),
							React.createElement(
								'li',
								{ className: 'upload_img_cnt' },
								React.createElement(
									'div',
									{ className: 'real_input_file' },
									React.createElement('input', { type: 'file', onChange: this.props.juryImageChange, value: '' })
								),
								React.createElement(
									'div',
									{ className: 'fake_input_file' },
									React.createElement('input', { placeholder: '\u041F\u0440\u0438\u043A\u0440\u0435\u043F\u0438\u0442\u044C \u0444\u043E\u0442\u043E', value: this.props.juryImageName }),
									React.createElement('object', { className: 'clip_cnt_hlp', data: 'dist/img/clip.svg' })
								)
							),
							React.createElement(
								'li',
								null,
								React.createElement('input', { placeholder: '\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0441\u0441\u044B\u043B\u043A\u0443 \u043D\u0430 \u0441\u0430\u0439\u0442', onChange: this.props.jurySiteChange, value: this.props.jurySite })
							)
						)
					)
				),
				React.createElement(
					'div',
					{ className: 'add_form_btns_cnt' },
					React.createElement(
						'div',
						{ className: 'add_form_btn' },
						'\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435'
					),
					React.createElement(
						'div',
						{ className: 'add_form_btn', onClick: this.props.juryAdd },
						'\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u043F\u0438\u043A\u0435\u0440\u0430'
					)
				)
			)
		);
	}
}

function NominationList() {
	return React.createElement(
		'ul',
		null,
		React.createElement(
			'li',
			null,
			React.createElement(
				'b',
				null,
				'\u041A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0440\u0435\u043A\u043B\u0430\u043C\u0430'
			)
		),
		React.createElement(
			'li',
			null,
			'- \u0420\u0435\u043A\u043B\u0430\u043C\u043D\u0430\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F'
		),
		React.createElement(
			'li',
			null,
			'- \u0412\u0438\u0434\u0435\u043E'
		),
		React.createElement(
			'li',
			null,
			'- \u0420\u0430\u0434\u0438\u043E'
		),
		React.createElement(
			'li',
			null,
			'- Outdoor - \u0440\u0435\u043A\u043B\u0430\u043C\u0430'
		),
		React.createElement(
			'li',
			null,
			'- \u041F\u0440\u0435\u0441\u0441\u0430'
		),
		React.createElement(
			'li',
			{ className: 'el_shift' },
			'- Nonstandart'
		),
		React.createElement(
			'li',
			null,
			React.createElement(
				'b',
				null,
				'\u0414\u0438\u0437\u0430\u0439\u043D'
			)
		),
		React.createElement(
			'li',
			null,
			'- \u0424\u0438\u0440\u043C\u0435\u043D\u043D\u044B\u0439 \u0441\u0442\u0438\u043B\u044C'
		),
		React.createElement(
			'li',
			null,
			'- \u0423\u043F\u0430\u043A\u043E\u0432\u043A\u0430'
		),
		React.createElement(
			'li',
			{ className: 'el_shift' },
			'- \u0418\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0439 \u0434\u0438\u0437\u0430\u0439\u043D'
		),
		React.createElement(
			'li',
			null,
			React.createElement(
				'b',
				null,
				'Digital - \u0440\u0435\u043A\u043B\u0430\u043C\u0430'
			)
		),
		React.createElement(
			'li',
			null,
			'- \u0421\u0430\u0439\u0442'
		),
		React.createElement(
			'li',
			null,
			'- \u041C\u043E\u0431\u0438\u043B\u044C\u043D\u043E\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435'
		),
		React.createElement(
			'li',
			null,
			'- \u0421\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0435 \u043C\u0435\u0434\u0438\u0430'
		),
		React.createElement(
			'li',
			{ className: 'el_shift' },
			'- Digital out of home'
		),
		React.createElement(
			'li',
			null,
			React.createElement(
				'b',
				null,
				'\u0421\u043F\u0435\u0446. \u043D\u043E\u043C\u0438\u043D\u0430\u0446\u0438\u044F \u043E\u0442 \u0418\u041A\u0420\u042B'
			)
		),
		React.createElement(
			'li',
			{ className: 'el_shift' },
			'- \u0421\u0430\u043C\u0430\u044F \u043F\u043E\u043B\u0435\u0437\u043D\u0430\u044F \u0440\u0435\u043A\u043B\u0430\u043C\u0430'
		)
	);
}
function Footer() {
	return React.createElement(
		'footer',
		{ id: 'contacts_anchor' },
		React.createElement(
			'div',
			{ className: 'footer_inner' },
			React.createElement(
				'h2',
				null,
				'\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B'
			),
			React.createElement(
				'div',
				{ className: 'social_cnt' },
				React.createElement(
					'ul',
					null,
					React.createElement(
						'li',
						null,
						React.createElement('object', { data: 'dist/img/social/vk.svg' })
					),
					React.createElement(
						'li',
						null,
						React.createElement('object', { data: 'dist/img/social/facebook.svg' })
					),
					React.createElement(
						'li',
						null,
						React.createElement('object', { data: 'dist/img/social/instagram.svg' })
					)
				)
			),
			React.createElement(
				'h2',
				null,
				'8-800-500-05-97'
			),
			React.createElement(
				'p',
				null,
				'info@test.com'
			)
		),
		React.createElement(
			'div',
			{ className: 'logo_cnt' },
			React.createElement('object', { data: 'dist/img/logo.svg' })
		)
	);
}
function JuryList(props) {
	let arr = props.members.slice(0, props.maxElements);

	return React.createElement(
		'ul',
		null,
		arr.map(el => React.createElement(
			'div',
			null,
			React.createElement(
				'li',
				{ key: el.id },
				el.name
			),
			React.createElement(
				'button',
				{ onClick: props.juryDelete, value: el.id },
				'\u0423\u0434\u0430\u043B\u0438\u0442\u044C'
			)
		))
	);
}

class JuryApp extends React.Component {

	constructor(props) {
		super(props);
		this.jurySernameChange = this.jurySernameChange.bind(this);
		this.juryNameChange = this.juryNameChange.bind(this);
		this.juryStatusChange = this.juryStatusChange.bind(this);
		this.juryCompanyChange = this.juryCompanyChange.bind(this);
		this.juryImageChange = this.juryImageChange.bind(this);
		this.jurySiteChange = this.jurySiteChange.bind(this);
		this.juryAdd = this.juryAdd.bind(this);
		this.increaseLimit = this.increaseLimit.bind(this);
		this.juryDelete = this.juryDelete.bind(this);
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
		};
	}

	jurySernameChange(e) {
		this.setState({ jurySername: e.target.value });
	}
	juryNameChange(e) {
		this.setState({ juryName: e.target.value });
	}
	juryStatusChange(e) {
		this.setState({ juryStatus: e.target.value });
	}
	juryCompanyChange(e) {
		this.setState({ juryCompany: e.target.value });
	}
	jurySiteChange(e) {
		this.setState({ jurySite: e.target.value });
	}

	juryImageChange(e) {
		let n = e.target.value.search(/\w+\.\w+/);

		this.setState({
			juryImageName: e.target.value.substring(n)
		});

		let file = e.target.files[0];
		let reader = new FileReader();
		let url = reader.readAsDataURL(file);

		reader.onloadend = function (e) {
			this.setState({
				juryImage: [reader.result]
			});
		}.bind(this);
	}

	increaseLimit() {
		this.setState(prevState => ({
			maxElements: prevState.maxElements + 5
		}));
	}

	juryAdd() {
		var newMember = {
			id: this.state.idCounter,
			sername: this.state.jurySername,
			name: this.state.juryName,
			status: this.state.juryStatus,
			company: this.state.juryCompany,
			image: this.state.juryImage,
			site: this.state.jurySite
		};

		this.setState(prevState => ({
			members: prevState.members.concat(newMember),
			jurySername: '',
			juryName: '',
			juryStatus: '',
			juryCompany: '',
			juryImage: '',
			juryImageName: '',
			jurySite: '',
			idCounter: prevState.idCounter + 1
		}));
	}

	juryDelete(e) {
		let value = parseInt(e.target.value);

		this.setState(prevState => ({
			members: prevState.members.filter(function (member) {
				return member.id !== value;
			})
		}));
	}

	render() {
		return React.createElement(
			'div',
			null,
			React.createElement('div', { className: 'section_divider' }),
			React.createElement(NavBar, null),
			React.createElement(AboutSection, null),
			React.createElement('div', { className: 'section_divider' }),
			React.createElement(JurySection, { members: this.state.members,
				juryDelete: this.juryDelete,
				maxElements: this.state.maxElements,
				increaseLimit: this.increaseLimit
			}),
			React.createElement('div', { className: 'section_divider' }),
			React.createElement(AddFormSection, { jurySernameChange: this.jurySernameChange,
				juryNameChange: this.juryNameChange,
				juryStatusChange: this.juryStatusChange,
				juryCompanyChange: this.juryCompanyChange,
				juryImageChange: this.juryImageChange,
				jurySiteChange: this.jurySiteChange,
				jurySername: this.state.jurySername,
				juryName: this.state.juryName,
				juryStatus: this.state.juryStatus,
				juryCompany: this.state.juryCompany,
				jurySite: this.state.jurySite,
				juryImage: this.state.juryImage,
				juryImageName: this.state.juryImageName,
				juryAdd: this.juryAdd
			}),
			React.createElement(Footer, null)
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

ReactDOM.render(React.createElement(JuryApp, { members: [] }), document.getElementById('root'));