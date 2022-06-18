import React from 'react';

export const validationConfig = {
  formSelector: '.form',
  inputSelector: '.form__item',
  submitButtonSelector: '.form__save-button',
  inactiveButtonClass: 'form__save-button_disabled',
  inputErrorClass: 'form__item_type_error',
  errorClass: 'form__item-error_active',
};

export const authConfig = {
  token: 'eb3b2bc4-a18d-46ae-aeed-207ad13f265c',
  cohortId: 'cohort-41',
};

export const fieldsetAddPlace = (
  <fieldset className="form__fields">
    <input
      className="form__item"
      id="cardNameField"
      type="text"
      name="name"
      defaultValue=""
      placeholder="Название"
      required
      minLength="2"
      maxLength="40"
    />
    <span className="form__item-error cardNameField-error"></span>
    <input
      className="form__item"
      id="cardLinkField"
      type="url"
      name="link"
      defaultValue=""
      placeholder="Ссылка на картинку"
      required
    />
    <span className="form__item-error cardLinkField-error"></span>
  </fieldset>
);
export const fieldsetEditProfile = (
  <fieldset className="form__fields">
    <input
      className="form__item"
      id="profileNameEditField"
      type="text"
      name="name"
      defaultValue=""
      required
      minLength="2"
      maxLength="40"
    />
    <span className="form__item-error profileNameEditField-error"></span>
    <input
      className="form__item"
      id="profileDescriptionEditField"
      type="text"
      name="description"
      defaultValue=""
      required
      minLength="2"
      maxLength="200"
    />
    <span className="form__item-error profileDescriptionEditField-error"></span>
  </fieldset>
);

export const fieldsetEditAvstar = (
  <fieldset className="form__fields">
    <input
      className="form__item"
      id="avatarLinkField"
      type="url"
      name="link"
      defaultValue=""
      placeholder="Ссылка на картинку"
      required
    />
    <span className="form__item-error avatarLinkField-error"></span>
  </fieldset>
);
