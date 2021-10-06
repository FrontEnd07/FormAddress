const aliases = (prefix = `src`) => ({
    '@assets': `${prefix}/assets`,
    '@view': `${prefix}/view`,
    '@fonts': `${prefix}/fonts`,
    '@style': `${prefix}/style`,
    '@store': `${prefix}/store`,
    '@utils': `${prefix}/utils`,
    '@components': `${prefix}/components`,
});

module.exports = aliases;