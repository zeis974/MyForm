import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function fetchPost(url) {
    const files = fs.readdirSync(path.join(url));

    const posts = files.map((filename) => {
        const markdownWithMeta = fs.readFileSync(
            path.join(url, filename),
            "UTF-8"
        );
        const { data: frontMatter } = matter(markdownWithMeta);

        return {
            frontMatter,
            slug: filename.split(".")[0],
        };
    });
    return posts
}