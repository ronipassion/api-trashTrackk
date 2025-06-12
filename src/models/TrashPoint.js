const mongoose = require('mongoose');

const TrashPointSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'O título é obrigatório.'],
        trim: true
    },
    photoURL: {
        type: String,
        required: [true, 'A foto é obrigatória']
    },
    latitude: {
        type: Number,
        required: [true, 'A latitude é obrigatória']
    },
    longitude: {
        type: Number,
        required: [true, 'A longitude é obrigatória']
    },
    collectionType: {
        type: String,
        required: [true, 'O tipo de coleta é obrigatória'],
        enum: ['manual - segunda a sábado', 'caminhão - segunda, quarta e sexta']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('TrashPoint', TrashPointSchema);