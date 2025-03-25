import * as fs from "fs";

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            // Ensure the directory exists
            await fs.promises.mkdir('contactdata', { recursive: true });

            let data = await fs.promises.readdir("contactdata");
            let filePath = `contactdata/${data.length + 1}.json`;

            // Write data to a new file
            await fs.promises.writeFile(filePath, JSON.stringify(req.body, null, 2));

            res.status(200).json({ message: "Data saved successfully!", filePath });

        } catch (error) {
            res.status(500).json({ error: "Internal Server Error", details: error.message });
        }
    } else {
        res.status(200).send("Allblogs");
    }
}
