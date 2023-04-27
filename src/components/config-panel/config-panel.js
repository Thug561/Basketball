// import React, { useState } from 'react'
import styles from './config-panel.module.scss'
import ConfigHeader from './header/header'
import Size from './size/size'
import Colors from './colors/colors'
import Baskets from './baskets/baskets'
import Typography from '../typography'
import { useMedia } from 'use-media'
import { getLocalValue } from '../../localize'
import Gallery from '../gallery/gallery'

const ConfigPanel = ({
  config,
  handleChangeConfig,
  handleChangeHideConfig,
  handleOpenLetterModal,
  activeSection,
  handleChangeActiveSection,
}) => {
  const isMobile = useMedia({ maxWidth: '799px' })
  // const [activeSection, setActiveSection] = useState('')
  // const handleChangeActiveSection = (section_name) => {
  //   setActiveSection(section_name)
  //   const cloneConfig = JSON.parse(JSON.stringify(config))
  //   cloneConfig.section = section_name
  //   handleChangeConfig(cloneConfig)
  // }
  return (
    <div className={styles.root}>
      <ConfigHeader />
      <Size
        active={activeSection === 'size'}
        handleChangeActiveSection={handleChangeActiveSection}
        config={config}
        handleChangeConfig={handleChangeConfig}
      />
      <Colors
        active={activeSection === 'colors'}
        handleChangeActiveSection={handleChangeActiveSection}
        config={config}
        handleChangeConfig={handleChangeConfig}
      />
      <Baskets
        active={activeSection === 'hoops'}
        handleChangeActiveSection={handleChangeActiveSection}
        config={config}
        handleChangeConfig={handleChangeConfig}
      />

      <div className={styles.divider} />
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-end',
          marginTop: 10,
        }}
      >
        <Gallery handleChangeConfig={handleChangeConfig} />
      </div>

      <div className={styles.actions_container}>
        {isMobile && (
          <button
            onClick={handleChangeHideConfig}
            className={styles.actions_button_secondary}
          >
            <Typography
              value={getLocalValue('view it!').toUpperCase()}
              style={{ color: 'white', fontWeight: 700, fontSize: 22 }}
            />
          </button>
        )}

        <button
          onClick={handleOpenLetterModal}
          className={styles.actions_button}
        >
          <Typography
            value={getLocalValue('i want it!').toUpperCase()}
            style={{ color: '#F67C04', fontWeight: 700, fontSize: 22 }}
          />
        </button>
      </div>
    </div>
  )
}

export default ConfigPanel
