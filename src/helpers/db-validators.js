const { Category, Role, Product, Marca: Brand, User } = require('./../models')

const existsRole = async (role = '') => {
  const existsRole = await Role.findOne({ role })
  if (!existsRole) {
    throw new Error(`The role ${role} does not exist`)
  }
}

const emailInUse = async (email = '') => {
  const user = await User.findOne({ email })
  if (user) {
    throw new Error(`The email ${email} is already in use`)
  }
}

const existsUserById = async (id = '') => {
  const existsUser = await User.findById(id)
  if (!existsUser) {
    throw new Error(`The user with id ${id} does not exist`)
  }
}

const existsCategory = async (id = '') => {
  const existsCategory = await Category.findById(id)
  if (!existsCategory) {
    throw new Error(`The category with id ${id} does not exist`)
  }
}

const categoryIsActive = async (id = '') => {
  const category = await Category.findById(id)
  if (!category.status) {
    throw new Error('The category is not active')
  }
}

const estadoActivoProducto = async (id = '') => {
  const activoProducto = await Product.findById(id)
  if (!activoProducto.estado) {
    throw new Error('El estado es false, no existe!! ')
  }
}

const existecategoriaConEstadoTrue = async (id = '') => {
  // Verificar si el nombre existe Existe
  const existecategoria = await Category.findById(id)
  if (existecategoria) {
    throw new Error(
      `El id ${id}, existe!! -  El id de esa categoria esta en false`
    )
  }
}

const existeProducto = async (id = '') => {
  // Verificar si el nombre existe Existe
  const existeProducto = await Product.findById(id)
  if (!existeProducto) {
    throw new Error(`El id producto-> ${id}, no existe en db`)
  }
}
const existeProductoporId = async (id = '') => {
  // Verificar si el nombre existe Existe
  const existeProducto = await Product.findById(id)
  if (!existeProducto) {
    throw new Error(`El id producto-> ${id}, o eexiste en db`)
  }
}

/**
 * validar coleciones permitidas
 */

const coleccionesPermitidas = (coleccion = '', colecciones = []) => {
  const incluida = colecciones.includes(coleccion)

  if (!incluida) {
    throw new Error(
      `La coleccion ${coleccion} no es permitida -${colecciones}`
    )
  }

  return true
}

const existsRoleById = async (id = '') => {
  const role = await Role.findById(id)
  if (!role) {
    throw new Error(`The role with id ${id} does not exist`)
  }
}

const existsProductsWithCategory = async (id = '') => {
  const existsProducts = await Product.findOne({ category: id })
  if (existsProducts) {
    throw new Error(
      `The category with id ${id} has products associated, delete them first`
    )
  }
}

const existeProductoPorNombreDeCategoria = async (nombre = '') => {
  const categoria = await Category.findOne({ nombre })
  if (!categoria) {
    throw new Error(
      `la categoria con el nombre-> ${nombre}, no existe en la base de datos`
    )
  }
}

const isVaidIdProducto = async (productos) => {
  productos.forEach(async (producto) => {
    const existeProducto = await Product.find(producto.producto)
    if (!existeProducto) {
      throw new Error(`El producto-> ${producto.producto}, no existe`)
    }
  })
}

const existsBrand = async (id = '') => {
  const existsBrand = await Brand.findById(id)
  if (!existsBrand) {
    throw new Error(`The brand with id ${id} does not exist`)
  }
}

const brandIsActive = async (id = '') => {
  const brand = await Brand.findById(id)
  if (!brand.estado) {
    throw new Error('This brand is not active')
  }
}

const existsProductsWithBrand = async (id = '') => {
  const existsProducts = await Product.findOne({ category: id })
  if (existsProducts) {
    throw new Error(
      `The brand with id ${id} has products associated, delete them first`
    )
  }
}
module.exports = {
  brandIsActive,
  coleccionesPermitidas,
  emailInUse,
  categoryIsActive,
  estadoActivoProducto,
  existsCategory,
  existecategoriaConEstadoTrue,
  existeProducto,
  existeProductoporId,
  existeProductoPorNombreDeCategoria,
  existsProductsWithCategory,
  existsRole,
  existsBrand,
  existsProductsWithBrand,
  existsRoleById,
  existsUserById,
  isVaidIdProducto
}
