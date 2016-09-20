var grunt = require('grunt');
grunt.loadNpmTasks('grunt-aws-lambda');

grunt.initConfig({
    lambda_invoke: {
        default: {
        }
    },
    lambda_deploy: {
        default: {
            arn: 'arn:aws:lambda:eu-west-1:<AccountNumber>:function:gruntLambda',
				  options: {
            enableVersioning: true,
            region: 'eu-west-1'
        }
	
        }
    },
    lambda_package: {
        default: {
		
        }
    }
});

grunt.registerTask('deploy', ['lambda_package', 'lambda_deploy']);