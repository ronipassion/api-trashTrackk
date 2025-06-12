const TrashPoint = require('../models/TrashPoint');

const addTrashPoint = async (req, res) => {
    try {
        const { title, photoBase64, latitude, longitude, collectionType } = req.body;

        if (!title || !photoBase64 || latitude === null || latitude === undefined || longitude === null || longitude === undefined || !collectionType) {
            return res.status(400).json({
                success: false,
                error: 'Todos os campos são obrigatórios: title, photoBase64, latitude, longitude, collectionType'
            });
        }


        const newTrashPoint = new TrashPoint({
            title,
            photoURL: photoBase64,
            latitude,
            longitude,
            collectionType
        });

        await newTrashPoint.save();
        res.status(201).json({ success: true, data: newTrashPoint });
    } catch (error) {
        console.error('Erro ao adicionar ponto crítico:', error);
        res.status(400).json({ success: false, error: error.message });
    };
};

const getTrashPoints = async (req, res) => {
    try {
        const TrashPoints = await TrashPoint.find({});
        res.status(200).json({ success: true, count: TrashPoints.length, data: TrashPoints });
    } catch (error) {
        console.error('Erro ao buscar pontos críticos:', error);
        res.status(500).json({ success: false, error: 'Erro interno do servidor' });
    };
};

module.exports = {
    addTrashPoint,
    getTrashPoints,
};