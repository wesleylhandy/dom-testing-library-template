const React = require(`react`)
const reactCookie = jest.requireActual(`react-cookie`)
module.exports = {
  ...reactCookie,
  useCookies: jest.fn(),
}
