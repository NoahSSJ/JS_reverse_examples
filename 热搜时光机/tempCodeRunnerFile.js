const base64Str = l(t)
const buffer = Buffer.from(base64Str, 'base64')
const decodedStr = buffer.toString('utf-8')
console.log(decodedStr)