import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { Button, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import {Formik} from 'formik';
import * as yup from 'yup';
import axios from 'axios';

class AddTicket extends Component {
    
    _handleFoormSubmit(values){
        console.log(values);
        axios.post('http://localhost:5000/ticket/register', values);
        
    };
    
    render() {
        return (
            <div style={{padding : 20}}>
                <h3>Create new Ticket</h3>
                <hr/>
                <Formik
                    initialValues={{title:'',type:'',Descrition:'',etat:'',date:'',user_Id:''}}
                    onSubmit={this._handleFoormSubmit.bind(this)}
                    validationSchema={yup.object().shape({
                        title:yup.string().required(),
                        type:yup.string().required(),
                        ergence:yup.number().min(10).required(),
                        Descrition:yup.string().string().required(),
                        etat: yup.string().min(6).required(),
                        date: yup.string().min(6).required(),
                    })}
                    render={({
                        handleChange,
                        handleSubmit,
                        isValid,
                        isSubumitting,
                        handleBlur,
                        errors,
                        touched
                    })=>(
                        <div>
                            <FormGroup>
                                <Label>Title</Label>
                                <Input name="title"
                                    invalid={errors.title && touched.title}
                                    type="text"
                                    placeholder="First Name"
                                    onChange={handleChange} 
                                    onBlur={handleBlur}
                                    />
                                    {errors.title && touched.title ? (
                                        <FormFeedback>{errors.title}</FormFeedback>
                                        ) : null}
                            </FormGroup>
                            <FormGroup>
                                <Label>Type</Label>
                                <Input name="type"
                                invalid={errors.type && touched.type} 
                                type="text" 
                                placeholder="Last Name"
                                onChange={handleChange} 
                                onBlur={handleBlur}
                                />
                                {errors.type && touched.type ? (
                                    <FormFeedback>{errors.type}</FormFeedback>
                                    ) : null}
                            </FormGroup>
                            {/* <FormGroup>
                                <Label>Ergence</Label>
                                <Input name="ergence"
                                invalid={errors.ergence && touched.ergence} 
                                type="number" 
                                placeholder="+212600000000"
                                onChange={handleChange} 
                                onBlur={handleBlur}
                                />
                                {errors.ergence && touched.ergence ? (
                                    <FormFeedback>{errors.ergence}</FormFeedback>
                                    ) : null}
                            </FormGroup> */}
                            <FormGroup>
                                <Label>Description</Label>
                                <Input name="Descrition"
                                invalid={errors.Descrition && touched.Descrition} 
                                type="text" 
                                placeholder="someone@abolkog.com"
                                onChange={handleChange} 
                                onBlur={handleBlur}
                                />
                                {errors.Descrition && touched.Descrition ? (
                                    <FormFeedback>{errors.Descrition}</FormFeedback>
                                    ) : null}
                            </FormGroup>
                            {/* <FormGroup>
                                <Label>Etat</Label>
                                <Input name="etat"
                                invalid={errors.etat && touched.etat}
                                type="etat" 
                                placeholder="Your Password"
                                onChange={handleChange} 
                                onBlur={handleBlur}
                                />
                                {errors.etat && touched.etat ? (
                                    <FormFeedback>{errors.etat}</FormFeedback>
                                    ) : null}
                            </FormGroup> */}
                            <FormGroup>
                                <Label>Date</Label>
                                <Input name="date"
                                invalid={errors.etat && touched.etat}
                                type="Date" 
                                placeholder="Your Password"
                                onChange={handleChange} 
                                onBlur={handleBlur}
                                />
                                {errors.etat && touched.etat ? (
                                    <FormFeedback>{errors.etat}</FormFeedback>
                                    ) : null}
                            </FormGroup>
                            <Button color='primary' block onClick={handleSubmit} disabled={!isValid || isSubumitting}>Sign In</Button>
                                        
                        </div>
                    )}
                    />
                <Link to='/login'>have an account? Sign In</Link>

            </div>
        )
    }
}



export {AddTicket};