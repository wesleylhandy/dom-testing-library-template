const React = require(`react`)
const gatsby = jest.requireActual(`gatsby`)
module.exports = {
  ...gatsby,
  graphql: jest.fn(),
  Link: jest.fn(),
  StaticQuery: jest.fn(),
  useStaticQuery: jest.fn(),
}
