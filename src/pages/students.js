import { Link } from "react-router-dom";
const Students = () => {
  return (
    <>
      <h1 className="course-headings">Add Students</h1>
      <form className="course">
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            First Name
          </label>
          <input
            type="text"
            placeholder="Enter First Name"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            placeholder="Enter Last Name"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter Email Address"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Date of birth
          </label>
          <input
            type="date"
            placeholder="Enter Date of birth"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
         Course
          </label>
          <select class="form-select" aria-label="Default select example">
            <option selected>Select Course</option>
            <option value="1">MERN</option>
            <option value="2">.NET</option>
        
          </select>
        </div>
        <div className="col-12">
          <button className="box" id="btn-course" type="button">
            Submit
          </button>
        </div>
      </form>
      <br />
      <br />
      <br />
      {/* Table data */}

      <div className="mt-3">
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email Address</th>
              <th scope="col">Date of birth</th>
              <th scope="col">Course</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>atta-ur-rehman</td>
              <td>saeed</td>
              <td>helloworld@gmail.com</td>
              <td>17-10-2006</td>
              <td>MERN Stack</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Students;
