import path from "path";
import fs from "fs";

export default (
  p: string,
  extensions: string[] = [".js", ".jsx", ".ts", ".tsx"]
) => {
  const filepath = path.resolve(p);

  if (fs.existsSync(filepath)) {
    if (fs.statSync(filepath).isDirectory()) {
      p = path.resolve(p, "index");
    } else {
      return filepath;
    }
  }
  for (const ext of extensions) {
    const filepath = path.resolve(p + ext);
    if (fs.existsSync(filepath)) return filepath;
  }
  return null;
};
