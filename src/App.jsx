import { useState } from 'react'
import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import './global.css'
import styles from './App.module.css'

/**
 * author: { acatar_url: "", name: "", role: "" }
 * publishedAt: Date
 * content: String
 */


export function App() {
  return (
    <div>
      <Header />
      
      <div className={ styles.wrapper }>
        <Sidebar />
        <main>
          <Post/>

          <Post/>
        </main>
      </div>
    </div>
  )
}