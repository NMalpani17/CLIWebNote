import {insert,readDB,WriteDB} from './db.js'

 export const newNote=async (note,tags)=>{
    const obj={
        tags,
        id:Date.now(),
        content:note
    }
    await insert(obj)
    return obj
}

export const getAll=async ()=>{
    const db=await readDB();
    return db.notes
} 

export const findNotes = async (filter)=>{
 const notes= await getAll();
 return notes.filter(note=>note.content.toLowerCase().includes(filter.toLowerCase()))
}

export const removeNote =async (id)=>{
    const {notes}= await readDB()
    const flag= notes.find(note=>note.id===id)
    if(flag){
        const newNotes=notes.filter(note=>note.id !== id)
        await WriteDB({notes:newNotes})
        return id;      
    }
}

export const removeAll =()=>{
    return WriteDB({notes:[]})
}