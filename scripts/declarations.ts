import * as path from "https://deno.land/std@0.91.0/path/mod.ts";

const [sourceFile, outPath] = Deno.args;

if (!sourceFile || !outPath) {
  throw new Error("Source file and out path must be specified");
}

const output = await Deno.emit(sourceFile, {
  compilerOptions: {
    declarationDir: outPath,
    emitDeclarationOnly: true,
    declaration: true,
  },
});

for (const diagnostic of output.diagnostics) {
  console.warn(`[TS${diagnostic.code}] ${diagnostic.messageText}`);
}

const promises = [];
for (const filePath in output.files) {
  const fileData = output.files[filePath];
  const fileName = path.parse(filePath).base;
  console.log(`writing: ${fileName}`);
  promises.push(
    Deno.writeTextFile(path.join(outPath, fileName), fileData),
  );
}

await Promise.allSettled(promises);
