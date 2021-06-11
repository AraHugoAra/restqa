import mutations from './mutations'

describe('mutations', () => {
  describe('config', () => {
    
    const {
      config,
      loadingConfig,
      selectedEnv,
      info,
      steps
    } = mutations

    test('update Config states', () => {
      const state = {
        config: null,
        loadingConfig: false
      }

      const expectedConfig = {
        foo: 'bar'
      }
      config(state, expectedConfig)

      expect(state.config).toEqual(expectedConfig)
      expect(state.loadingConfig).toEqual(false)
    })

    test('update loadingConfig states', () => {
      const state = {
        loadingConfig: false
      }

      loadingConfig(state, true)

      expect(state.loadingConfig).toEqual(true)
    })

    test('update selectedEnv states', () => {
      const state = {
        selectedEnv: null
      }

      selectedEnv(state, 'uat')

      expect(state.selectedEnv).toEqual('uat')
    })

    test('update steps definition', () => {
      const state = {
        steps: null
      }

      steps(state, [{ foo: 'bar' }])

      expect(state.steps).toEqual([{ foo: 'bar' }])
    })

    test('update loadingConfig states', () => {
      const state = {
        info: null
      }

      info(state, { foo: 'bar' })

      expect(state.info).toEqual({ foo: 'bar' })
    })
  })
})

