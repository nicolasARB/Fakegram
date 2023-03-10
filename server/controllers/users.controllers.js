import { pool } from '../db.js';

export const getUsers = async (req, res) =>{
    try{

const [result] = await pool.query("SELECT * FROM user ORDER BY createAt ASC");
res.json(result)
} catch(error){
    return res.status(500).json({message: error.message});
}
}
export const getUser = async (req, res) =>{
    try{
        const [result] = await pool.query('SELECT * FROM user WHERE id = ?', 
        [req.params.id]);
       
        if(result.length == 0){
           return res.status(404).json({message: "User not found"});
        }
       
        res.json(result[0]);
    }catch(error){
        return res.status(500).json({message: error.message});
    }

    } 
    
export const createUser = async (req, res) =>{
try{
    const {username, pass, email, description } = req.body

    const [result] = await pool.query(
        "INSERT INTO user(username, pass, email) VALUES (?, ?, ?)",
        [username, pass, email]
      );
        res.send({
            id: result.insertId,
            username,
            pass,
            email
        });
}catch(error){
    return res.status(500).json({message: error.message});
}
        }          
export const updateUser = async (req, res) =>{
try{
    const {username, pass, email} = req.body;

 const [result] = await pool.query("UPDATE user SET ?", 
    [req.body, 
    req.params.id]);

    res.json(result);
}catch(error){
    return res.status(500).json({message: error.message});
}
        }
export const deleteUser = async (req, res) =>{
try{
    console.log(req.params.id);
   const [result] = await pool.query("DELETE FROM user WHERE id = ?", 
   [req.params.id]);
   if(result.affectedRows === 0){
    return res.status(404).json({message: "User not found" });
   }
            res.json(result);
}catch(error){
    return res.status(500).json({message: error.message});
}
            }
        