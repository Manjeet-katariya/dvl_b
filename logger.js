const format = (level, args) => {
  const ts = new Date().toISOString();
  const message = args.map(a => (typeof a === 'object' ? JSON.stringify(a) : String(a))).join(' ');
  return `[${ts}] ${level}: ${message}`;
};

module.exports = {
  info: (...args) => console.log(format('INFO', args)),
  warn: (...args) => console.warn(format('WARN', args)),
  error: (...args) => console.error(format('ERROR', args)),
  debug: (...args) => {
    if (process.env.NODE_ENV !== 'production') console.debug(format('DEBUG', args));
  }
};
