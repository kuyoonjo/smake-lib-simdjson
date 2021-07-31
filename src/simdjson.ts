import { sep, resolve } from 'path';
import { LLVM } from 'smake';

export function simdjson(t: LLVM) {
  Object.defineProperty(t, 'sysIncludedirs', {
    value: [
      ...t.sysIncludedirs,
      resolve(__dirname, '..', 'simdjson', 'singleheader').replace(
        new RegExp(sep, 'g'),
        '/'
      ),
    ],
    configurable: true,
  });
  Object.defineProperty(t, 'files', {
    value: [
      ...t.files,
      resolve(
        __dirname,
        '..',
        'simdjson',
        'singleheader',
        'simdjson.cpp'
      ).replace(new RegExp(sep, 'g'), '/'),
    ],
    configurable: true,
  });
}
