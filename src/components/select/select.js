import React, { useState, useRef, useEffect } from 'react'
import arrow_down from '../../assets/images/arrow-down.png'
import './select.css'

const Select = ({
  value,
  handleChangeValue,
  values,
  placeholder,
  itemsBackground,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleChangeIsOpen = () => {
    setIsOpen(!isOpen)
  }
  const rootEl = useRef(null)

  useEffect(() => {
    const onClick = (e) => {
      if (rootEl.current)
        return rootEl.current.contains(e.target) || setIsOpen(false)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return (
    <div style={{ backgroundColor: '#222', position: 'relative' }} ref={rootEl}>
      <button 
        onClick={handleChangeIsOpen}
        style={{
          width: '100%',
          border: !isOpen ? '1px solid gray' : '1px solid #F67C04',
          borderRadius: 5,
          padding: 10,
          display: 'flex',
          color: isOpen ? 'lightgray' : 'white',
          fontFamily: 'Rajdhani',
          fontWeight: 600,
          fontSize: 16,
          background: 'transparent',
          cursor: 'pointer',
        }}
      >
        {isOpen ? placeholder : value}
        <div style={{ flexGrow: 1 }} />
        <img
          alt='arrow-down'
          src={arrow_down}
          style={{
            width: 15,
            height: 15,
            transform: isOpen ? 'rotate(180deg)' : 'none',
          }}
        />
      </button>
      {isOpen && (
        <div
          style={{
            color: 'white',
            position: 'absolute',
            width: '100%',
            zIndex: 99999,
            height: 400,
            overflow: 'auto',
          }}
        >
          {values.map((item, index) => {
            return (
              <div key={index}>
                <button
                  className='select-item'
                  onClick={() => {
                    handleChangeValue(item)
                    handleChangeIsOpen()
                  }}
                  key={item}
                  style={{
                    width: '100%',
                    borderTop: 'none',
                    borderLeft: 'none',
                    borderRight: 'none',
                    borderBottom: '1px solid gray',
                    borderBottomLeftRadius: index === values.length - 1 ? 5 : 0,
                    borderBottomRightRadius:
                      index === values.length - 1 ? 5 : 0,
                    padding: 10,
                    color: 'white',
                    fontFamily: 'Rajdhani',
                    display: 'flex',
                    fontWeight: 600,
                    fontSize: 16,
                    background: itemsBackground,
                    cursor: 'pointer',
                  }}
                >
                  {item}
                </button>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Select
