import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MdClose } from 'react-icons/md';
import { Formik } from 'formik';
import { closeModalWindow } from 'hooks/modalWindow';
import { cleanModal } from 'redux/modal/operation';
import { modalComponent } from 'redux/modal/selectors';
import { register } from 'redux/auth/operations';
import schemas from 'utils/schemas';
import { BASE_URL_IMG } from 'helpers/constants';
import {
  SBtnLight,
  SDataPlaceWrapper,
  SDetailsWrapper,
  SEventDate,
  SEventImages,
  SEventTitle,
  SelectedEvent,
} from './RegisterModal.styled';
import {
  Error,
  FormField,
  FormLabel,
  FormList,
  FormTitle,
  FormInput,
  StyledForm,
} from 'components/baseStyles/Form.styled';
import { Backdrop, CloseBtn, Modal } from 'components/baseStyles/Modal.styled';

export const RegisterModal = ({ event }) => {
  const modal = useSelector(modalComponent);
  const dispatch = useDispatch();

  const createService = values => {
    const { name, surname, email, phone, company, position, event } = values;
    dispatch(
      register({
        name,
        surname,
        email,
        phone,
        company,
        position,
        event,
      }),
    );
    setIsLoading(false);
  };

  const closeDataModal = e => {
    e.preventDefault();
    dispatch(cleanModal());
    closeModalWindow(e);
  };

  return createPortal(
    Object.values(modal)[0] === 'event' && (
      <Backdrop
        onClick={e => {
          if (e.currentTarget === e.target) closeDataModal(e);
        }}
      >
        <Modal onClick={e => e.stopPropagation()}>
          <CloseBtn
            type="button"
            onClick={e => closeDataModal(e)}
            aria-label="Close modal"
          >
            <MdClose />
          </CloseBtn>
          <Formik
            initialValues={{
              name: '',
              surname: '',
              email: '',
              phone: '',
              company: '',
              position: '',
              event: event._id,
            }}
            onSubmit={(values, { setSubmitting }) => {
              createService(values);
              dispatch(addReload(false));
              setSubmitting(false);
              dispatch(cleanModal());
              closeDataModal(e);
            }}
            enableReinitialize={true}
            validationSchema={schemas.registerSchema}
          >
            {({
              handleChange,
              handleSubmit,
              setFieldValue,
              isSubmitting,
              values,
              errors,
              touched,
            }) => (
              <StyledForm
                autoComplete="off"
                onSubmit={handleSubmit}
                onChange={handleChange}
              >
                <FormTitle>Register for the event</FormTitle>
                <FormList>
                  <FormField>
                    <FormLabel htmlFor="name">
                      <span>Name</span>
                      {errors.name && touched.name ? (
                        <Error>{errors.name}</Error>
                      ) : null}
                    </FormLabel>
                    <FormInput
                      id="name"
                      type="text"
                      name="name"
                      placeholder="James"
                      value={values.name}
                    />
                  </FormField>
                  <FormField>
                    <FormLabel htmlFor="surname">
                      <span>Surname</span>
                      {errors.surname && touched.surname ? (
                        <Error>{errors.surname}</Error>
                      ) : null}
                    </FormLabel>
                    <FormInput
                      id="surname"
                      type="text"
                      name="surname"
                      placeholder="Bond"
                      value={values.surname}
                    />
                  </FormField>
                  <FormField>
                    <FormLabel htmlFor="email">
                      <span>Email</span>
                      {errors.email && touched.email ? (
                        <Error>{errors.email}</Error>
                      ) : null}
                    </FormLabel>
                    <FormInput
                      id="email"
                      type="email"
                      name="email"
                      placeholder="email@gmail.com"
                      value={values.email}
                    />
                  </FormField>
                  <FormField>
                    <FormLabel htmlFor="phone">
                      <span>Phone</span>
                      {errors.phone && touched.phone ? (
                        <Error>{errors.phone}</Error>
                      ) : null}
                    </FormLabel>
                    <FormInput
                      id="phone"
                      type="tel"
                      name="phone"
                      placeholder="+1234567890"
                      value={values.phone}
                    />
                  </FormField>
                  <FormField>
                    <FormLabel htmlFor="company">
                      <span>Company</span>
                      {errors.company && touched.company ? (
                        <Error>{errors.company}</Error>
                      ) : null}
                    </FormLabel>
                    <FormInput
                      id="company"
                      type="text"
                      name="company"
                      placeholder="Brand Maze"
                      value={values.company}
                    />
                  </FormField>
                  <FormField>
                    <FormLabel htmlFor="position">
                      <span>Position</span>
                      {errors.position && touched.position ? (
                        <Error>{errors.position}</Error>
                      ) : null}
                    </FormLabel>
                    <FormInput
                      id="position"
                      type="text"
                      name="position"
                      placeholder="CEO"
                      value={values.position}
                    />
                  </FormField>
                </FormList>
                <SelectedEvent>
                  <SEventImages
                    // src={event.image ? BASE_URL_IMG + event.image : defaultImg}
                    src={event.image ? event.image : defaultImg}
                    alt={event.title}
                    width="325"
                    height="322"
                    loading="lazy"
                  />
                  <SDetailsWrapper>
                    <SDataPlaceWrapper>
                      <SEventDate>
                        {new Date(event.date).toLocaleDateString()}
                      </SEventDate>
                      <SEventDate>{event.location}</SEventDate>
                    </SDataPlaceWrapper>
                    <SEventTitle>{event.title}</SEventTitle>
                  </SDetailsWrapper>
                </SelectedEvent>
                <SBtnLight
                  type="submit"
                  disabled={isSubmitting}
                  aria-label="Submit"
                >
                  Send
                </SBtnLight>
              </StyledForm>
            )}
          </Formik>
        </Modal>
      </Backdrop>
    ),
    document.querySelector('#popup-root'),
  );
};

RegisterModal.propTypes = {
  event: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    plan: PropTypes.any,
    speakers: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        company: PropTypes.string,
        position: PropTypes.string,
      }),
    ).isRequired,
    moderator: PropTypes.string,
    packages: PropTypes.array.isRequired,
    image: PropTypes.string,
  }),
};