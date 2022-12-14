is.num = (n) => typeof n === 'number';
is.nan = (n) => is.num(n) && isNaN(n);
is.str = (n) => typeof n === 'string';
is.bool = (n) => typeof n === 'boolean';
is.undef = (n) => typeof n === 'undefined';
is.def = (n) => !is.undef(n);
is.arr = (n) => typeof n === 'object' && Array.isArray(n);
is.obj = (n) => typeof n ==='object' && !Array.isArray(n) && n;
is.fun = (n) => typeof n === 'function';
is.truthy = (n) => n;
is.falsy = (n) => !n;