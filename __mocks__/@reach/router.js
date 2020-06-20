const React = require(`react`)
const ReachRouter = jest.requireActual(`@reach/router`)
module.exports = {
  ...ReachRouter,
  Location: jest.fn(),
}
