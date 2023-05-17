import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Backdrop, ModalWindow } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleEscKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscKeyDown);
  }

  handleEscKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = event => {
    if (event.currentTarget !== event.target) {
      this.props.onClose();
    }
  };

  render() {
    const { children } = this.props;

    return createPortal(
      <Backdrop onClick={this.handleBackdropClick}>
        <ModalWindow>{children}</ModalWindow>
      </Backdrop>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};
