import React from 'react'
import DropDown from '../../dropdown/dropdown'
import Typography from '../../typography'

import Court from '../../../assets/images/court.png'
import Select from '../../select/select'
import { getLocalValue } from '../../../localize'
//import CheckBox from '../../../assets/images/checkbox.png'
//import CheckBox_active from '../../../assets/images/checkbox-active.png'
const Size = ({
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
        id='size'
        dropedContent={
          <SizeDropedContent
            config={config}
            handleChangeConfig={handleChangeConfig}
          />
        }
        buttonEndContent={<SizeButtonEndContent config={config} />}
      />
    </div>
  )
}

const SizeButtonEndContent = ({ config }) => {
  const { width, length } = config.size
  return (
    <div>
      <Typography
        block
        value={`${width}x${length}m`}
        style={{ fontSize: 15, fontWeight: 500 }}
      />
      <Typography style={{ fontSize: 12, fontWeight: 500 }}>
        {width * length}m<sup>2</sup> {width * length * 16}{' '}
        {getLocalValue('tiles')}
      </Typography>
    </div>
  )
}

const SizeDropedContent = ({ config, handleChangeConfig }) => {
  const activeSizeSection = config.size.type
  const activeSizeVariantId = config.size.id
  const domestic_variants = [
    {
      length: 10,
      width: 6,
      type: 'domestic',
      price: '100',
      id: '9084',
      description: 'Domestic court without safety zone',
    },
    {
      length: 6,
      width: 5,
      type: 'domestic',
      price: '50',
      id: '5435',
      description: 'Domestic court without safety zone',
    },
  ]

  const initial_custom_size = {
    length: 11,
    width: 14,
    type: 'custom',
    id: '',
    borders: false,
    safety_zone_width: 0,
    safety_zone_length: 0,
  }
  const handleSetCustomSizeSection = () => {
    const cloneConfig = JSON.parse(JSON.stringify(config))
    cloneConfig.size = initial_custom_size
    handleChangeConfig(cloneConfig)
  }

  const handleSetWidth = (value) => {
    const cloneConfig = JSON.parse(JSON.stringify(config))
    if (typeof value === 'string') {
      cloneConfig.size.safety_zone_width = 0
      cloneConfig.size.width = 15
    } else {
      cloneConfig.size.width = value
      cloneConfig.size.safety_zone_width = 0
    }
    handleChangeConfig(cloneConfig)
  }

  const handleChangeSafetyZoneWidth = (value) => {
    const cloneConfig = JSON.parse(JSON.stringify(config))
    cloneConfig.size.safety_zone_width = value * 2
    handleChangeConfig(cloneConfig)
  }

  const handleSetLength = (value) => {
    const cloneConfig = JSON.parse(JSON.stringify(config))
    if (typeof value === 'string') {
      cloneConfig.size.safety_zone_length = 0
      cloneConfig.size.length = 11
    } else {
      cloneConfig.size.length = value
      cloneConfig.size.safety_zone_length = 0
    }
    handleChangeConfig(cloneConfig)
  }

  const handleChangeSafetyZoneLength = (value) => {
    const cloneConfig = JSON.parse(JSON.stringify(config))
    cloneConfig.size.safety_zone_length = value *2
    handleChangeConfig(cloneConfig)
  }

  const half_court_variants = [
    {
      length: 11,
      width: 15,
      type: 'half',
      price: '180',
      id: '9893',
      description: '3x3 court without safety zone',
    },
    {
      length: 14,
      width: 18,
      type: 'half',
      price: '200',
      id: '6546',
      description: '3x3 court with safety zone',
    },
  ]
  const full_court_variants = [
    {
      length: 28,
      width: 15,
      type: 'full',
      price: '300',
      id: '5346',
      description: 'Complete court without safety zone',
    },
    {
      length: 30,
      width: 18,
      type: 'full',
      price: '400',
      id: '7542',
      description: 'Complete court with safety zone',
    },
  ]

  // const handleChangeAddBorders = () => {
  //   const cloneConfig = JSON.parse(JSON.stringify(config))
  //   cloneConfig.size.borders = !cloneConfig.size.borders
  //   handleChangeConfig(cloneConfig)
  // }
  const hanleChangeActiveSize = (data) => {
    const cloneConfig = JSON.parse(JSON.stringify(config))
    cloneConfig.size = data
    handleChangeConfig(cloneConfig)
  }
  return (
    <div style={{ paddingBottom: 30 }}>
      {/* CUSTOM SIZE */}
      {/* CUSTOM SIZE RADIO BUTTON */}
      <div style={{ margin: '10px 10px 30px 20px' }}>
        <button
          onClick={handleSetCustomSizeSection}
          style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: 5,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              border:
                activeSizeSection === 'custom'
                  ? '2px solid #F67C04'
                  : '2px solid gray',
              borderRadius: '100%',
              width: 20,
              height: 20,
              marginRight: 10,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: '100%',
                backgroundColor:
                  activeSizeSection === 'custom' ? '#F67C04' : 'transparent',
              }}
            />
          </div>
          <Typography
            value={getLocalValue('I want a custom size')}
            style={{ fontWeight: 500, fontSize: 18 }}
          />
        </button>
      </div>
      {/* SUSTOM SIZE SELECTS */}
      {activeSizeSection === 'custom' && (
        <div style={{ margin: '0px 30px 15px 30px' }}>
          <Typography
            value={`${getLocalValue('width')}(m)`}
            style={{ color: '#7D7D7D', fontWeight: 600, fontSize: 16 }}
          />
          <Select
            value={config.size.width}
            values={[
              5.5,
              6,
              6.5,
              7,
              7.5,
              8,
              8.5,
              9,
              9.5,
              10,
              10.5,
              11,
              11.5,
              12,
              12.5,
              13,
              13.5,
              14,
              14.5,
              '15'
            ]}
            placeholder={getLocalValue('Select Width')}
            itemsBackground='#222'
            handleChangeValue={(value) => handleSetWidth(value)}
          />

          {config.size.width > 14.5 && (
            <div style={{ marginTop: 10 }}>
              <Typography
                value={getLocalValue('Safety Zone By Width')}
                style={{ color: '#7D7D7D', fontWeight: 600, fontSize: 16 }}
              />
              <Select
                value={config.size.safety_zone_width /2}
                values={[0,0.5, 1, 1.5,]}
                placeholder={getLocalValue('Select Safety Zone')}
                itemsBackground='#222'
                handleChangeValue={(value) =>
                  handleChangeSafetyZoneWidth(value)
                }
              />
            </div>
          )}

          <Typography
            block
            value={`${getLocalValue('length')}(m)`}
            style={{
              color: '#7D7D7D',
              fontWeight: 600,
              fontSize: 16,
              marginTop: 10,
            }}
          />
          <Select
            value={config.size.length}
            values={[
              7.5,
              8,
              8.5,
              9,
              9.5,
              10,
              10.5,
              "11",
            ]}
            placeholder={getLocalValue('Select Length')}
            itemsBackground='#222'
            handleChangeValue={(value) => handleSetLength(value)}
          />

          {config.size.length > 10.5 && (
            <div style={{ marginTop: 10 }}>
              <Typography
                value={getLocalValue('Safety Zone By Length')}
                style={{ color: '#7D7D7D', fontWeight: 600, fontSize: 16 }}
              />
              <Select
                value={config.size.safety_zone_length /2}
                values={[0, 0.5, 1, 1.5, ]}
                placeholder={getLocalValue('Select Safety Zone')}
                itemsBackground='#222'
                handleChangeValue={(value) =>
                  handleChangeSafetyZoneLength(value)
                }
              />
            </div>
          )}
        </div>
      )}
      {/*   ADD BORDERS CHECKBOX*/}
      {/* <div style={{ margin: '0px 20px', marginBottom: 20 }}>
        <button
          onClick={handleChangeAddBorders}
          style={{
            cursor: 'pointer',
            border: 'none',
            background: 'transparent',
            padding: 10,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <img
            alt='checkbox'
            src={config.size.borders ? CheckBox_active : CheckBox}
            style={{ width: 18, height: 18, marginRight: 8 }}
          />
          <Typography
            style={{ fontWeight: 600, fontSize: 18, color: '#F67C04' }}
          >
            Add security border
          </Typography>
        </button>
      </div> 
      )*/}
      {/* DOMESTIC */}
      <div style={{ margin: '20px 30px' }}>
        <Typography
          block
          style={{
            fontSize: 24,
            background: '#F67C04',
            paddingLeft: 10,
            fontWeight: 600,
          }}
        >
          {getLocalValue('Top Sales').toUpperCase()}
        </Typography>

        {domestic_variants.map((item, index) => {
          return (
            <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
              <button
                onClick={() => hanleChangeActiveSize(item)}
                style={{
                  cursor: 'pointer',
                  background: 'transparent',
                  border:
                    item.id === activeSizeVariantId
                      ? '2px solid #F67C04'
                      : 'none',
                  borderRadius: 2,
                  marginRight: 5,
                  marginTop: 10,
                  paddingTop: 2,
                  width: 76,
                  height: 76,
                }}
              >
                <img
                  alt='variant'
                  style={{
                    width: 58,
                    height: 58,
                    border: '2px solid #7D7D7D',
                  }}
                  src={Court}
                />
              </button>
              <div
                style={{
                  display: 'flex',
                  marginLeft: 10,
                  flexDirection: 'column',
                }}
              >
                <div style={{ display: 'flex' }}>
                  <div style={{ minWidth: 50 }}>
                    <Typography
                      style={{ fontSize: 18, fontWeight: 600 }}
                      block
                      value={`${item.width}x${item.length}m`}
                    />
                  </div>
                  <Typography
                    block
                    value={`${item.length * item.width * 16} ${getLocalValue(
                      'tiles'
                    )}`}
                    style={{
                      fontSize: 18,
                      fontWeight: 600,
                      color: '#7D7D7D',
                      marginLeft: 29,
                    }}
                  />
                </div>
                <div>
                  <Typography
                    block
                    value={getLocalValue(item.description)}
                    style={{
                      fontSize: 14,
                      width: 200,
                      fontWeight: 400,
                      color: '#7D7D7D',
                      margin: '2px 0px',
                    }}
                  />
                  {/* <Typography
                  block
                  value={`${item.price}$`}
                  style={{ fontSize: 18, fontWeight: 600 }}
                /> */}
                </div>
              </div>
            </div>
          )
        })}
      </div>
      {/* HALF COURT  */}
      <div style={{ margin: '0px 30px', marginTop: 20 }}>
        <Typography
          block
          style={{
            fontSize: 24,
            paddingLeft: 10,
            background: '#F67C04',
            fontWeight: 600,
          }}
        >
          {getLocalValue('Half Court').toUpperCase()}
        </Typography>
        {half_court_variants.map((item, index) => {
          return (
            <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
              <button
                onClick={() => hanleChangeActiveSize(item)}
                style={{
                  cursor: 'pointer',
                  background: 'transparent',
                  border:
                    item.id === activeSizeVariantId
                      ? '2px solid #F67C04'
                      : 'none',
                  borderRadius: 2,
                  marginRight: 5,
                  marginTop: 10,
                  paddingTop: 2,
                  width: 76,
                  height: 76,
                }}
              >
                <img
                  alt='variant'
                  style={{
                    width: 58,
                    height: 58,
                    border: '2px solid #7D7D7D',
                  }}
                  src={Court}
                />
              </button>
              <div
                style={{
                  display: 'flex',
                  marginLeft: 10,
                  flexDirection: 'column',
                }}
              >
                <div style={{ display: 'flex' }}>
                  <div style={{ minWidth: 50 }}>
                    <Typography
                      style={{ fontSize: 18, fontWeight: 600 }}
                      block
                      value={`${item.width }x${item.length}m`}
                    />
                  </div>
                  <Typography
                    block
                    value={`${item.length * item.width * 16} ${getLocalValue(
                      'tiles'
                    )}`}
                    style={{
                      fontSize: 18,
                      fontWeight: 600,
                      color: '#7D7D7D',
                      marginLeft: 29,
                    }}
                  />
                </div>
                <div>
                  <Typography
                    block
                    value={getLocalValue(item.description)}
                    style={{
                      fontSize: 14,
                      width: 200,
                      fontWeight: 400,
                      color: '#7D7D7D',
                      margin: '2px 0px',
                    }}
                  />
                  {/* <Typography
                    block
                    value={`${item.price}$`}
                    style={{ fontSize: 18, fontWeight: 600 }}
                  /> */}
                </div>
              </div>
            </div>
          )
        })}
      </div>
      {/* FULL COURT */}
      <div style={{ margin: '0px 30px', marginTop: 20 }}>
        <Typography
          block
          style={{
            fontSize: 24,
            background: '#F67C04',
            paddingLeft: 10,
            fontWeight: 600,
          }}
        >
          {getLocalValue('Full Court').toUpperCase()}
        </Typography>
        {full_court_variants.map((item, index) => {
          return (
            <div
              key={index}
              style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}
            >
              <button
                onClick={() => hanleChangeActiveSize(item)}
                style={{
                  cursor: 'pointer',
                  background: 'transparent',
                  border:
                    item.id === activeSizeVariantId
                      ? '2px solid #F67C04'
                      : 'none',
                  borderRadius: 2,
                  marginRight: 5,
                  marginTop: 10,
                  paddingTop: 2,
                  width: 76,
                  height: 76,
                }}
              >
                <img
                  alt='variant'
                  style={{
                    width: 58,
                    height: 58,
                    border: '2px solid #7D7D7D',
                  }}
                  src={Court}
                />
              </button>
              <div
                style={{
                  display: 'flex',
                  marginLeft: 10,
                  flexDirection: 'column',
                }}
              >
                <div style={{ display: 'flex' }}>
                  <div style={{ minWidth: 50 }}>
                    <Typography
                      style={{ fontSize: 18, fontWeight: 600 }}
                      block
                      value={`${item.width}x${item.length}m`}
                    />
                  </div>
                  <Typography
                    block
                    value={`${item.length * item.width * 16} ${getLocalValue(
                      'tiles'
                    )}`}
                    style={{
                      fontSize: 18,
                      fontWeight: 600,
                      color: '#7D7D7D',
                      marginLeft: 29,
                    }}
                  />
                </div>
                <div>
                  <Typography
                    block
                    value={getLocalValue(item.description)}
                    style={{
                      width: 200,
                      fontSize: 14,
                      fontWeight: 400,
                      color: '#7D7D7D',
                      margin: '2px 0px',
                      maxWidth: '60vw',
                    }}
                  />
                  {/* <Typography
                    block
                    value={`${item.price}$`}
                    style={{ fontSize: 18, fontWeight: 600 }}
                  /> */}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Size
