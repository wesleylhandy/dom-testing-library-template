require(`@testing-library/jest-dom/extend-expect`)
const chalk = require(`chalk`)

const originalConsoleError = global.console.error

beforeAll(() => {
  jest.spyOn(console, `error`).mockImplementation((...args) => {
    const propTypeFailures = [/Failed prop type/, /Warning: Received/]
    if (propTypeFailures.some((p) => p.test(args[0]))) {
      throw new Error(
        [
          chalk.red.bold(`PropTypes caused test failure:`),
          chalk.red(args[0]),
        ].join(`\n`)
      )
    }
    originalConsoleError(...args)
  })
})