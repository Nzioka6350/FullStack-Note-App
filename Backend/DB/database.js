import mysql2 from 'mysql2';

const db = mysql2.createPool({
    host: 'localhost',
    user: 'root',
    password: 'MAKUENIkenya2020',
    database: 'notes'
})

db.getConnection((err,connection)=>{
    if(err)
    {
        console.log(err)
        return;
    }
    console.log("Connected Successfully")
    connection.release();
})//Function to get all notes
export default getNotes()
{

}
//Function to add notes
export default addNotes()
{
    
}
//Function to delete note
export default deleteNotes(id)
{

}
//Function to add user
export default addUser()
{

}
//Function to delete user
export default deleteUser(id)
{

}
//Function to edit user
export default updateUser(id)
{

}