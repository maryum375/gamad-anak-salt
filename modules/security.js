const crypto = require('crypto');

const algorithm = 'aes-256-ctr';

const encrypt = (text, key) => {
    const iv = crypto.randomBytes(16);
    const keyhash = getKeyHash(key)
    
    const cipher = crypto.createCipheriv(algorithm, keyhash, iv);

    const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

    return {
        iv: iv.toString('hex'),
        content: encrypted.toString('hex')
    };
};

const decrypt = (hash, key) => {
    const keyhash = getKeyHash(key)

    const decipher = crypto.createDecipheriv(algorithm, keyhash, Buffer.from(hash.iv, 'hex'));

    const decrpyted = Buffer.concat([decipher.update(Buffer.from(hash.content, 'hex')), decipher.final()]);

    return decrpyted.toString();
};

const getKeyHash = (key) => {
    return crypto.createHash('sha256').update(String(key)).digest('base64').substr(0, 32);
}

module.exports = {
    encrypt,
    decrypt
};