const cmds = process.argv;

/**
 * Method responsible to retrieve the content of a specific flag, for exemple:
 * get('--env', ['webpack', '--env="production"']) => 'production'
 * @param  {String} flag
 * @param  {Array} [args]
 * @return {String} Returns the content of a specific flag
 */
const get = (flag, args = process.argv) => {
	return args.reduce((curr, next) => {
		if (!curr) {
			if (next.includes(flag)) {
				return JSON.parse(next.split(flag + '=')[1]);
			}
		} else {
			return curr;
		}
	}, undefined);
};

/**
 * Method responsible check if some flag exists on process.argv or received args:
 * @param  {String} flag
 * @param  {Array} [args]
 * @return {Boolean} result
 */
const exist = (flag, args = process.argv) => {
	return !!args.filter(arg => arg.includes(flag)).length > 0;
};

module.exports = { get, exist };
