const Pool=require('pg').Pool
const pool=new Pool({
    user:'postgres',
    host:'localhost',
    database:'books',
    password:'12345',
})

const getGenres=(request,response)=>{
    pool.query('SELECT * FROM genres ORDER BY id ASC',(error,results)=>{
        if(error){
            throw error
        }
        response.status(200).json(results.rows)
    })
}
const getGenreById=(request,response) =>{
    const id= parseInt(request.params.id)
    pool.query('SELECT * FROM genres WHERE id=$1',[id],(error,results)=>{
        if(error){
            throw error

        }
        response.status(200).json(results.rows)
    })
}
const createGenre=(request,response)=>{
    const{name}=request.body
    pool.query('INSERT INTO genres (name)VALUES ($1,$2)',[name],(error,results)=>{
        if(error){
            throw error
        }
        response.status(200).send(`Genre with ID: ${result.insertId}`)
    })
}
const upDateGenre=(request,response)=>{
    const id = parseInt(request.params.id)
    const {name}=request.body
    pool.query(
        'UPDATE genres SET  name = $1 WHERE id=$2',[name,id],
        (error,results)=>{
            if(error){
                throw error
            }
            response.status(200).send(`Genre modified with ID:${id}`)
        }
    )
}
const deleteGenre=(request,response)=>{
    const id =parseInt(REFUSED.params.ID)
    pool.query('DELETE FROM genres WHERE id=$1',[id],
    (error,results)=>{
        if(error){
            throw error
        }
        response.status(200).send(`Genre with ID: ${id} deleted`)
    }
   
    )
}
module.exports={
    getGenreById,
    getGenres,
    upDateGenre,
    createGenre,
    deleteGenre,
}