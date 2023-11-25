import { useState, useEffect } from 'react';
const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: "",
    price: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8081/GetCourse');
      const result = await response.json();
      console.log(result.data)
      setCourses(result.data); // Assuming the result is an array of courses
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  function addCourse(e) {
    console.log("Hello")
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(formData);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:8081/AddCourse", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    fetchData()
    setFormData({
      title: '',
      description:"",
      price: '',
    });
  }
  return (
    <>
      <h1 className="course-heading">Add Course </h1>
      <form className="course">
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
           Title
          </label>
          <input
            type="text"
            placeholder="Enter Title"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Description
          </label>
          <input
            type="text"
            placeholder="Enter Description"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Fees
          </label>
          <input
            type="text"
            placeholder="Enter Fees"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="col-12">       
             <button className="box" id="btn-course" type="button">
              submit
            </button>
          </div>
      </form>
      <br/><br/><br/>
      <div className="mt-3">
      <table className="table table-dark table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col">Fees</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>MERN Stack</td>
      <td>It is a MERN stack development course.</td>
      <td>30000</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Graphic Designing</td>
      <td>It is a Graphic Designing course.</td>
      <td>20000</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>ASP.NET</td>
      <td>It is a Asp.Net course.</td>
      <td>25000</td>
    </tr>
  </tbody>
</table>
</div>
    </>
  );
};

export default Courses;