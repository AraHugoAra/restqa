const { getFormatter } = require('@restqa/cucumber-export')
const Config = require('./config')

const restqa = {
  env: process.env.RESTQA_ENV && String(process.env.RESTQA_ENV).toLowerCase(),
  configFile: process.env.RESTQA_CONFIG
}

const config = new Config(restqa)

const options = {
  key: config.metadata.code,
  name: config.metadata.name,
  env: config.environment.name,
  repository: process.env.GITHUB_REPOSITORY || process.env.CI_PROJECT_PATH || process.env.BITBUCKET_REPO_SLUG || process.env.RESTQA_REPOSITORY,
  sha: process.env.GITHUB_SHA || process.env.CI_COMMIT_SHA || process.env.BITBUCKET_COMMIT || process.env.RESTQA_COMMIT_SHA,
  outputs: config.environment.outputs
}

module.exports = getFormatter(options)
