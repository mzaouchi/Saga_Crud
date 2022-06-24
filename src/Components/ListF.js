import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { getUserRequest } from "../Redux/Actions"
import {ListGroup} from 'react-bootstrap'

const ListF=()=>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getUserRequest())
    },[])
    const users = useSelector(state=>state.users)

    return(
        <div>
            <ListGroup>
            {
                users.map(user=> <ListGroup.Item as={Link} to={`/Users/${user.id}`} key={user.id}>{user.name}</ListGroup.Item>)
            }
            </ListGroup>
        </div>
    )
}

export default ListF