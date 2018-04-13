import React from 'react'

const Loading = () => {
  return (
    <span className='icon is-medium'>
      <span className='fa-stack'>
        <i className='fas fa-spinner fa-pulse fa-stack-2x' />
      </span>
    </span>
  )
}

export default Loading
