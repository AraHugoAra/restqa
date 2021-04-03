#!/usr/bin/env bats

load 'common.sh'



@test "Get an error if the .restqa.yml is not found" {
  run restqa run ./bin/tests/features
  #debug "${status}" "${output}" "${lines}"
  [ "$status" -eq  1 ]
  [ "${lines[0]}" =  ">  Error: The configuration file \"$PWD/.restqa.yml\" doesn't exit." ]
}

@test "Get an error if the passed config file is not found (--config)" {
  run restqa run --config .fake.yml ./bin/tests/features
  #debug "${status}" "${output}" "${lines}"
  [ "$status" -eq  1 ]
  [ "${lines[0]}" =  ">  Error: The configuration file \".fake.yml\" doesn't exit." ]
}

@test "Get an error if the passed config file is not found (-c)" {
  run restqa run -c .fake.yml ./bin/tests/features
  #debug "${status}" "${output}" "${lines}"
  [ "$status" -eq  1 ]
  [ "${lines[0]}" =  ">  Error: The configuration file \".fake.yml\" doesn't exit." ]
}

