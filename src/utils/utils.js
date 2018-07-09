import moment from 'moment'

function dateToString (date) {
  if (date) {
    return moment(date).format('MMM do YYY, h:mm:ss a')
  }
  return ''
}

function reverse (array) {
  return array.slice().reverse()
}

export { dateToString, reverse }
