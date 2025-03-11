import * as fs from "fs";

export default async function handler(req, res) {
    try {
        let data = await fs.promises.readdir("blogdata");

        let myFiles = [];

        for (const item of data) {
            let fileContent = await fs.promises.readFile("blogdata/" + item, "utf-8");
            myFiles.push({ fileName: item, content: fileContent });
        }

        res.status(200).json(myFiles);
    } catch (error) {
        res.status(500).json({ error: "Error reading files", details: error.message });
    }
}
