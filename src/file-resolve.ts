import path from "path";
import fs from "fs";

export default (function () {
  const arg = {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  };
  const fileResolve = (p: string) => {
    const filepath = path.resolve(p);
    if (fs.existsSync(filepath)) {
      if (fs.statSync(filepath).isDirectory()) {
        p = path.resolve(p, "index");
      } else {
        return filepath;
      }
    }
    for (const ext of arg.extensions) {
      const filepath = path.resolve(p + ext);
      if (fs.existsSync(filepath)) return filepath;
    }
    return null;
  };
  fileResolve.extensions = (extensions: string[]) => {
    arg.extensions = extensions;
    return fileResolve;
  };
  return fileResolve;
})();
