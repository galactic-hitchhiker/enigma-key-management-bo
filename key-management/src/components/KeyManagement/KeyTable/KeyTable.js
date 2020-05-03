import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const KeyTable = (props) => {
    const keys = props.keys.map((key, index) =>
        (<tr key={index}>
            <td>{index}</td>
            <td>{key.name}</td>
            <td>{key.created}</td>
            <td>{key.updated}</td>
            <td>{key.active ? "Yes" : "No"}</td>
            <td><Button variant="secondary" onClick={() => props.onUpdate(key.name, !key.active)} block>{key.active ? "Deactivate" : "Activate"}</Button></td>
        </tr>)
    );

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Key Name</th>
                    <th>Created</th>
                    <th>Updated</th>
                    <th>Active</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {keys}
                </tbody>
            </Table>
        </div>
    )
};

export default KeyTable;

