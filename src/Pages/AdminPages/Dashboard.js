import axios from '../../axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { FaBoxes, FaShoppingBag, FaShoppingCart, FaUser } from 'react-icons/fa'

function Dashboard() {
  const [totalOrderCount, setTotalOrderCount] = useState(0)
  const [totalUserCount, setTotalUserCount] = useState(0)
  const [totalCategoryCount, setTotalCategoryCount] = useState(0)
  const [totalProductCount, setTotalProductCount] = useState(0)

  const getAllProduct = async () => {
    try {
      let result = await axios.get('/product', {
        params: {
          search: "",
          page: 1,
          size: 10
        }
      })

      if (result.data.success) {
        setTotalProductCount(result.data.totalCount)
      } else toast.error('Failed')
    } catch (ERR) {
      console.log(ERR)
      // toast.error(ERR.response.data.message)
    }
  }

  const getAllCategory = async (values, actions) => {
    try {
      let result = await axios.get('/category', {
        params: {
          search: "",
          page: 1,
          size: 10
        }
      })

      if (result.data.success) {
        setTotalCategoryCount(result?.data?.totalCount)
      } else toast.error('Failed')
    } catch (ERR) {
      console.log(ERR)
      // toast.error(ERR.response.data.message)
    }
  }

  const getAllUser = async () => {
    try {
      let result = await axios.get('/user/all', {
        params: {
          search: "",
          page: 1,
          size: 10
        }
      })

      if (result.data.success) {
        setTotalUserCount(result.data.totalCount)
      } else toast.error('Failed')
    } catch (ERR) {
      console.log(ERR)
      // toast.error(ERR.response.data.message)
    }
  }
  const getAllOrders = async () => {
    try {
      let result = await axios.get('cart/admin/order', {
        params: {
          search: "",
          page: 1,
          size: 10
        }
      })

      if (result.data.success) {
        setTotalOrderCount(result.data.totalCount)
      } else toast.error('Failed')
    } catch (ERR) {
      console.log(ERR)
      // toast.error(ERR.response.data.message)
    }
  }

  useEffect(() => {
    getAllCategory()
    getAllOrders()
    getAllProduct()
    getAllUser()
  }, [])



  return (
    <div className='mx-auto max-w-7xl px-4'>

      <h1 className='text-4xl font-semibold'>Admin Dashboard</h1>
     
    </div>
  )
}

export default Dashboard