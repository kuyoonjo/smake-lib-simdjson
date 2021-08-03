import { resolve } from 'path';
import { LLVM } from 'smake';

export function simdjson(t: LLVM) {
  Object.defineProperty(t, 'sysIncludedirs', {
    value: [
      ...t.sysIncludedirs,
      resolve(__dirname, '..', 'simdjson', 'singleheader').replace(/\\/g, '/'),
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
      ).replace(/\\/g, '/'),
    ],
    configurable: true,
  });
}
