import Vue from 'vue'
import dayjs from 'dayjs'

Vue.filter('formatDate', function (date, format) {
  format = format || 'YYYY-MM-DD HH:mm:ss'
  if (!date) {
    return ''
  }
  return dayjs(date).format(format)
})
