import React, { useState, useEffect } from 'react';
import './Contatos.css'; // Importe o CSS

const Contatos = () => {
    const url = 'http://localhost:3000/api/contact'; // URL da sua API
    const [messages, setMessages] = useState([]);
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const [validator, setValidator] = useState(false);
    const [render, setRender] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        const fetchMessages = async () => {
            try {console.log('Enviando dados:', JSON.stringify(bodyForm));

                const response = await fetch(url, {
                    method: 'GET',
                    mode: 'cors', // Adicionado o mode 'cors'
                });
                const data = await response.json();
                
                // Verifique se data é um array antes de definir o estado
                if (Array.isArray(data)) {
                    setMessages(data);
                } else {
                    console.error("A resposta da API não é um array:", data);
                    setMessages([]);
                }
            } catch (error) {
                console.error('Failed to fetch messages:', error);
                setMessages([]); // Em caso de erro, defina messages como um array vazio
            }
        };
        
        fetchMessages();
    }, [render]);

    const sendMessage = async () => {
        setValidator(false);

        if (author.trim() === '' || content.trim() === '') {
            return setValidator(true);
        }

        const bodyForm = {
            email: author,
            message: content,
        };

        try {
            console.log(`Posting to ${url}`);
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(bodyForm),
                mode: 'cors', // Adicionado o mode 'cors'
            });

            const data = await response.json();
            if (data.id) {
                setRender(!render); // Alternar o estado para forçar a re-renderização
                setSuccess(true);
                setTimeout(() => {
                    setSuccess(false);
                }, 5000);
            }
        } catch (error) {
            console.error('Failed to send message:', error);
        }
        
        setAuthor('');
        setContent('');
    };

    return (
        <div className="container">
            <div className="text-field">
                <input
                    id="name"
                    type="text"
                    placeholder="Name"
                    value={author}
                    onChange={(event) => setAuthor(event.target.value)}
                />
            </div>
            <div className="text-field">
                <textarea
                    id="message"
                    placeholder="Message"
                    value={content}
                    onChange={(event) => setContent(event.target.value)}
                />
            </div>

            {validator && 
                <div className="alert alert-warning">
                    <strong>Por favor, preencha todos os campos!</strong>
                </div>
            }

            {success && 
                <div className="alert alert-success">
                    <strong>Mensagem enviada com sucesso!</strong>
                </div>
            }

            <button onClick={sendMessage} className="button-send">
                Enviar
            </button>

            {messages.length > 0 ? (
                messages.map((msg) => (
                    <div className="card" key={msg.id}>
                        <div className="card-body">
                            <h5 className="card-title">{msg.email}</h5>
                            <p className="card-text">{msg.message}</p>
                            <p className="card-text">
                                <small className="text-muted">{new Date(msg.created_at).toLocaleString()}</small>
                            </p>
                        </div>
                    </div>
                ))
            ) : (
                <p>Nenhuma mensagem encontrada.</p>
            )}
        </div>
    );
};

export default Contatos;
