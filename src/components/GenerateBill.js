import React from "react";
import { Modal, Button } from "react-native";
import { useSelector } from "react-redux";
import { DataTable } from "react-native-paper";

const GenerateBill = ({visible, toggleOverlay}) =>{
    const {cartItems, grandTotal} = useSelector( state => state.userReducer);
    return(
        <Modal visible={visible} onRequestClose={toggleOverlay} animationType="slide">
            <DataTable style={{width:'100%'}}>
                <DataTable.Header style={{backgroundColor: '#DCDCDC',}}>
                    <DataTable.Title>Product</DataTable.Title>
                    <DataTable.Title>Quantity</DataTable.Title>
                    <DataTable.Title>Price</DataTable.Title>
                    <DataTable.Title>Total</DataTable.Title>
                </DataTable.Header>
                {cartItems.map( (item) =>{
                    return(
                    <DataTable.Row key={item.id}>
                        <DataTable.Cell>{item.title}</DataTable.Cell>
                        <DataTable.Cell style={{paddingLeft:10}}>{item.quantity}</DataTable.Cell>
                        <DataTable.Cell>{item.price*15}</DataTable.Cell>
                        <DataTable.Cell>{item.total}</DataTable.Cell>
                    </DataTable.Row>
                )})}
                <DataTable.Header style={{backgroundColor: '#DCDCDC', height:50}}>
                    <DataTable.Cell >Grand Total : </DataTable.Cell>
                    <DataTable.Cell >{grandTotal.toFixed(2)}</DataTable.Cell>
                </DataTable.Header>
            </DataTable>
            <Button title="Buy" color={'red'} onPress={toggleOverlay}/>
        </Modal>
   )
}

export default GenerateBill;