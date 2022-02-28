import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const POSTS_PATH = join(process.cwd(), "_forms");

function getPostsFilePaths() {
 return fs.readdirSync(POSTS_PATH).filter((path) => /\.mdx?$/.test(path));
}

function getPostItems(filePath, fields) {
 const slug = filePath.replace(/\.mdx?$/, "");

 const { data, content } = getPost(slug);

 const items = {};

 fields.forEach((field) => {
  if (field === "slug") {
   items[field] = slug;
  }
  if (field === "content") {
   items[field] = content;
  }
  if (data[field]) {
   items[field] = data[field];
  }
 });
 return items;
}

export function getAllPosts(fields, postsPath) {
 const filePaths = getPostsFilePaths();

 const posts = filePaths
  .map((filePath) => getPostItems(filePath, fields, postsPath))
  .sort((post1, post2) => (post1.date > post2.date ? 1 : -1));
 return posts;
}

export function getPost(slug) {
 const fullPath = join(POSTS_PATH, `${slug}.mdx`);
 const fileContents = fs.readFileSync(fullPath, "utf-8");
 const { data, content } = matter(fileContents);
 return { data, content };
}
