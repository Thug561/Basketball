import React, { useState, useEffect } from 'react'
import ConfigPanel from './components/config-panel/config-panel'
import RootRender from './components/root-render/root-render'
import Modal from './components/modal/modal'
import useMedia from 'use-media'
import Letter from './components/letter/letter'
import { useLocation } from 'react-router-dom'
import { Engine } from 'react-babylonjs'

function App() {
  const location = useLocation()
  const [rerender, setRerender] = useState(false)
  useEffect(() => {
    localStorage.setItem('lang', location.pathname === '/' ? 'sp' : 'en')
    setRerender(true)
  }, [location])

  useEffect(() => {
    if (rerender) {
      setRerender(false)
    }
  }, [rerender])

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [loading])


  const [hideConfig, setHideConfig] = useState(false)
  const handleChangeHideConfig = () => {
    setHideConfig(!hideConfig)
  }

  const [showLetterModal, setShowLetterModal] = useState(false)
  const handleCloseLetterModal = () => {
    setShowLetterModal(false)
  }
  const handleOpenLetterModal = () => {
    setShowLetterModal(true)
  }

  
  const isMobile = useMedia({ maxWidth: '799px' })
  const [config, setConfig] = useState({
    size: {
      width: 14,
      length: 11,
      borders: false,
      type: 'custom',
      safety_zone_width: 0,
      safety_zone_length: 0,
    },
    basket_type: 'Goalrilla CV72',
    colors: {
      court: '#005B8D',
      paint: '#B23730',
      safety: '#F2C031',
      zone: '#000000',
    },
    zoom_to_hoop: false,
  })
  const [section, setSection] = useState('')
  const handleChangeSection = (section_name) => {
    setSection(section_name)
    const cloneConfig = JSON.parse(JSON.stringify(config))
    if (section_name === 'hoops') {
      cloneConfig.zoom_to_hoop = true
      setConfig(cloneConfig)
    } else {
      if (config.zoom_to_hoop) {
        cloneConfig.zoom_to_hoop = false
        setConfig(cloneConfig)
        document.cheburek(document.lol);
      }
    }
  }

  const handleChangeConfig = (updateConfig) => {
    setConfig(updateConfig)
  }
  if (loading) return null
 
  if (isMobile) {
    return (
      <div>
        {hideConfig ? (
          <RootRender
            handleChangeHideConfig={handleChangeHideConfig}
            config={config}
            handleOpenLetterModal={handleOpenLetterModal}
            handleChangeConfig={handleChangeConfig}
          />
        ) : 
          <ConfigPanel
            config={config}
            handleChangeConfig={handleChangeConfig}
            handleChangeHideConfig={handleChangeHideConfig}
            handleOpenLetterModal={handleOpenLetterModal}
            activeSection={section}
            handleChangeActiveSection={handleChangeSection}
          />
          }
        <Modal active={showLetterModal} handleClose={handleCloseLetterModal}>
          <Letter config={config} handleClose={handleCloseLetterModal} />
        </Modal>
      </div>
    )
  }

  return (
    <div style={{ display: 'flex' }}>
      <RootRender
        config={config}
        handleChangeConfig={handleChangeConfig}
        section={section}
      />
      {rerender ? null :
      <ConfigPanel
        config={config}
        handleChangeConfig={handleChangeConfig}
        handleOpenLetterModal={handleOpenLetterModal}
        activeSection={section}
        handleChangeActiveSection={handleChangeSection}
      />}
      <Modal active={showLetterModal} handleClose={handleCloseLetterModal}>
        <Letter config={config} handleClose={handleCloseLetterModal} />
      </Modal>
    </div>
  )
}

export default App
