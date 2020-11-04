import React from 'react'
import { useState, useRef } from 'react'
import { Button } from '@material-ui/core'
import './Collapsible.css'
function Collapsible({ label, children }) {
  const [isOpen, setIsOpen] = useState(false)

  const parentRef = useRef()

  if (parentRef.current) console.log(parentRef.current.scrollHeight)
  return (
    <div className='collapsible'>
      <Button
        className='toggle'
        variant='contained'
        color='primary'
        onClick={() => setIsOpen(!isOpen)}
        style={{ marginBottom: '0.5rem' }}
      >
        {label}
      </Button>
      <div
        className='content-parent'
        ref={parentRef}
        style={
          isOpen
            ? {
                height: parentRef.current.scrollHeight + 'px',
              }
            : { height: '0px' }
        }
      >
        <div className='content'>{children}</div>
      </div>
    </div>
  )
}

export default Collapsible
