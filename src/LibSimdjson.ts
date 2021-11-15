import { resolve } from 'path';
import { LLVM } from 'smake';

const includeDir = resolve(__dirname, '..', 'simdjson', 'singleheader').replace(
  /\\/g,
  '/'
);
const files = [includeDir + '/simdjson.cpp'];

type TargetType =
  | 'x86_64-apple-darwin'
  | 'arm64-apple-darwin'
  | 'x86_64-linux-gnu'
  | 'aarch64-linux-gnu'
  | 'arm-linux-gnueabihf'
  | 'x86_64-pc-windows-msvc'
  | 'i386-pc-windows-msvc';
export class LibSimdjson extends LLVM {
  constructor(target: TargetType) {
    super('simdjson', target);
    this.type = 'static';
    this.includedirs = [...this.includedirs, includeDir];
    this.files = files;
  }

  static config(llvm: LLVM) {
    const t = new LibSimdjson(llvm.target);
    llvm.includedirs = [...llvm.includedirs, includeDir];
    llvm.linkdirs = [...llvm.linkdirs, t.outputDir];
    llvm.libs = [...llvm.libs, t.name];
  }
}
