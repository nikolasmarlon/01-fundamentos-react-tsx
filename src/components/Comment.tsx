import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

//interface do tipo function, precisa colocar no formato de arroy function
// ver se a function retorna alguma coisa e qual tipo 
// caso nao retorne nenhum valor, colocamos o retorno como void
// se a function recebe parâmetros, precisamos passar o parâmetro e o tipo na arrouFunction
interface CommentProps{
    content: string;
    onDeleteComment: (comment: string) => void;
    
}


export function Comment({content, onDeleteComment}: CommentProps){

    //aplaudir
    //sempre importante iniciar o estado com uma informação que seja do mesmo tipo que iremos armazenar
    const [likeCount, setLikeCount] = useState (0)

    function handleLikeComment(){
        //setLikeCount(likeCount + 1)

        //pega o estado mais atual para poder mudar o valor
        setLikeCount((state) =>{
            return state + 1
        })
    }


    //deletar comentário 
    function handleDeleteComment(){

       onDeleteComment(content)
    }

    return(
        <div className={styles.comment}>

            <Avatar hasBorder={false} src="https://github.com/nikolasmarlon.png" />

            <div className={styles.commentBox}>

                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Nikolas Marlon</strong>

                            <time title='22 de janeiro de 2022' dateTime='2022-05-22 08:15:13'>Públicado Há 1h</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            {/**Biblioteca phosphor-react */}
                            <Trash className={styles.trash}/>
                        </button>                        
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    {/**quando o usuário clicar em aplaudir */}
                    <button onClick={handleLikeComment}>
                        {/**Biblioteca phosphor-react */}
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>

            </div>

        </div>
    )
}