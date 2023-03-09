import { pool } from '../db.js';

export const getUsers = (req, res) =>{
res.send("getting users");
}
export const getUser = (req, res) =>{
    res.send("getting user");
    } 
export const createUser = async (req, res) =>{
    const {username, email, password } = req.body
const result = await pool.query('INSERT INTO  user(username, password, email) VALUES (?, ?  )', [
    username,
    pass,
    email
]);
        res.send("creating user");
        }          
export const updateUser = (req, res) =>{
        res.send("updating user");
        }
export const deleteUser = (req, res) =>{
            res.send("deleting user");
            }
        