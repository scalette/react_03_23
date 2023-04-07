import React from 'react';
import { RiCloseLine } from 'react-icons/ri';
import {
  CloseButton,
  HeadingStyled,
  ModalStyled,
  ModalStyledActions,
  ModalStyledActionsContainer,
  ModalStyledBtnCancel,
  ModalStyledBtnDelete,
  ModalStyledCentered,
  ModalStyledContent,
  ModalStyledDarkBg,
  ModalStyledHeader,
  ModalStyledModal,
} from './modal.styles';

const Modal = ({ setIsOpen }) => {
  return (
    <>
      <ModalStyledDarkBg onClick={() => setIsOpen(false)} />
      <ModalStyledCentered>
        <ModalStyledModal>
          <ModalStyledHeader>
            <HeadingStyled>Dialog</HeadingStyled>
          </ModalStyledHeader>
          <CloseButton onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: '-3px' }} />
          </CloseButton>
          <ModalStyledContent>Are you sure you want to delete the item?</ModalStyledContent>

          <ModalStyledActions>
            <ModalStyledActionsContainer>
              <ModalStyledBtnDelete onClick={() => setIsOpen(false)}>Delete</ModalStyledBtnDelete>
              <ModalStyledBtnCancel onClick={() => setIsOpen(false)}>Cancel</ModalStyledBtnCancel>
            </ModalStyledActionsContainer>
          </ModalStyledActions>
        </ModalStyledModal>
      </ModalStyledCentered>
    </>
  );
};

export default Modal;
