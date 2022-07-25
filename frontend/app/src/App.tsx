import React, { useEffect } from 'react'
import './App.css'
import Main from './Main'
import Sidebar, { NotePreview } from './Sidebar'
import { useState } from 'react'
import { Note } from './Note'
import axios from 'axios'

const url = 'http://localhost:3000/api'

const App = () => {
  const useNotes = () => {
    const [notes, setNotes] = useState<Note[]>([])
    const [loaded, setLoaded] = useState(false)
    const [activeNoteId, setActiveNoteId] = useState<number | null>(null)

    useEffect(() => {
      const fetchData = async () => {
        setLoaded(true)
        axios
          .get(`${url}/memo`)
          .then(res => {
            const data = res.data as Note[]
            console.log(data)
            setNotes(data.map(j => Note.fromJSON(j)))
          })
          .catch(err => console.error(err))
      }

      console.log('fetching data')
      fetchData()
    }, [])

    useEffect(() => {
      if (!loaded) {
        return
      }

      axios
        .post(`${url}/memo`, JSON.stringify(notes))
        .catch(err => console.error(err))
    }, [notes])

    const onAddNote = () => {
      const newNote = new Note(notes.length)
      setNotes([...notes, newNote])
      setActiveNoteId(newNote.id)
    }

    const onDeleteNote = (id: number) => {
      setNotes(notes.filter(note => note.id !== id))
    }

    const getActiveNote = () => {
      return notes.find(note => note.id === activeNoteId)
    }

    const onUpdateNote = (updatedNote: Note) => {
      const newNotes = notes.map(note => {
        if (note.id === activeNoteId) {
          return updatedNote
        }
        return note
      })

      setNotes(newNotes)
    }

    // const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified)

    return {
      notes,
      // sortedNotes,
      onAddNote,
      onDeleteNote,
      onUpdateNote,
      getActiveNote,
      activeNoteId,
      setActiveNoteId,
    }
  }

  const {
    notes,
    // sortedNotes,
    onAddNote,
    activeNoteId,
    setActiveNoteId,
    onDeleteNote,
    onUpdateNote,
    getActiveNote,
  } = useNotes()

  return (
    <div className="App">
      <Sidebar
        onAddNote={onAddNote}
        notes={notes.map(note => (
          <NotePreview
            note={note}
            key={note.id}
            activeNote={activeNoteId}
            onDeleteNote={onDeleteNote}
            setActiveNote={setActiveNoteId}
          />
        ))}
      />
      <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
    </div>
  )
}

export default App
