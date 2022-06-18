function PopupWithForm(props) {
  return (
    <div className={`pop-up  ${props.isOpen && 'pop-up_opened'}`} id={props.id}>
      <div className="pop-up__form">
        <form name={''} className="form" noValidate>
          <h2 className="form__header">{props.title}</h2>
          {props.children}
          <button className="form__save-button" type="submit">
            Сохранить
          </button>
          <button
            className="pop-up__close-button"
            type="button"
            onClick={props.onClose}
          ></button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
