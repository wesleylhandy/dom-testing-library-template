import React from "react"
import ReactModal from "react-modal"
import PropTypes from "prop-types"
import styled, { keyframes } from "styled-components"
import { rem } from "polished"

import colors from "../theme/sections/colors"
import zIndexes from "../theme/sections/zindex"

ReactModal.setAppElement(`#___gatsby`)

const animContainer = keyframes`
  0%   { opacity: 0; }
  100% { opacity: 1; }
`

const customStyles = {
  // http://reactcommunity.org/react-modal/styles/
  overlay: {
    position: `fixed`,
    zIndex: zIndexes.ziModal,
    top: 0,
    left: 0,
    background: `transparent`,
    width: `100%`,
    height: `100%`,
    display: `flex`,
    overflowY: `scroll`,
    padding: `${rem(50)} 0`,
  },
  content: {
    padding: 0,
    position: `relative`,
    overflow: `visible`,
    WebkitOverflowScrolling: `auto`,
    outline: `none`,
    borderRadius: 0,
    border: `none`,
    background: `transparent`,
    color: colors.colorWhite,
    alignSelf: `center`,
    margin: `auto auto`,
    width: `${rem(898)}`,
    maxWidth: `90%`,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
}

const Container = styled.div`
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  color: ${(props) => props.theme.colorBlack};
  background: ${(props) => props.theme.colorWhite};
  animation: ${animContainer} 0.25s linear;
`

const Close = styled.button`
  position: absolute;
  top: ${rem(20)};
  right: ${rem(20)};
  width: ${rem(27)};
  height: ${rem(27)};
  transform: rotate(-45deg);

  &::before,
  &::after {
    content: "";
    display: block;
    position: absolute;
    background: #000;
  }

  &::before {
    top: ${rem(13)};
    left: 0;
    width: 100%;
    height: 1px;
  }

  &::after {
    width: 1px;
    height: 100%;
    top: 0;
    left: ${rem(13)};
  }
`

const Modal = (props) => (
  <ReactModal
    style={customStyles}
    shouldCloseOnOverlayClick={true}
    isOpen={props.isModalOpen}
    onRequestClose={props.closeClick}
  >
    <Container>
      {props.children}

      <Close onClick={props.closeClick}></Close>
    </Container>
  </ReactModal>
)

Modal.propTypes = {
  children: PropTypes.node,
  closeClick: PropTypes.func,
  isModalOpen: PropTypes.bool,
}

export default Modal
