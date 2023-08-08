import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const POSTS_PATH = join(process.cwd(), "_forms");

export interface Post {
 title: string;
 subject: string;
 slug: string;
 date: string;
 description: string;
 tags: string[];
}

function getPostsFilePaths(): string[] {
 return fs.readdirSync(POSTS_PATH).filter((path) => /\.mdx?$/.test(path));
}

function getPostItems(filePath: string, fields: string[]): Post {
 const slug = filePath.replace(/\.mdx?$/, "");

 const { data, content } = getPost(slug);

 const items: Post = {
  title: data.title || "",
  subject: data.subject || "",
  slug: slug,
  date: data.date || "",
  description: data.description || "",
  tags: data.tags || [],
 };

 return items;
}

export function getAllPosts(fields: string[]): Post[] {
 const filePaths = getPostsFilePaths();

 const posts: Post[] = filePaths
  .map((filePath) => getPostItems(filePath, fields))
  .sort((post1, post2) => (post1.date > post2.date ? 1 : -1));
 return posts;
}

export function getPost(slug: string): {
 data: { [key: string]: any };
 content: string;
} {
 const fullPath = join(POSTS_PATH, `${slug}.mdx`);
 const fileContents = fs.readFileSync(fullPath, "utf-8");
 const { data, content } = matter(fileContents);
 return { data, content };
}
