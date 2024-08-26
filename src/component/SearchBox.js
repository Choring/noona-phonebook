import React, { useState } from 'react';
import { Col, Row, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

export const SearchBox = () => {
    const [searchName, setSearchName] = useState("");
    const dispatch = useDispatch();
    let {contactList} = useSelector((state) => state.contactList);

    const searchContact = (event) => {
        event.preventDefault();
        dispatch({type:"SEARCH_NAME", payload:{searchName}});
    }

    return (
        <Form onSubmit={searchContact}>
            <Row>
                <Col lg={10}>
                    <Form.Control 
                        type="text" 
                        placeholder="이름을 입력해 주세요." 
                        onChange={(event) => setSearchName(event.target.value)} 
                    />
                </Col>
                <Col lg={2}>
                    <Button type='submit'>찾기</Button>
                </Col>
            </Row>
        </Form> 
    );
};
