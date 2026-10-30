
const express = require('express');
const router = express.Router();
const { sequelize } = require('../config/database.config');

/**
 * @route   GET /
 * @desc    Health check endpoint
 *
 * Checks:
 * - Whether the API is running
 * - Whether PostgreSQL is accessible
 */
router.get('/', async (req, res) => {
    try {
        // Verify PostgreSQL connection
        await sequelize.authenticate();

        console.log("PostgreSQL connected (health check)");

        res.status(200).json({
            message: "This app API is currently running",
            baseUrl: "YOUR_APP_LIVE_URL",
            database: "PostgreSQL",
            status: "live"
        });

    } catch (error) {
        console.error('Health check failed:', error);

        res.status(500).json({
            status: 'error',
            message: 'Health check failed',
            error: error.message
        });
    }
});

module.exports = router;
