const router = require('express').Router()
const companyController = require('../controllers/company.controllers')
const catchAsyncError = require('../errors/catchAsyncError')
const { authJwtRoleTest } = require('../middlewares/authentication.middleware')

// Route For Admin
router.post('/', catchAsyncError(companyController.createCompany))

// Route For Company And Employee
router.get('/find/:id', catchAsyncError(companyController.getCompanyByID))

// Route For Employee (example: Galit Working in Boeing HRM)
router.get(
  '/companies',
  authJwtRoleTest('employee'),
  catchAsyncError(companyController.getAllCompanies),
)

router.put(
  '/update/:id',
  authJwtRoleTest('employee'),
  catchAsyncError(companyController.updateCompany),
)

router.delete(
  '/delete/:id',
  authJwtRoleTest('employee'),
  catchAsyncError(companyController.deleteCompany),
)

module.exports = router
