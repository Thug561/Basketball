import React from 'react'
import DropDown from '../../dropdown/dropdown'
import Typography from '../../typography'

import { useMedia } from 'use-media'
import { getLocalValue } from '../../../localize'

const Colors = ({
  active,
  handleChangeActiveSection,
  config,
  handleChangeConfig,
}) => {
  return (
    <div>
      <DropDown
        isDrop={active}
        handleDrop={handleChangeActiveSection}
        id='colors'
        buttonEndContent={<ColorsButtonEndContent config={config} />}
        dropedContent={
          <ColorsDropedContent
            config={config}
            handleChangeConfig={handleChangeConfig}
          />
        }
      />
    </div>
  )
}

const ColorsButtonEndContent = ({ config }) => {
  const isMobile = useMedia({ maxWidth: '370px' })
  const colors_sections = ['paint', 'zone', 'court', 'safety']
  return (
    <div style={{ display: 'flex' }}>
      {colors_sections.map((item) => {
        return (
          <div
            key={item}
            style={{
              marginLeft: 10,
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <Typography
              block
              value={getLocalValue(item).toUpperCase()}
              style={{
                fontWeight: 500,
                fontSize: 12,
                paddingBottom: 3,
                //borderBottom: `6px solid ${config.colors[item]}`,
              }}
            />
            <div
              style={{
                border:
                  config.colors[item] === '#000000' ? '1px solid gray' : null,
              }}
            >
              <div
                style={{
                  borderTop:
                    config.colors[item] === '#000000'
                      ? `5px solid ${config.colors[item]} `
                      : `6px solid ${config.colors[item]}`,
                  width: isMobile ? 25 : 32,
                }}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}
const colors = [
  '#B23730',
  '#279B6F',
  '#00583F',
  '#005B8D',
  '#F2C031',
  '#CF7E24',
  '#686E68',
  '#8F8A83',
  '#000000',
  '#3975B7',
  '#8E51A8',
]

const colorNames = {
  '#B23730': 'Red (7627C)',
  '#279B6F': 'Grass Green (7724C)',
  '#00583F': 'Dark Green (7729C)',
  '#005B8D': 'Sea Blue (7692C)',
  '#F2C031': 'Yellow (2006C)',
  '#CF7E24': 'Orange (7412C)',
  '#686E68': 'Dark Grey (2333C)',
  '#8F8A83': 'Medium Grey (2332C)',
  '#000000': 'Black (Pantone Balck C)',
  '#3975B7': 'Light Blue (660C)',
  '#8E51A8': 'Pantone (3559C)',
}

const ColorsDropedContent = ({ config, handleChangeConfig }) => {
  const colors_sections = ['paint', 'zone', 'court', 'safety']
  const activeColors = config.colors

  const handleChangeColor = (color, section) => {
    const cloneConfig = JSON.parse(JSON.stringify(config))
    cloneConfig.colors[section] = color
    handleChangeConfig(cloneConfig)
  }
  return (
    <div>
      {colors_sections.map((item, index) => {
        return (
          <div
            style={{ margin: index === 0 ? '10px 30px' : '30px 30px' }}
            key={item}
          >
            <Typography
              value={getLocalValue(item).toUpperCase()}
              style={{ color: '#F67C04', fontSize: 20, fontWeight: 600 }}
            />
            <Typography
              style={{ fontWeight: 600, fontSize: 14, color: '#7D7D7D' }}
              block
            >
              {getLocalValue(colorNames[config.colors[item]])}
            </Typography>
            <div style={{ marginLeft: 0 }}>
              <ColorPicker
                section={item}
                selectedColor={activeColors[item]}
                handleChangeColor={handleChangeColor}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}

const ColorPicker = ({ selectedColor, handleChangeColor, section }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 10,
      }}
    >
      {colors.map((item, index) => {
        return (
          <button
            key={item}
            onClick={() => handleChangeColor(item, section)}
            style={{
              padding: 3,
              background: 'transparent',
              border:
                item === selectedColor
                  ? '2px solid #F67C04'
                  : '2px solid transparent',
              cursor: 'pointer',
              borderRadius: '100%',
              marginLeft: 10,
              width: 40,
              height: 40,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10,
            }}
          >
            <div
              style={{
                width: '100%',

                height: '100%',
                padding: item !== selectedColor ? 3 : 0,
                border: item !== selectedColor ? '2px solid #313131' : null,
                borderRadius: 100,
              }}
            >
              <div
                style={{
                  background: item,
                  width: '100%',
                  height: '100%',
                  borderRadius: 100,
                }}
              />
            </div>

            {/* <div
              style={{
                padding: '10%',
                width: '100%',
                height: '100%',
                border: item !== selectedColor ? '2px solid #313131' : 'none',
                borderRadius: '100%',
                background: item === selectedColor ? item : 'transparent',
              }}
            >
              <div
                style={{
                  width: item === selectedColor ? '100%' : 20,
                  height: item === selectedColor ? '100%' : 20,
                  borderRadius: '100%',
                  backgroundColor: item,
                }}
              />
            </div> */}
          </button>
        )
      })}
    </div>
  )
}

export default Colors
