import { jest } from '@jest/globals';

jest.unstable_mockModule('../src/db.js', () => ({
  insert: jest.fn(),
  readDB: jest.fn(),
  WriteDB: jest.fn(),
}));

const { insert, readDB, WriteDB } = await import('../src/db.js');
const { newNote, getAll, removeNote } = await import('../src/notes.js');

beforeEach(() => {
  insert.mockClear();
  readDB.mockClear();
  WriteDB.mockClear();
})

describe("Note module tests", ()=>{

  test("Testing newNote function",async ()=>{
    const note="Exercise daily"
    const tag=['fitness','weight loss']
    const obj={
      tags:tag,
      content:note,
      id: Date.now()
    }
    insert.mockResolvedValue(obj)
    const result= await newNote(note,tag);
    expect(result).toEqual(obj);
   })
   
   test("testing getAll function",async ()=>{
   const db={
     notes:['note1','note2','note3']
   }
   readDB.mockResolvedValue(db)
   const result=await getAll()
   expect(result).toEqual(db.notes)
   })
   
   test("Testing removeNote function",async ()=>{
     const db={
       notes:[
         {id:1,content:"Hi"},
         {id:2,content:"Bye"},
         {id:3,content:"Hello"}
       ]
     }
     WriteDB.mockResolvedValue(db)
   
     const result=await removeNote(4)
     expect(result).toBeUndefined()
   })
})
