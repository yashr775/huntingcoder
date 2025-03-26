import fs from "fs/promises";
import path from "path";

export default async function handler(req, res) {
    try {
        let page = parseInt(req.query.page) || 1; // Get page number (default: 1)
        let limit = 5; // Number of blogs per page
        let blogDir = path.join(process.cwd(), "blogdata");

        let files = await fs.readdir(blogDir);
        let paginatedFiles = files.slice((page - 1) * limit, page * limit);

        let blogs = await Promise.all(
            paginatedFiles.map(async (file) => {
                let fileContent = await fs.readFile(path.join(blogDir, file), "utf-8");
                return { fileName: file, content: fileContent };
            })
        );

        let hasMore = page * limit < files.length; // Check if more blogs are available

        res.status(200).json({ blogs, hasMore });
    } catch (error) {
        res.status(500).json({ error: "Error reading files", details: error.message });
    }
}
