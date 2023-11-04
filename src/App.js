import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
    state = {
        selectedFile: null, // Almacena el archivo seleccionado por el usuario
        responseText: ''
    };

    handleFileChange = (event) => {
        this.setState({
            selectedFile: event.target.files[0] // Obtén el archivo seleccionado por el usuario
        });
    };

    handleSubmit = async() => {
        const formData = new FormData();
        formData.append('pdfFile', this.state.selectedFile);

        try {
            const response = await axios.post('https: //pdf-array-d8tgy6ayc-mariadesanchez.vercel.app/pdfviewer', formData, {



                headers: {
                    'Content-Type': 'multipart/form-data' // Asegúrate de establecer el tipo de contenido apropiado
                }
            });

            this.setState({ responseText: response.data });
            console.log('Respuesta del servidor:', response.data);
        } catch (error) {
            console.error('Error al enviar el PDF al servidor:', error);
        }
    };

    render() {
        return ( <
            div >
            <
            h1 > Subir PDF al Servidor < /h1> <
            input type = "file"
            accept = ".pdf"
            onChange = { this.handleFileChange }
            /> <
            button onClick = { this.handleSubmit }
            disabled = {!this.state.selectedFile } >
            Enviar PDF <
            /button> <
            div >
            <
            h2 > Respuesta del Servidor: < /h2> <
            p > { this.state.responseText } < /p> < /
            div > <
            /div>
        );
    }
}

export default App;