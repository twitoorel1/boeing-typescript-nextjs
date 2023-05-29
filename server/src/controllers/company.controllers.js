const Company = require('../models/company.model')
const { NotFoundError, ForbiddenError } = require('../errors/Errors')

exports.createCompany = async (req, res, next) => {
  const company = await Company.create(req.body)
  res.status(201).json(company)
}

exports.getCompanyByID = async (req, res, next) => {
  const company = await Company.findById(req.params.id).populate([
    'employees',
    'jobs',
  ])

  if (!company) return next(new NotFoundError('Company not found'))
  res.status(200).json(company)
}

exports.getAllCompanies = async (req, res, next) => {
  const companies = await Company.find()
  res.status(200).json(companies)
}

exports.updateCompany = async (req, res, next) => {
  const company = await Company.findByIdAndUpdate(req.params.id, req.body)
  if (!company) return next(new NotFoundError('Company not found'))
  res.status(200).json(company)
}

exports.deleteCompany = async (req, res, next) => {
  const company = await Company.findByIdAndDelete(req.params.id)
  if (!company) return next(new NotFoundError('Company not found'))
  res.status(200).json(company)
}
