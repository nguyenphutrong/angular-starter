module.exports = {
  '*.{js,ts,scss,html}': [
    (files) => `nx affected:lint --fix --files=${files.join(',')}`,
    (files) => `nx format:write --files=${files.join(',')}`,
  ],
};
