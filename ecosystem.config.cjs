module.exports = {
	apps: [
		{
			name: 'kingplay-fe',
			script: './build/',
			args: '-r dotenv/config',
			env: {
				NODE_ENV: 'development'
			},
			env_production: {
				NODE_ENV: 'production'
			}
		}
	]
};
