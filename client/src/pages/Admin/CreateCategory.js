import React,{useEffect,useState} from 'react'
import Layout from "../../components/Layout/Layout"
import AdminMenu from "../../components/Layout/AdminMenu";
import toast from 'react-hot-toast';
import axios from "axios";

const CreateCategory = () => {
  const [categories, setCategories] = useState([])

  //get all category
  const getAllCategory = async() =>{
    try {
      const {data} = await axios.get('/api/v1/category/get-category');
      if(data.success){
        setCategories(data)
      }
    } catch (error) {
      console.log(error)
      toast.error('Something went wrong in getting category')
    }
  };

  useEffect(()=>{
    getAllCategory();
  },[])
  return (
    <Layout title={'Dashboard-Create Category'}>
      <div className="container-fluid m-3 p-3">
      <div className="row">
        <div className="col-md-3">
          <AdminMenu/>
        </div>
        <div className="col-md-9">
          <h1>Create Category</h1>
          <div>
          <table className="table">
  <thead>
    <tr>
     
      <th scope="col">Name</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colSpan={2}>Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>

          </div>
        </div>
      </div>
      </div>
    </Layout>
  )
}

export default CreateCategory