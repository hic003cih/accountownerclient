import React from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Moment from 'react-moment';
import { Button } from 'react-bootstrap';
 
const redirectToOwnerDetails = (id, history) => {
    history.push('/ownerDetails/' + id);
}
 
const redirectToUpdateOwner = (id, history) => {
    history.push('/updateOwner/' + id);
}
 
const rediterctToDeleteOwner = (id, history) => {
    history.push('/deleteOwner/' + id);
}
 
const owner = (props) => {
    return (
        <Aux>
            <tr>
                <td>{props.owner.applyMan}</td>
                <td><Moment format="DD/MM/YYYY">{props.owner.dateOfBirth}</Moment></td>
                <td>{props.owner.formNo}</td>
                <td>
                    <Button onClick={() => redirectToOwnerDetails(props.owner.formID, props.history)}>Details</Button>
                </td>
                <td>
                    <Button bsStyle="success" onClick={() => redirectToUpdateOwner(props.owner.formID, props.history)}>Update</Button>
                </td>
                <td>
                    <Button bsStyle="danger" onClick={() => rediterctToDeleteOwner(props.owner.formID, props.history)}>Delete</Button>
                </td>
            </tr>
        </Aux>
    )
}
 
export default owner;
