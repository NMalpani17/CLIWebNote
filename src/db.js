
import fs from 'node:fs/promises'
import {fileURLToPath} from 'url';

const DB_PATH=fileURLToPath(new URL("../db.json",import.meta.url))

export const readDB= async ()=>{
    const DB= await fs.readFile(DB_PATH,'utf-8')
    return JSON.parse(DB)
}

export const WriteDB=async (db)=>{
    await fs.writeFile(DB_PATH,JSON.stringify(db,null,2))
    return db;  
    }

export const insert=async (note)=>{
    const db= await readDB()
    db.notes.push(note)
    await WriteDB(db)
    return note
}