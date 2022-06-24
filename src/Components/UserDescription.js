import { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import { getOneUserRequest } from '../Redux/Actions'
import {Card} from 'react-bootstrap'
const UserDescription=()=>{
    const dispatch = useDispatch()
    const {id} = useParams()
    useEffect(()=>{
        dispatch(getOneUserRequest(id))
    },[])
    const user = useSelector(state=> state.user)
    return(
        <div className='cardd'>
            <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Informations</Card.Subtitle>
                <Card.Text>Username : {user.username}</Card.Text>
                <Card.Text>Email : {user.email}</Card.Text>
                <Card.Text>Phone : {user.phone}</Card.Text>
                <Card.Text>Website : {user.website}</Card.Text>

             
            </Card.Body>
            </Card>

        </div>
    )
}

export default UserDescription