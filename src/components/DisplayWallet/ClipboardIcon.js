import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ClipboardIconWrapper = styled.svg`
  width: 15px;
  height: auto;
  &:hover {
    cursor: pointer;
  }
`

const ClipboardIcon = ({ onClick }) => (
  <ClipboardIconWrapper
    version='1.1'
    id='Capa_1'
    x='0px'
    y='0px'
    viewBox='0 0 699.428 699.428'
    role='button'
    onClick={onClick}
  >
    <g>
      <g id='_x38__25_'>
        <g>
          <path
            d='M502.714,415.285h-306c-12.065,0-21.857,9.793-21.857,21.857c0,12.066,9.792,21.857,21.857,21.857h306
				c12.065,0,21.857-9.791,21.857-21.857C524.571,425.078,514.779,415.285,502.714,415.285z M502.714,524.572h-306
				c-12.065,0-21.857,9.791-21.857,21.855c0,12.066,9.792,21.857,21.857,21.857h306c12.065,0,21.857-9.791,21.857-21.857
				C524.571,534.363,514.779,524.572,502.714,524.572z M568.285,87.429h-65.571V43.714h-58.883C424.902,17.683,390.062,0,349.714,0
				c-40.348,0-75.188,17.683-94.117,43.714h-58.883v43.714h-65.571c-48.283,0-87.429,39.146-87.429,87.428V612
				c0,48.283,39.146,87.428,87.429,87.428h437.143c48.282,0,87.429-39.145,87.429-87.428V174.857
				C655.714,126.575,616.567,87.429,568.285,87.429z M240.428,87.429h48.566c0-24.13,27.19-43.714,60.719-43.714
				c33.529,0,60.719,19.562,60.719,43.714H459v87.428H240.428V87.429z M612,612c0,24.131-19.562,43.715-43.715,43.715H131.143
				c-24.152,0-43.714-19.584-43.714-43.715V174.857c0-24.13,19.562-43.714,43.714-43.714h65.571v87.429h306v-87.429h65.571
				c24.152,0,43.715,19.584,43.715,43.714V612z M502.714,306h-306c-12.065,0-21.857,9.792-21.857,21.857
				c0,12.065,9.792,21.857,21.857,21.857h306c12.065,0,21.857-9.792,21.857-21.857C524.571,315.792,514.779,306,502.714,306z'
          />
        </g>
      </g>
    </g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
  </ClipboardIconWrapper>
)

ClipboardIcon.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default ClipboardIcon