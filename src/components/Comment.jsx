import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment({ content, onDeleteComment }) {

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  return (
    <div className={ styles.comment }>
      <Avatar hasBorder={false} src="https://github.com/MichaelCStrahl.png" />

      <div className={ styles.commentBox }>
        <div className={ styles.commentContent }>
          <header>
            <div className={ styles.authorAndTime }>
              <strong>Michael C. Strahl</strong>
              <time title="6 de Março as 08:01h" dateTime="2023-03-06 08:01:13">Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>
          <p>{ content }</p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}