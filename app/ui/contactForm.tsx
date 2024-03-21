"use client";

import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode enviar os dados do formulário para o servidor, enviar um e-mail, etc.
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="bg-gray-900 rounded-md p-6 max-w-md mx-auto">
        
      <form onSubmit={handleSubmit} >
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-white" htmlFor="name">
            Nome
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 "
            type="text"
            id="name"
            name="name"
            placeholder="Digite seu nome"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-white" htmlFor="email">
            Email
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-white" htmlFor="message">
            Mensagem
          </label>
          <textarea
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            id="message"
            name="message"
            rows={3}
            placeholder="Digite sua mensagem"
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          type="submit"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
