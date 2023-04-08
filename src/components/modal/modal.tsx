import React from 'react';
import { RiCloseLine } from 'react-icons/ri';
import { PersonsSW } from '../../routes/types';
import {
  CloseButton,
  HeadingStyled,
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

type ModalProps = {
  setIsOpen: (bool: boolean) => void;
  monster: PersonsSW;
}

const Modal = ({ setIsOpen, monster }: ModalProps) => {
  return (
    <>
      <ModalStyledDarkBg onClick={() => setIsOpen(false)} />
      <ModalStyledCentered>
        <ModalStyledModal>
          <ModalStyledHeader>
            <HeadingStyled>{monster.name}</HeadingStyled>
          </ModalStyledHeader>
          <CloseButton onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: '-3px' }} />
          </CloseButton>
          <ModalStyledContent>Birth: {monster.birth_year}</ModalStyledContent>
          <ModalStyledContent>Eye color: {monster.eye_color}</ModalStyledContent>
          <ModalStyledContent>Gender: {monster.gender}</ModalStyledContent>
          <ModalStyledContent>Hair color: {monster.hair_color}</ModalStyledContent>
          <ModalStyledContent>Mass: {monster.mass}</ModalStyledContent>
          <ModalStyledContent>Skin color: {monster.skin_color}</ModalStyledContent>
          <ModalStyledActions>
            <ModalStyledActionsContainer>
              {/* <ModalStyledBtnDelete onClick={() => setIsOpen(false)}>Delete</ModalStyledBtnDelete>
              <ModalStyledBtnCancel onClick={() => setIsOpen(false)}>Cancel</ModalStyledBtnCancel> */}
            </ModalStyledActionsContainer>
          </ModalStyledActions>
        </ModalStyledModal>
      </ModalStyledCentered>
    </>
  );
};

export default Modal;
