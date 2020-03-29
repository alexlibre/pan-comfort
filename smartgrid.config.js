var smartgrid = require('smart-grid');
var settings = {
    outputStyle: 'scss',
    columns: 12,
    offset: '15px',
    mobileFirst: true,
    container: {
        maxWidth: '100%',
        fields: '15px'
    },
    breakPoints: {
        xl: {
            width: '1600px',
            fields: '65px',
            offset: '30px'
        },
        lg: {
            width: '1280px',
            fields: '40px',
            offset: '22px'
        },
        md: {
            width: '768px',
            offset: '15px',
            fields: '35px'
        },
        sm: {
            width: '320px',
            fields: '15px'
        },
    }
};

smartgrid('./src/scss', settings);
