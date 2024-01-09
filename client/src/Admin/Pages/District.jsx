import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Box, Button, Card, CardContent, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';

const District = () => {
    const [district, setDistrict] = useState('')
    const [showDistrict, setShowDistrict] = useState([])

    const addDistrict = () => {
        const data = {
            district
        }
        axios.post('http://localhost:5000/District/', data).then((response) => {
            console.log(response.data);
            fetchDistrict()
        })

    }
    const fetchDistrict = () => {
        axios.get('http://localhost:5000/District/').then((response) => {
            console.log(response.data);
            const data = response.data.districtlist;
            setShowDistrict(data)
            console.log(data);
        })
    }
    const handleDelete = (Id) => {
        axios.delete(`http://localhost:5000/District/${Id}`).then((response) => {
            console.log(response.data);
            fetchDistrict()
        })
    }

    useEffect(() => {
        fetchDistrict()
    }, [])
    return (
        <>
            <Box component="span"
                sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', mx: '2px', transform: 'scale(0.8)' }}>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent color="wheat" >

                        <TextField id='' label="District" onChange={(e) => setDistrict(e.target.value)} />
                        <div>
                            <Button variant="contained" color="success" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mx: '2px' }} onClick={addDistrict}>SAVE</Button>
                        </div>


                    </CardContent>
                </Card>

                <Box>
                    <Card>
                        <TableContainer>
                            <Table sx={{ minWidth: 400 }} >
                                <TableHead>
                                    <TableRow>
                                        <TableCell>ID</TableCell>
                                        <TableCell>District</TableCell>
                                        <TableCell>Delete</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        showDistrict.map((doc, key) => (
                                            <TableRow>
                                                <TableCell>
                                                    {
                                                        key + 1
                                                    }
                                                </TableCell>
                                                <TableCell>
                                                    {
                                                        doc.district
                                                    }
                                                </TableCell>
                                                <TableCell>
                                                    <IconButton aria-label='delete' onClick={() => handleDelete(doc._id)}>
                                                        <DeleteIcon />
                                                    </IconButton>
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Card>
                </Box>




            </Box>
        </>
    )
}

export default District