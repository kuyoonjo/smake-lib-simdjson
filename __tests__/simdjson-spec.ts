import { simdjson } from '../src/simdjson';
import { LLVM_Darwin } from 'smake';
import { addLibs } from '@smake/libs';
import { resolve, sep } from 'path';

test('simdjson', () => {
  class A extends LLVM_Darwin {
    files = [];
  }
  const B = addLibs(A, simdjson);
  const b = new B();
  const p = resolve(__dirname, '..', 'simdjson', 'singleheader').replace(
    new RegExp(sep, 'g'),
    '/'
  );
  const p2 = resolve(
    __dirname,
    '..',
    'simdjson',
    'singleheader',
    'simdjson.cpp'
  ).replace(new RegExp(sep, 'g'), '/');
  expect(b.sysIncludedirs.includes(p)).toBe(true);
  expect(b.files.includes(p2)).toBe(true);
  expect(b.sysIncludedirs.length).toBe(1);
});
