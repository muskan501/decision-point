
import React, { Component } from 'react';

import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';


class Menu extends Component {

   constructor(props) {
       super(props);

       this.state = {
           selectedDish: null
       }
   }

   onSelectedDish(user) {
       this.setState({
           selectedDish: user
       })
   }

   render() {
       const menu = this.props.users.map(user => {
           return (
               <div key={user.id} className='col-12 col-md-5 m-1'>
                   <Card onClick={() => this.onSelectedDish(user)} >
                           <CardTitle >Id: {user.id}</CardTitle>
                        <CardTitle >Name: {user.name}</CardTitle>
                           <CardTitle >Username: {user.username}</CardTitle>
                           <CardTitle >title: {user.title}</CardTitle>
                           <CardTitle >Email: {user.email}</CardTitle>
                           <CardTitle >Street: {user.address.street}</CardTitle>
                           <CardTitle >Suite: {user.address.suite}</CardTitle>
                           <CardTitle >City: {user.address.city}</CardTitle>
                           <CardTitle >zipcode: {user.address.zipcode}</CardTitle> 
                           <CardTitle >lat: {user.address.geo.lat}</CardTitle>     
                           <CardTitle >lng: {user.address.geo.lng}</CardTitle>    
                           <CardTitle >phone: {user.phone}</CardTitle>   
                           <CardTitle >website: {user.website}</CardTitle> 
                           <CardTitle >company-name: {user.company.name}</CardTitle>    
                           <CardTitle >company-catchPhrase: {user.company.catchPhrase}</CardTitle>  
                           <CardTitle >company-bs: {user.company.bs}</CardTitle>    
                    
                   </Card>
               </div>
           );
       });
       return (
           <div className='container'>
               <div className='row'>
                   {menu}
               </div>
           </div>
       );
   }
}

export default Menu; 

