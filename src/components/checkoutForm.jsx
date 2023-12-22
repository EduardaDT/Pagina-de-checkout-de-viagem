
import React from 'react';
import { Square, PlusButton, MinusButton, TextBox, DateBox } from './components';
import CheckoutFormLogic from './CheckoutFormLogic';
import successIcon from '../assets/successIcon.svg';
import './checkoutForm.css';

const CheckoutForm = () => {
  const {
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
    handleDecrement2,
  } = CheckoutFormLogic();

  return (
    <div className="Frame">
      {errorMessage && <p className="error-message" style={{ color: "red", fontWeight:'bold' }}>{errorMessage}</p> /*Mensagem de erro de preenchimento */}
      {showSuccess ? ( // Renderiza a tela de sucesso se showSuccess for true
        <div>
          <p className='checkoutMessage' >Checkout efetuado com sucesso!</p>
          <img src={successIcon} alt='success' style={{ height: '250px' }} />
        </div>
      ) : (
        <div>
          <div className="center-container">
            <div className="date-container">
              <DateBox
                label="Data de ida"
                value={formData.departureDate}
                onChange={(e) => handleInputChange(e, 'departureDate')}
              />
              <DateBox
                label="Data de volta"
                value={formData.returnDate}
                onChange={(e) => handleInputChange(e, 'returnDate')}
              />
            </div>
            <div className="text-container">
              <TextBox
                label="Origem"
                placeholder="Origem"
                value={formData.origin}
                onChange={(e) => handleInputChange(e, 'origin')}
              />
              <TextBox
                label="Destino"
                placeholder="Destino"
                value={formData.destination}
                onChange={(e) => handleInputChange(e, 'destination')}
              />
            </div>
            <p className='PassengerInfo'>Informação dos passageiros</p>
            <div className='square-container'>
              <div className='square-actions'>
                <MinusButton onClick={handleDecrement1} />
                <Square
                  count={count1}
                  label="Adultos"
                  value={formData.adult}
                  onChange={(e) => handleInputChange(e, 'adult')}
                />
                <div className='action-buttons'>
                  <PlusButton onClick={handleIncrement1} />
                </div>
              </div>
              <div className='square-actions'>
                <MinusButton onClick={handleDecrement2} />
                <Square
                  count={count2}
                  label="Crianças"
                />
                <div className='action-buttons'>
                  <PlusButton onClick={handleIncrement2} />
                </div>
              </div>
              <div className='sum-box'>
                <p className='total'>Total: {sum}</p>
                <div className='counters'>
                  <div className='counter'>
                    <p>Adultos: {count1}</p> {/* Mostra a quantidade de count1/adultos */}
                  </div>
                  <div className='counter'>
                    <p style={{ paddingBottom: '20px' }}>Crianças: {count2}</p> {/* Mostra a quantidade de count2/crianças */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-container">
            <TextBox
              label="Nome completo"
              placeholder="Seu nome"
              value={formData.fullName}
              onChange={(e) => handleInputChange(e, 'fullName')}
            />
            <TextBox
              label="E-mail"
              placeholder="nome@email.com"
              value={formData.email}
              onChange={(e) => handleInputChange(e, 'email')}
            />
          </div>
          {errorMessage === 'Por favor, insira um email válido.' && (
            <p className="error-message" style={{ color: "red", fontWeight:'bold' }}>
              {errorMessage}
            </p>
          )}
          <button className="submit-button" onClick={handleSubmit}>
            Enviar checkout
          </button>
        </div>
      )}
    </div>
  );
};
export default CheckoutForm
