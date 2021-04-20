const fs = require('fs')
const path = require('path')
const os = require('os')
let filename

afterEach(() => {
  jest.resetModules()
  if (filename && fs.existsSync(filename)) {
    fs.unlinkSync(filename)
  }
})

beforeEach(() => {
  if (filename && fs.existsSync(filename)) {
    fs.unlinkSync(filename)
    filename = undefined
  }
})

describe('#Config locate', () => {
  const Config = require('./index')
  test('Throw an error if the restqa config file doesn\t exist in the current file (no options passed)', () => {
    expect(() => {
      Config.locate()
    }).toThrow(`The configuration file "${path.resolve(process.cwd(), '.restqa.yml')}" doesn't exist."`)
  })

  test('Return the file path if the config file is found', () => {
    filename = path.resolve(process.cwd(), '.restqa.yml')
    fs.writeFileSync(filename, 'the file content')

    const result = Config.locate()
    expect(result).toEqual(filename)
  })

  test('Throw an error if the config file passed doesn\'t exist in the current folder', () => {
    expect(() => {
      Config.locate({ configFile: '.example.restqa.yml' })
    }).toThrow(`The configuration file "${path.resolve(process.cwd(), '.example.restqa.yml')}" doesn't exist."`)

    expect(() => {
      Config.locate({ configFile: path.resolve(os.tmpdir(), '.example.restqa.yml') })
    }).toThrow(`The configuration file "${path.resolve(os.tmpdir(), '.example.restqa.yml')}" doesn't exist."`)
  })

  test('Return the file path if the config file is found in a specific folder', () => {
    filename = path.resolve(os.tmpdir(), '.restqa.yml')
    fs.writeFileSync(filename, 'the file content')

    const result = Config.locate({ configFile: filename })
    expect(result).toEqual(filename)
  })

  test('Throw an error if the passed path parameter is not a folder', () => {
    expect(() => {
      Config.locate({ path: 'README.md' })
    }).toThrow(`The path "${path.resolve(process.cwd(), 'README.md')}" is not a folder`)
  })

  test('Return the config file if the passed path contains a config file', () => {
    filename = path.resolve(os.tmpdir(), '.restqa.yml')
    fs.writeFileSync(filename, 'the file content')
    const result = Config.locate({ path: os.tmpdir() })
    expect(result).toEqual(filename)
  })

  test('Throw an error if the passed folder doesn\'t contain the passed file', () => {
    expect(() => {
      Config.locate({ path: os.tmpdir(), configFile: '.example.yml' })
    }).toThrow(`The configuration file "${path.resolve(os.tmpdir(), '.example.yml')}" doesn't exist."`)
  })

  test('Return the config file if the passed path contains a config file and a specific config file name', () => {
    filename = path.resolve(os.tmpdir(), '.example.yml')
    fs.writeFileSync(filename, 'the file content')
    const result = Config.locate({ configFile: '.example.yml', path: os.tmpdir() })
    expect(result).toEqual(filename)
  })
})
