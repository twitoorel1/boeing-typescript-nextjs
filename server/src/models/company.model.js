const { Schema, model } = require('mongoose')

const Address = new Schema({
  city: { type: String, required: false },
  street: { type: String, required: false },
  zipCode: { type: Number, required: false },
})

const companySchema = new Schema(
  {
    name: {
      type: String,
      required: false,
      unique: true,
    },
    bnNumber: {
      type: Number,
      required: false,
      unique: true,
    },
    logo: {
      type: String,
      required: false,
    },
    website: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: false,
    },
    phone: {
      type: String,
      required: false,
    },
    address: Address,
    employees: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    jobs: [{ type: Schema.Types.ObjectId, ref: 'Job' }],
  },
  { timestamps: true },
)

module.exports = model('Company', companySchema)
