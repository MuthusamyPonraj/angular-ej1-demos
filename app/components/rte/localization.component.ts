import {Component} from '@angular/core';

declare var ej: any;
@Component({
  selector: 'ej-app',
  templateUrl: './localization.component.html'
})
export class LocalizationComponent {
  content: string;
  responsive: boolean;
  toolslist: any;
  constructor() {
    this.responsive = true;
    this.content = 'Description: The Rich Text Editor (RTE) control is an easy to render in client side. Customer easy to edit the contents and get the HTML content from RTE';
    this.toolslist = ['formatStyle', 'font', 'style', 'effects', 'alignment', 'lists', 'indenting', 'clipboard', 'doAction', 'clear', 'casing', 'customTools', 'print'];
  }
}
ej.RTE.Locale['es-ES'] = {
  bold: 'audaz',
  italic: 'itálico',
  underline: 'subrayar',
  strikethrough: 'Tachado',
  superscript: 'sobrescrito',
  subscript: 'subíndice',
  justifyCenter: 'Centrar texto',
  justifyLeft: 'Alinear texto a la izquierda',
  justifyRight: 'Alinear texto a la derecha',
  justifyFull: 'justificar',
  fileBrowser: 'archivo Browser',
  unorderedList: 'Inserte lista desordenada',
  orderedList: 'Insertar lista ordenada',
  indent: 'muesca',
  solid: 'solida',
  dashed: 'frauditaj',
  dotted: 'punktita',
  doubled: 'duobla',
  closeIcon: 'Fermi',
  buttonApply: 'apliki',
  buttonCancel: 'nuligi',
  outdent: 'reducir sangría',
  cut: 'Cortar',
  copy: 'Copia',
  paste: 'Pegar',
  undo: 'deshacer',
  redo: 'rehacer',
  upperCase: 'Mayúscula',
  lowerCase: 'Minúscula',
  clearAll: 'Borrar todo',
  clearFormat: 'Claro Formato',
  createLink: 'Insertar / Editar hipervínculo',
  removeLink: 'quitar hipervínculo',
  tableProperties: 'Propiedades de la tabla',
  insertTable: 'Insertar',
  deleteTables: 'Borrar',
  imageProperties: 'Propiedades de la imagen',
  openLink: 'Abrir hipervínculo',
  image: 'insertar una imagen',
  video: 'insertar vídeo',
  embedVideo: 'Pegue su código de inserción por debajo de',
  viewHtml: 'Ver HTML',
  fontName: 'Seleccione familia de fuentes',
  fontSize: 'Seleccione el tamaño del texto',
  fontColor: 'Seleccionar el color',
  format: 'formato',
  backgroundColor: 'Color de fondo',
  style: 'estilos',
  deleteAlert: '¿Está seguro que desea borrar todo el contenido?',
  copyAlert: 'Su navegador no es compatible con el acceso directo al portapapeles. Utilice el teclado Ctrl + C atajo en lugar de operación de copia .',
  pasteAlert: 'Su navegador no es compatible con el acceso directo al portapapeles. Por favor, use la combinación de teclas Ctrl + V en lugar de operación de pegado ',
  cutAlert: 'Su navegador no es compatible con el acceso directo al portapapeles. Utilice el Ctrl + X combinación de teclas en lugar de la operación de corte .',
  copyPastAlert: 'Your browser doesnt support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead.',
  videoError: 'El área de texto no puede estar vacío',
  imageWebUrl: 'Dirección web',
  imageAltText: 'Descripción',
  dimensions: 'dimensiones',
  constrainProportions: 'Restringir proporciones',
  linkWebUrl: 'Dirección web',
  linkText: 'texto',
  linkTooltipLabel: 'ToolTip',
  html5Support: 'Este icono de la herramienta sólo disponible en HTML5 apoyó navegadores',
  linkOpenInNewWindow: 'Abrir enlace en una nueva ventana',
  tableColumns: 'No. de Columnas',
  tableRows: 'Numero de Filas',
  tableWidth: 'ancho de la mesa',
  tableHeight: 'altura de la mesa',
  tableCellSpacing: 'El espaciado',
  tableCellPadding: 'Relleno',
  tableBorder: 'frontera',
  tableCaption: 'subtítulo',
  dialogUpdate: 'actualización',
  dialogInsert: 'insertar',
  dialogCancel: 'cancelar',
  dialogOk: 'bueno',
  createTable: 'Crear una tabla',
  addColumnLeft: 'Añadir la columna de la izquierda',
  addColumnRight: 'Añadir columna a la derecha',
  addRowAbove: 'Añadir fila encima',
  addRowBelow: 'Añadir fila abajo',
  deleteRow: 'Elimine la fila',
  deleteColumn: 'Eliminar la columna',
  deleteTable: 'Eliminar la tabla',
  customTable: 'Crear una tabla personalizada',
  characters: 'Personajes',
  dialogApply: 'aplicar',
  textAlign: 'Texto Alinear',
  imageLink: 'Imagen como Enlace',
  imageBorder: 'Imagen de fronteras',
  imageStyle: 'Estilo',
  editTable: 'Editar las propiedades de la tabla',
  words: 'palabras',
  general: 'corriente',
  advanced: 'avanzada',
  table: 'tabla',
  row: 'fila',
  column: 'columna',
  cell: 'célula',
  maximize: 'Maximizar',
  resize: 'Minimizar',
  swatches: 'Muestras',
  paragraph: 'acápite',
  quotation: 'cita',
  heading1: 'título 1',
  heading2: 'título 2',
  heading3: 'título 3',
  heading4: 'título 4',
  heading5: 'título 5',
  heading6: 'título 6',
  disc: 'Disco',
  circle: 'Círculo',
  square: 'Cuadrado',
  number: 'Número',
  loweralpha: 'Baja Alfa',
  upperalpha: 'Alta Alfa',
  lowerroman: 'Baja romano',
  upperroman: 'Alta romano',
  none: 'Ninguna',
  linkTooltip: 'ctrl + clic para seguir el enlace',
  charSpace: 'Caracteres (con espacios)',
  charNoSpace: 'Caracteres (sin espacios)',
  wordCount: 'El recuento de palabras',
  right: 'derecho',
  left: 'izquierda',
  center: 'centrar',
  FindAndReplace: 'Buscar y reemplazar',
  Find: 'Encontrar',
  MatchCase: 'Coincidencia',
  WholeWord: 'Palabra completa',
  ReplaceWith: 'Remplazar con',
  Replace: 'Reemplazar',
  ReplaceAll: 'Reemplaza todo',
  FindErrorMsg: 'No se pudo encontrar la palabra especificada .',
  customFontColor: 'Mas colores...',
  customBGColor: 'Mas colores...',
  TransBGColor: 'transparente',
  w: 'W',
  c: 'C'
};
