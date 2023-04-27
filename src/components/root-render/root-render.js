import React, { useEffect, useRef, useState } from 'react'
import styles from './root-render.module.scss'
import { useMedia } from 'use-media'
import Typography from '../typography'
import full_court_icon from '../../assets/images/full-court-light.png'
import logo from '../../assets/images/logo.png'
import gallery_button_icon from '../../assets/images/examp.png'
import GalleryComponent from '../../components/gallery/gallery'
import zoomButtonHoop from '../../components/root-render/scenes/ArcCamera'
import mySceneTest from '../../components/root-render/scenes/scene/MySceneTest'

// import Scene from './b'
// import Model from './model'
import { getLocalValue } from '../../localize'
import Examples from '../examples/examples'
import { Game } from './game'
//import Hope from './hope'

const RootRender = ({
  config,
  handleChangeConfig,
  handleChangeHideConfig,
  handleOpenLetterModal,
  section,
}) => {
  useEffect(() => {
    console.log(config)
  }, [config])

  useEffect(() => {
    console.log(section)
  }, [section])



  const isMobile = useMedia({ maxWidth: '799px' })

  const handleZoomToStandart = () => {
    const cloneConfig = JSON.parse(JSON.stringify(config))
    cloneConfig.zoom_to_hoop = false
    handleChangeConfig(cloneConfig)
  }

  const [showExamples, setShowExamples] = useState(false)
  const handleOpenExamples = () => setShowExamples(true)
  const hanldeCloseExamples = () => setShowExamples(false)


    const cameraRef = useRef(null);
  
    const handleMoveLeft = () => {
      cameraRef.current -= 0.1;
    };

  return (
    <>
      <div className={styles.root}>
        {/* RENDER MUST BE HERE */}
        {/* -------------------- */}
        {/* <Scene config={config} /> */}
        {/* <Render3D /> */}
        <Game config={config} />
        {/* <Model /> */}
        {/* <Hope /> */}
        {/* -------------------- */}

        {/* GALLERY */}
        <div
          style={{
            position: 'absolute',
            top: isMobile ? '17px' : 'calc(100% - 100px)',
          }}
        >
          {/* <GalleryComponent handleChangeConfig={handleChangeConfig} /> */}
          {/* <button
            onClick={handleOpenExamples}
            type='button'
            style={{
              background: '#F67C04',
              cursor: 'pointer',
              border: 'none',
              width: 124,
              height: 56,
              padding: 13,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <div>
              <img
                style={{ width: 29, height: 29 }}
                src={gallery_button_icon}
                alt='gallery'
              />
            </div>
            <Typography
              block
              style={{
                fontWeight: 600,
                fontSize: 14,
                color: '#222222',
                textAlign: 'left',
                marginLeft: 8,
              }}
            >
              {getLocalValue('for example').toUpperCase()}
            </Typography>
          </button> */}
        </div>

        {/* {showExamples && <Examples handleClose={hanldeCloseExamples} />} */}

        {/* LOGO LINK? */}
        {!isMobile && (
          <button
            style={{
              top: '17px',
              position: 'absolute',
              border: 'none',
              background: 'transparent',
              right: 20,
              cursor: 'pointer',
            }}
          >
            <a target='_blank' href='https://www.tripl3shot.com/'>
              <img style={{ width: 100, height: 50 }} src={logo} alt='logo' />
            </a>
          </button>
        )}

        {/* BACK TO STANDART ZOOM BUTTON */}
        {config.zoom_to_hoop && (
          <button
            onClick={handleMoveLeft}
            style={{
              top: isMobile ? '17px' : 'calc(100% - 100px)',
              // bottom: isMobile ? '50px' : 'auto',
              position: 'absolute',
              border: 'none',
              background: 'transparent',
              right: 20,
              cursor: 'pointer',
            }}
          >
            <div>
              <img onClick={ (e) => document.lol(0, -30, 0) }
                style={{ width: 68, height: 41 }}
                src={full_court_icon}
                alt='standart zoom'
              />
            </div>
            <Typography
              style={{ fontWeight: 600, color: '#111', fontSize: 18 }}
            >
              {getLocalValue('full view')}
            </Typography>
          </button>
        )}

        {/* MOBILE ACTIONS BUTTON */}
        {isMobile && (
          <div className={styles.mobile_actions}>
            <button
              onClick={handleChangeHideConfig}
              className={styles.actions_button_secondary}
            >
              <Typography
                block
                value={getLocalValue('custom it!').toUpperCase()}
                style={{ color: 'white', fontWeight: 700, fontSize: 22 }}
              />
            </button>
            <button
              onClick={handleOpenLetterModal}
              className={styles.actions_button}
            >
              <Typography
                block
                value={getLocalValue('i want it!').toUpperCase()}
                style={{ color: '#F67C04', fontWeight: 700, fontSize: 22 }}
              />
            </button>
          </div>
        )}
      </div>
    </>
  )
};


export default RootRender
