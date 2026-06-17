/*
 * Lucid API Server
 *
 * Express server that serves the static app and a status endpoint.
 * Setting LUCID_THREADS=1 enables cross-origin isolation so ONNX
 * Runtime Web can use faster multithreaded WASM (this disables the
 * inline OpenStreetMap GPS embed; the map links still work).
 */

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

if (process.env.LUCID_THREADS === '1') {
    app.use((req, res, next) => {
        res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
        res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
        next();
    });
    console.log('Cross-origin isolation enabled: multithreaded WASM on, OSM map embed off.');
}

app.use(express.static(path.join(__dirname, '../public')));

app.get('/api/status', (req, res) => {
    res.json({
        name: 'Lucid',
        version: '2.2.0',
        status: 'operational'
    });
});

app.listen(PORT, () => {
    console.log(`Lucid running at http://localhost:${PORT}`);
});
