import formatFn from 'date-fns/format'

const formats = {
  LT: 'p',
  LTS: 'pp',
  L: 'd MMM yyyy',
  LL: 'd MMMM yyyy',
  LLL: 'd MMMM yyyy p',
  LLLL: 'iiii d MMMM yyyy p',
  ISO: `yyyy-MM-dd'T'HH:mm:ss.SSSxxx`
}

const dateFormatter = (date, format = 'LLL') => {
  if (!date) return ''
  return formatFn(date, `${formats[format]}`)
}

export default dateFormatter
