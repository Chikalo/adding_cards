//utils.js
import moment from 'moment'

function dateToString (date) {
  if (date) {
    return moment(date).format('MMM do YYY, h:mm:ss a')
  }
  return ''
}

export { dateToString }
