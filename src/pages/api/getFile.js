import { readdir } from "fs/promises";

export default async function handler(req, res) {
    try {
        const forms = await getNumberFiles("_forms")
        const exercises = await getNumberFiles("_forms/exercises")
        const materials = 3;
        res.status(200).json({ forms, exercises, materials })
    } catch (err) {
        res.status(500).json({ error: 'failed to load data' })
    }
}

async function getNumberFiles(dir) {
    const files = await readdir(dir)
    return files.length
}
