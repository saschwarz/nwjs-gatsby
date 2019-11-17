import React from 'react'

export const Card = ({ children }) => {
  return (
    <div
      sx={{
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        textAlign: 'center',
      }}>
        {children}
    </div>
  )
}

export default Card