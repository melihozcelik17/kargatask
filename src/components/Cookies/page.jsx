import React from 'react';

export default async function handler(req, res) {
    res.setHeader('Set-Cookie', 'username=lee; Path=/; HttpOnly')
    res.status(200).send('Cookie has been set.')

    const auth = req.cookies.authorization

    res.setHeader('Set-Cookie', 'username=; Path=/; HttpOnly; Max-Age=0')
    res.status(200).send('Cookie has been deleted.')
}
