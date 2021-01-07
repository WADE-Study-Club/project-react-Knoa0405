import dev from './dev.js';

import prod from './prod.js';

export default process.env.NODE_ENV === 'production' ? prod : dev;
