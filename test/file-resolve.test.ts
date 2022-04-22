import path from "path";
import fileResolve from "../src/file-resolve";

const dir = path.resolve("test", "dir");

test("[default] should get index.ts while paas a directory", () => {
  expect(fileResolve(dir)).toBe(path.resolve(dir, "index.ts"));
});

test("[default] should get find.ts while paas a whole file", () => {
  expect(fileResolve(path.resolve(dir, "find.ts"))).toBe(
    path.resolve(dir, "find.ts")
  );
});

test("[default] should get find.ts while paas dir/find", () => {
  expect(fileResolve(path.resolve(dir, "find"))).toBe(
    path.resolve(dir, "find.ts")
  );
});

test("[extension] should get index.md while paas a directory", () => {
  expect(fileResolve(dir, [".md"])).toBe(path.resolve(dir, "index.md"));
});

test("[extension] should get find.md while paas a directory", () => {
  expect(fileResolve(path.resolve(dir, "find"), [".md"])).toBe(
    path.resolve(dir, "find.md")
  );
});

test("[extension] should get index.json while paas a directory", () => {
  expect(fileResolve(dir, [".json"])).toBe(path.resolve(dir, "index.json"));
});
