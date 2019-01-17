module.exports = function (wallaby) {
    return {
      files: [
        '**/*.js', 
  
        //Exclude jest/wallaby config
        '!jest.config.js', 
        '!wallaby.js', 
  
        //Exclude meteor/node_module directories
        '!.meteor/**/*',
        '!node_modules/**/*',
  
        //Exclude tests
        '!**/*.test.js',
        '!**/*.spec.js',
      ],
  
      tests: [
        '**/*.test.js',
        '**/*.spec.js',
        '!.meteor/**/*',
        '!node_modules/**/*',
      ],
  
      env: {
        type: 'node',
        runner: 'node'
      },
  
      testFramework: 'jest',
  
      compilers: {
        '**/*.js': wallaby.compilers.babel()
      }
    };
  };