const babel = require('@babel/core')
const plugin = require('./console') // Đường dẫn đến plugin của bạn

/** @type {import('@babel/core').TransformOptions} */
const opts = {
  plugins: [plugin],
  presets: ['@babel/preset-env'],
}

describe('tại global scope', () => {
  it('đơn giản', () => {
    const code = `inspect('hello babel');`
    const output = babel.transformSync(code, opts)
    expect(output.code).toMatchSnapshot()
  })
})
