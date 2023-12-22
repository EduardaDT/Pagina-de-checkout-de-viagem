
import { useState, useEffect } from 'react';

// Dados do formulário e inicialização dos campos
const CheckoutFormLogic = () => {
    const [formData, setFormData] = useState({
        departureDate: '',
        returnDate: '',
        origin: '',
        destination: '',
        fullName: '',
        email: '',
    });

    // Soma dos valores dos quadrados
    const [sum, setSum] = useState(0);

    // Mostrar a mensagem de sucesso
    const [showSuccess, setShowSuccess] = useState(false);

    // Mostrar mensagens de erro
    const [errorMessage, setErrorMessage] = useState('');

    // Função para validar o formulário
    const validateForm = () => {
        const { departureDate, returnDate, origin, destination, fullName, email } = formData;

        if (!departureDate || !returnDate || !origin || !destination || !fullName || !email) {
            setErrorMessage('Por favor, preencha todos os campos.');
            return false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setErrorMessage('Por favor, insira um email válido.');
            return false;
        }

        setErrorMessage('');
        return true;
    };


    // Lógica de envio do formulário
    const handleSubmit = (e) => {
        e.preventDefault();

        // Chama a função de validação
        if (validateForm()) {
            setShowSuccess(true);
            setFormData({
                departureDate: '',
                returnDate: '',
                origin: '',
                destination: '',
                fullName: '',
                email: '',
            });
            setShowSuccess(true);
        } else {
            setShowSuccess(false)
        }
    };

    // Função para atualizar a soma com os valores dos quadrados(Adultos e crianças)
    const updateSum = () => {
        setSum(count1 + count2);
    };


    const handleInputChange = (e, inputName) => {
        const { name, value } = e.target;
        const fieldName = inputName || name; // Para garantir que estamos capturando o nome corretamente

        setFormData({
            ...formData,
            [fieldName]: value,
        });
    };


    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    // Funções para manipular os valores dos contadores
    const handleIncrement1 = () => {
        setCount1((prevCount1) => prevCount1 + 1);
        updateSum();
    };

    const handleDecrement1 = () => {
        if (count1 > 0) {
            setCount1((prevCount1) => prevCount1 - 1);
            updateSum();
        }
    };

    const handleIncrement2 = () => {
        setCount2((prevCount2) => prevCount2 + 1);
        updateSum();

    };

    const handleDecrement2 = () => {
        if (count2 > 0) {
            setCount2((prevCount2) => prevCount2 - 1);
            updateSum();

        }
    }

    useEffect(() => {
        updateSum(); // Chama a função sempre que count1 ou count2 mudarem
    }, [count1, count2]);

    return {
        formData,
        sum,
        showSuccess,
        errorMessage,
        handleSubmit,
        handleInputChange,
        count1,
        count2,
        handleIncrement1,
        handleDecrement1,
        handleIncrement2,
        handleDecrement2
    };
};

export default CheckoutFormLogic;