import express from 'express';

const PORT = process.env.PORT || 5500;

let app = express();
app.use(express.static('frontend'));
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

export {app};
