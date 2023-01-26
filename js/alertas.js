function noPuedeEstarVacio() {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'El campo no puede estar vacío!'
  })
}

function soloMin() {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Ingrese solo minúsculas, sin acentos ni carácteres especiales!'
  })

}

function encripConExito() {
  Swal.fire(
    'Excelente!',
    'El texto se ha desencriptado con éxito!',
    'success'
  )
}

function decripConExito() {
  Swal.fire(
    'Perfecto!',
    'El texto se desencripto correctamente!',
    'success'
  )
}

function  copiado() {
  Swal.fire('Texto Copiado')
}
