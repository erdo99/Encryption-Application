const encryptText = async (text) => {
    const response = await fetch('/api/aes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ action: 'encrypt', text }),
    });
  
    const data = await response.json();
    if (data.result) {
      console.log('Encrypted:', data.result);
    } else {
      console.error('Error:', data.error);
    }
  };
  
  const decryptText = async (ciphertext) => {
    const response = await fetch('/api/aes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ action: 'decrypt', text: ciphertext }),
    });
  
    const data = await response.json();
    if (data.result) {
      console.log('Decrypted:', data.result);
    } else {
      console.error('Error:', data.error);
    }
  };
  