import React from 'react'
import PropTypes from 'prop-types'

const Flex = props => {
  return (
    <div
      test-id="flex-component"
      className={props.className}
      style={{
        display: props.container ? 'flex' : 'block',
        justifyContent: props.justifyContent || 'flex-start',
        flexDirection: props.flexDirection || 'row',
        flexGrow: props.flexGrow || 0,
        flexBasis: props.flexBasis || 'auto',
        flexShrink: props.flexShrink || 1,
        flexWrap: props.flexWrap || 'nowrap',
        flex: props.flex || '0 1 auto',
        alignItems: props.alignItems || 'stretch',
        margin: props.margin || '0',
        padding: props.padding || '0',
        width: props.width || 'auto',
        height: props.height || 'auto',
        maxWidth: props.maxWidth || 'none',
      }}>
      {props.children}
    </div>
  )
}

Flex.propTypes = {
  container: PropTypes.bool,
  justifyContent: PropTypes.string,
  flexDirection: PropTypes.string,
  flexGrow: PropTypes.number,
  flexBasis: PropTypes.string,
  flexShrink: PropTypes.number,
  flexWrap: PropTypes.string,
  flex: PropTypes.string,
  alignItems: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  maxWidth: PropTypes.string,
  children: PropTypes.element.isRequired,
}

export default Flex
