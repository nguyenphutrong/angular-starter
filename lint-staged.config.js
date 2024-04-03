
module.exports = {
    "*.{ts,scss,html}": [
        files => `nx affected:lint --fix --files=${files.join(',')}`,
        files => `nx format:write --files=${files.join(',')}`,
    ],
};