import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/ruan4f.png',
      name: 'Ruan Ferreira',
      role: 'Web Developer'
    },
    content: [
      {
        type: 'paragraph', content: 'Fala galeraa 👋'
      },
      {
        type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      {
        type: 'link', content: 'jane.design/doctorcare'
      }
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  },
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'CTO @ Rocketseat'
    },
    content: [
      {
        type: 'paragraph', content: 'Fala galeraa 👋'
      },
      {
        type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      {
        type: 'link', content: 'jane.design/doctorcare'
      }
    ],
    publishedAt: new Date('2022-05-10 20:00:00')
  },
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @ Rocketseat'
    },
    content: [
      {
        type: 'paragraph', content: 'Fala galeraa 👋'
      },
      {
        type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      {
        type: 'link', content: 'jane.design/doctorcare'
      }
    ],
    publishedAt: new Date('2022-05-06 20:00:00')
  }
]

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
