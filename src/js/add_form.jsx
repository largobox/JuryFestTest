class AddFormSection extends React.Component {
	render(){
		return (
			<div id = 'add_form_anchor' className = 'add_parent_form_cnt'>
				<section className = 'add_form_cnt'>
					<h2>Участникам</h2>
					<div className = 'add_form_cnt_el'>
						<h3>Номинации:</h3>
						<NominationList />
					</div>
					<div className = 'add_form_cnt_el'>
						<h3>Добавить спикера:</h3>
						<form>
							<ul>
								<li><input placeholder = 'Фамилия' onChange = {this.props.jurySernameChange} value = {this.props.jurySername}/></li>
								<li><input placeholder = 'Имя' onChange = {this.props.juryNameChange} value = {this.props.juryName}/></li>
								<li><input placeholder = 'Должность' onChange = {this.props.juryStatusChange} value = {this.props.juryStatus}/></li>
								<li><input placeholder = 'Компания' onChange = {this.props.juryCompanyChange} value = {this.props.juryCompany}/></li>
								<li className = 'upload_img_cnt'>
									<div className = 'real_input_file'>									
										<input type = 'file' onChange = {this.props.juryImageChange} value = ''/>
									</div>
									<div className = 'fake_input_file'>									
										<input placeholder = 'Прикрепить фото' value = {this.props.juryImageName}/>
										<object className = 'clip_cnt_hlp' data='dist/img/clip.svg'></object>
									</div>
								</li>
								<li><input placeholder = 'Укажите ссылку на сайт' onChange = {this.props.jurySiteChange} value = {this.props.jurySite}/></li>
							</ul>
						</form>
					</div>
					<div className = 'add_form_btns_cnt'>
						<div className = 'add_form_btn'>Подробнее</div>
						<div className = 'add_form_btn' onClick = {this.props.juryAdd}>Добавить спикера</div>
					</div>
				</section>
			</div>
		);
	}
}

function NominationList(){
	return (
		<ul>
			<li><b>Классическая реклама</b></li>
			<li>- Рекламная компания</li>
			<li>- Видео</li>
			<li>- Радио</li>
			<li>- Outdoor - реклама</li>
			<li>- Пресса</li>
			<li className = 'el_shift'>- Nonstandart</li>
			<li><b>Дизайн</b></li>
			<li>- Фирменный стиль</li>
			<li>- Упаковка</li>
			<li className = 'el_shift'>- Интерактивный дизайн</li>
			<li><b>Digital - реклама</b></li>
			<li>- Сайт</li>
			<li>- Мобильное приложение</li>
			<li>- Социальные медиа</li>
			<li className = 'el_shift'>- Digital out of home</li>
			<li><b>Спец. номинация от ИКРЫ</b></li>
			<li className = 'el_shift'>- Самая полезная реклама</li>
		</ul>
	);
}