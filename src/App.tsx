//.JSX = JavaScript + XML (Arquivo JavaScript que comtém HTML)

//importação do componente Header.jsx
import { Header } from "./components/Header";
//importação do compotente Sidebar.jsx
import { Sidebar } from "./components/Sidebar";
//importação do componente Post.jsx
import { Post } from "./components/Post";

//importação css
import styles from './App.module.css'

//importação de css global (global.css)
import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/nikolasmarlon.png',
      name:  'Nikolas Marlon',
      role: 'Web Developer'
    },
    content: [
      {type:  'paragraph', content: 'e aí'},
      {type:  'paragraph', content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio laborum eum, provident deleniti officiis assumenda harum neque optio distinctio nam debitis. Provident temporibus mollitia dignissimos corporis facilis nobis, beatae porro.'},
      {type:  'link', content: 'fazumsiteai.com.br'}
    ],
    publishedAt: new Date('2022-07-19 21:00:03')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/robertosousa.png',
      name:  'Roberto Sousa',
      role: 'Armador Aquático'
    },
    content: [
      {type:  'paragraph', content: 'Lorem ipsum, dolor sit amet consectetur'},
      {type:  'paragraph', content: 'adipisicing elit. Odio laborum eum, provident deleniti officiis assumenda harum neque optio distinctio nam debitis. Provident temporibus mollitia dignissimos corporis facilis nobis, beatae porro.'},
      {type:  'link', content: 'fazumsiteai.com.br'}
    ],
    publishedAt: new Date('2022-07-12 21:00:03')
  },
]


//Componente é uma função que retorna HTML
export function App() { 
  return (
    //Para retornar multiplos elementos,  sempre precisa de um elemento pai envolvendo os elementos

    //autor e content são propriedade passadas para o componente Post
    <div>       
      <Header />
      <div className={styles.wrapper}>          
          {/**Componente Sidebar */}
          <Sidebar />
          <main>
            {/*iteração com posts*/}  

            {posts.map(post => {
              return (
                <Post key={post.id} author={post.author} content={post.content} publishedAt={post.publishedAt} />
              
              )
            })}


          </main>
      </div>      
    </div>
  )
}

