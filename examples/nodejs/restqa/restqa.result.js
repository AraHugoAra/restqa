window.OUTPUT = {
  "RESTQA_FOLDER": "D:\\Documents\\Travail\\Developpement\\Forks\\restqa\\examples\\nodejs",
  "RESTQA_RESULT": {
    "id": "d49f8074-5f1b-4b92-b65b-259dbc89aaea",
    "startTime": "2022-12-18T14:29:46+01:00",
    "name": "example-restqa",
    "key": "EXAMPLE-RESTQA",
    "env": "local",
    "duration": null,
    "durationFormat": "Invalid date",
    "timestamp": "2022-12-18T14:29:46+01:00",
    "type": "testSuite",
    "total": 1,
    "success": true,
    "passed": 1,
    "failed": 0,
    "skipped": 0,
    "scenarios": {
      "passed": 1,
      "failed": 0,
      "skipped": 0,
      "undefined": 0
    },
    "features": [
      {
        "description": "",
        "elements": [
          {
            "description": "",
            "id": "welcome-to-the-restqa-community;initial-scenario",
            "keyword": "Scenario",
            "line": 4,
            "name": "Initial scenario",
            "steps": [
              {
                "keyword": "Before",
                "hidden": true,
                "result": {
                  "status": "passed",
                  "duration": 1000000
                }
              },
              {
                "keyword": "Before",
                "hidden": true,
                "result": {
                  "status": "passed",
                  "duration": 1000000
                }
              },
              {
                "keyword": "Before",
                "hidden": true,
                "result": {
                  "status": "passed",
                  "duration": 1000000
                }
              },
              {
                "arguments": [],
                "keyword": "Given ",
                "line": 5,
                "name": "a request",
                "match": {
                  "location": "..\\..\\plugin-rest-api\\dist\\index.js:1"
                },
                "result": {
                  "status": "passed",
                  "duration": 4000000
                }
              },
              {
                "arguments": [],
                "keyword": "When ",
                "line": 6,
                "name": "GET \"/\"",
                "match": {
                  "location": "..\\..\\plugin-rest-api\\dist\\index.js:1"
                },
                "result": {
                  "status": "passed",
                  "duration": 42000000
                },
                "embeddings": [
                  {
                    "data": "curl -X GET --url http://localhost:8000/",
                    "mime_type": "text/plain"
                  }
                ]
              },
              {
                "arguments": [],
                "keyword": "Then ",
                "line": 7,
                "name": "status = 200",
                "match": {
                  "location": "..\\..\\plugin-rest-api\\dist\\index.js:1"
                },
                "result": {
                  "status": "passed",
                  "duration": 1000000
                }
              },
              {
                "arguments": [
                  {
                    "content": "{\n\"hello\": \"world\"\n}",
                    "line": 9
                  }
                ],
                "keyword": "And ",
                "line": 8,
                "name": "the body:",
                "match": {
                  "location": "..\\..\\plugin-rest-api\\dist\\index.js:1"
                },
                "result": {
                  "status": "passed",
                  "duration": 4000000
                }
              },
              {
                "keyword": "After",
                "hidden": true,
                "result": {
                  "status": "passed",
                  "duration": 1000000
                }
              },
              {
                "keyword": "After",
                "hidden": true,
                "result": {
                  "status": "passed",
                  "duration": 1000000
                }
              },
              {
                "keyword": "After",
                "hidden": true,
                "result": {
                  "status": "passed",
                  "duration": 1000000
                },
                "embeddings": [
                  {
                    "data": "{\"apis\":[{\"curl\":\"curl -X GET --url http://localhost:8000/\",\"request\":{\"hostname\":\"localhost\",\"port\":\"8000\",\"protocol\":\"http:\",\"pathname\":\"/\",\"timeout\":{\"request\":2000},\"retry\":{\"limit\":0},\"hooks\":{\"afterResponse\":[null]},\"method\":\"get\",\"headers\":{\"x-correlation-id\":\"test-e2e-get-674-1671370185361\",\"user-agent\":\"restqa (https://github.com/restqa/restqa)\"},\"responseType\":\"json\"},\"response\":{\"body\":{\"hello\":\"world\"},\"timing\":29,\"headers\":{\"x-powered-by\":\"Express\",\"content-type\":\"application/json; charset=utf-8\",\"content-length\":\"17\",\"etag\":\"W/\\\"11-IkjuL6CqqtmReFMfkkvwC0sKj04\\\"\",\"date\":\"Sun, 18 Dec 2022 13:29:45 GMT\",\"connection\":\"close\"},\"statusCode\":200,\"request\":{\"path\":\"/\",\"method\":\"get\",\"prefix\":\"[GET /]\"}}}]}",
                    "mime_type": "application/json"
                  }
                ]
              }
            ],
            "tags": [
              {
                "name": "@performance",
                "line": 3
              }
            ],
            "type": "scenario",
            "step_passed": 10,
            "step_failed": 0,
            "step_skipped": 0,
            "step_undefined": 0,
            "result": true,
            "status": "passed",
            "duration": 0.057,
            "timestamp": "2022-12-18T14:29:46+01:00",
            "metadata": {
              "id": "d49f8074-5f1b-4b92-b65b-259dbc89aaea",
              "startTime": "2022-12-18T14:29:46+01:00",
              "name": "example-restqa",
              "key": "EXAMPLE-RESTQA",
              "env": "local",
              "duration": null,
              "durationFormat": "Invalid date"
            }
          }
        ],
        "id": "welcome-to-the-restqa-community",
        "line": 1,
        "keyword": "Feature",
        "tags": [],
        "uri": "..\\..\\..\\examples\\nodejs\\tests\\local\\get.feature",
        "total": 1,
        "passed": 1,
        "failed": 0,
        "skipped": 0,
        "undefined": 0,
        "result": true,
        "duration": 0.057,
        "timestamp": "2022-12-18T14:29:46+01:00",
        "type": "feature",
        "feature_name": "Welcome to the RestQA community",
        "metadata": {
          "id": "d49f8074-5f1b-4b92-b65b-259dbc89aaea",
          "startTime": "2022-12-18T14:29:46+01:00",
          "name": "example-restqa",
          "key": "EXAMPLE-RESTQA",
          "env": "local",
          "duration": null,
          "durationFormat": "Invalid date"
        }
      }
    ]
  },
  "RESTQA_PERFORMANCE": [
    "D:\\Documents\\Travail\\Developpement\\Forks\\restqa\\examples\\nodejs\\tests\\performances\\get.yml"
  ],
  "RESTQA_SPECIFICATION": {
    "openapi": "3.0.0",
    "info": {
      "version": "0.0.1",
      "title": "example-restqa",
      "description": "Delicious Microservice maintained with RestQA"
    },
    "paths": {
      "/": {
        "get": {
          "deprecated": false,
          "operationId": "get",
          "summary": "Initial scenario",
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "hello": {
                        "type": "string",
                        "example": "world"
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  "RESTQA_COLLECTION": {
    "postman": "D:\\Documents\\Travail\\Developpement\\Forks\\restqa\\examples\\nodejs\\tests\\collections\\example-restqa.postman_collection.json",
    "insomnia": null,
    "hoppscotch": null
  },
  "RESTQA_CONTRIBUTORS": [],
  "RESTQA_CONFIG": {
    "version": "0.0.1",
    "metadata": {
      "code": "EXAMPLE-RESTQA",
      "name": "example-restqa",
      "description": "Delicious Microservice maintained with RestQA"
    },
    "tests": {
      "local": {
        "port": 8000,
        "command": "npm run dev",
        "data": {}
      },
      "performance": {
        "tool": "artillery",
        "outputFolder": "tests/performances",
        "onlySuccess": false
      }
    },
    "specification": {
      "tool": "swagger",
      "excludes": {
        "paths": [],
        "queries": []
      },
      "headers": {
        "request": [],
        "response": []
      }
    }
  },
  "RESTQA_HTTP_MOCKS": {
    "outputFolder": "D:\\Documents\\Travail\\Developpement\\Forks\\restqa\\examples\\nodejs\\tests\\mocks",
    "files": [
      "D:\\Documents\\Travail\\Developpement\\Forks\\restqa\\examples\\nodejs\\tests\\mocks\\get.feature1.mock.yml"
    ]
  },
  "RESTQA_COVERAGE": "D:\\Documents\\Travail\\Developpement\\Forks\\restqa\\examples\\nodejs\\restqa\\coverage\\index.html",
  "RESTQA_VERSION": "0.0.0-generated"
}

