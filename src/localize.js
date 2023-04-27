export const getLocalValue = (string) => {
  const lang = localStorage.getItem('lang')
  return lang === 'sp' ? spanish[string] : english[string]
}

const spanish = {
  //CONFIG PANEL
  //CONFIG PANEL HEADER
  config_panel_title: 'DISEÑA TU PISTA DE BALONCESTO',
  'i want it!': 'lo quiero!',
  'view it!': 'miralo!',
  //SIZE SECTION
  size: 'talla',
  tiles: 'losas',
  'I want a custom size': 'Quiero un tamaño personalizado',
  width: 'Ancho',
  length: 'Largo',
  'with safety zone': 'con zona de seguridad',
  'Select Width': 'Seleccionar ancho',
  'Safety Zone By Width': 'Zona de seguridad con ancho',
  'Safety Zone By Length': 'Zona de seguridad con longitud',
  'Select Safety Zone': 'Seleccionar zona de seguridad ',
  'Select Length': 'Seleccionar Longitud',

  Domestic: 'DOMÉSTICA',
  'Top Sales': 'MAYORES VENTAS',
  'Half Court': 'MEDIA PISTA',
  //comments
  '3x3 court with safety zone': '3x3 pista con zona de seguridad ',
  '3x3 court without safety zone': '3x3 pista ',

  'Full Court': 'PISTA COMPLETA',
  //comments
  'Complete court without safety zone': 'Pista completa ',
  'Complete court with safety zone': 'Pista completa con zona de seguridad',

  // COLORS SECTION
  colors: 'colores',
  paint: 'botella',
  zone: 'zona',
  court: 'pista',
  safety: 'seguridad',

  'Red (7627C)': 'Rojo (7627C)',
  'Grass Green (7724C)': 'Verde hierba (7724C)',
  'Dark Green (7729C)': 'Verde oscuro (7729C)',
  'Sea Blue (7692C)': 'Azul marino (7692C)',
  'Yellow (2006C)': 'Amarillo (2006C)',
  'Orange (7412C)': 'Naranja (7412C)',
  'Dark Grey (2333C)': 'Gris Oscuro (2333C)',
  'Medium Grey (2332C)': 'Gris Medio (2332C)',
  'Black (Pantone Balck C)': 'Negro (Pantone Negro C)',
  'Light Blue (660C)': 'Azul Claro (660C)',
  'Pantone (3559C)': 'Pantone (3559C)',

  hoops: 'aros',
  'without hoop': 'sin aro',

  // 3D AREA
  'custom it!': 'personalizalo!',
  'full view': 'Vista completa',
  'for example': 'por ejemplo',

  // LETTER
  send: 'enviar',
  letter_message:
    'Tienes la pista de baloncesto de tus sueños al alcance de un click. Danos tu información para contactarte.',
  hoop: 'aro',
  name: 'Nombre',
  phone: 'Teléfono',
  email: 'Email',

  //GALLERY
  'set this court configs':'establecer esta configuración de corte'
}

const english = {
  config_panel_title: 'DESIGN YOUR BASKET COURT',
  'i want it!': 'i want it!',
  'view it!': 'view it!',

  size: 'size',
  tiles: 'tiles',
  'I want a custom size': 'I want a custom size',
  width: 'Width',
  length: 'Length',
  'with safety zone': 'with safety zone',
  'Select Width': 'Select Width',
  'Safety Zone By Length': 'Safety Zone By Length',
  'Safety Zone By Width': 'Safety Zone By Width',
  'Select Safety Zone': 'Select Safety Zone',
  'Select Length': 'Select Length',
  Domestic: 'Domestic',
  'Top Sales': 'Top Sales',

  'Half Court': 'Half Court',
  //comments
  '3x3 court with safety zone': '3x3 court with safety zone',
  '3x3 court without safety zone': '3x3 court',

  'Full Court': 'Full Court',
  //comments
  'Complete court without safety zone': 'Complete court',
  'Complete court with safety zone': 'Complete court with safety zone',

  colors: 'colors',
  paint: 'paint',
  zone: 'zone',
  court: 'court',
  safety: 'safety',

  'Red (7627C)': 'Red (7627C)',
  'Grass Green (7724C)': 'Grass Green (7724C)',
  'Dark Green (7729C)': 'Dark Green (7729C)',
  'Sea Blue (7692C)': 'Sea Blue (7692C)',
  'Yellow (2006C)': 'Yellow (2006C)',
  'Orange (7412C)': 'Orange (7412C)',
  'Dark Grey (2333C)': 'Dark Grey (2333C)',
  'Medium Grey (2332C)': 'Medium Grey (2332C)',
  'Black (Pantone Balck C)': 'Black (Pantone Balck C)',
  'Light Blue (660C)': 'Light Blue (660C)',
  'Pantone (3559C)': 'Pantone (3559C)',

  hoops: 'hoops',
  'without hoop': 'without hoop',

  // 3D AREA
  'custom it!': 'custom it!',
  'full view': 'Full view',
  'for example': 'for example',

  //LETTER
  letter_message:
    'You have the basketball court of your dreams at the click of a button. Give us your information to contact you.',
  send: 'send',
  hoop: 'hoop',
  name: 'Name',
  phone: 'Phone',
  email: 'Email',

  //GALLERY
  'set this court configs':'set this court configs'
}
