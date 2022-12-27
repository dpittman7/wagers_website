/* 1. Access APIs */
import { config, render } from '@master/css';
/* 2. Configure your initial options here ... */
Style.extend('classes', 
    {
        btn: 'font:14 text:center h:40'
    },
    require('./home')
);
/* 3. Manually initialize */
init();