const mongoose = require('mongoose')

const presetsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  tempo: {
    type: Number,
    required: true
  },
  measures: {
    type: Number,
    required: true
  },
  checks: {
    type: Array,
    required: true
  },
  notes: {
    type: Array,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Presets', presetsSchema)
