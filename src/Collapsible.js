import React from 'react'
import { useState } from 'react'
import { Button } from '@material-ui/core'

function Collapsible({ label, children }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <Button
        className='toggle'
        variant='contained'
        color='primary'
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
      </Button>
      {isOpen && <div className='content'>{children}</div>}
    </div>
  )
}

export default Collapsible
