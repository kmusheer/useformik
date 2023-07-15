import '../App.css'
import * as yup from 'yup';
import { useFormik } from 'formik';


const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const personSchema = yup.object().shape({
  firstname: yup.string().defined(),
  lastname: yup.string().defined(),
  email: yup.string().nullable().email(),
  phone: yup.string().required("required").matches(phoneRegExp, 'Phone number is not valid').min(10, "too short").max(10, "too long"),
  birthdate: yup.date().nullable().min(new Date(1900, 0, 1)).required(),
  address: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  country: yup.string().required(),
  post: yup.string().required(),
  gender: yup.string().required('Gender is required')
});

const initialValues = {
  firstname: "",
  lastname: "",
  email: '',
  phone: '',
  birthdate: '',
  address: '',
  city: '',
  state: '',
  country: '',
  post: '',
  gender: ''
}

const FormValidations = () => {

  const { handleBlur, handleChange, handleSubmit, values, touched, errors } = useFormik({
    // const Formik = useFormik({
    initialValues: initialValues,
    validationSchema: personSchema,
    onSubmit: (values) => {
      console.log("values", values)
    }
  })

  return (
    <>
      <div className="formbold-main-wrapper">
        <div className="formbold-form-wrapper">

          {/* <img src="your-image-url-here.jpg"> */}

          {/* <form action="https://formbold.com/s/FORM_ID" method="POST"> */}
          <form onSubmit={handleSubmit}>
            <div className="formbold-form-title">
              <h2 className="">Register now</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>

            <div className="formbold-input-flex">
              <div>
                <label htmlFor="firstname" className="formbold-form-label">
                  First name
                </label>
                <input
                  type="name"
                  name="firstname"
                  id="firstname"
                  className="formbold-form-input"
                  placeholder='First Name'
                  value={values?.firstname}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {touched.firstname && errors.firstname && (<div style={{ color: "Red", fontSize: "12px" }}>{errors.firstname}</div>)}
              </div>
              <div>
                <label htmlFor="lastname" className="formbold-form-label"> Last name </label>
                <input
                  type="name"
                  name="lastname"
                  id="lastname"
                  className="formbold-form-input"
                  placeholder='Last Name'
                  value={values?.lastname}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {touched.lastname && errors.lastname && (<div style={{ color: "Red", fontSize: "12px" }}>{errors.lastname}</div>)}
              </div>
            </div>

            <div className="formbold-input-flex">
              <div>
                <label htmlFor="email" className="formbold-form-label"> Email </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="formbold-form-input"
                  value={values?.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {touched.email && errors.email && (<div style={{ color: "Red", fontSize: "12px" }}>{errors.email}</div>)}

              </div>
              <div>
                <label htmlFor="phone" className="formbold-form-label"> Phone number </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="formbold-form-input"
                  value={values?.phone}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {touched.phone && errors.phone && (<div style={{ color: "Red", fontSize: "12px" }}>{errors.phone}</div>)}

              </div>
            </div>

            <div className="formbold-input-flex">
              <div>
                <label htmlFor="birthdate" className="formbold-form-label"> DOB </label>
                <input
                  type="date"
                  name="birthdate"
                  id="birthdate"
                  className="formbold-form-input"
                  value={values?.date}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {touched.birthdate && errors.birthdate && (<div style={{ color: "Red", fontSize: "12px" }}>{errors.birthdate}</div>)}

              </div>
              <div>
                <label htmlFor="address" className="formbold-form-label">
                  Street Address
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  className="formbold-form-input"
                  value={values?.address}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {touched.address && errors.address && (<div style={{ color: "Red", fontSize: "12px" }}>{errors.address}</div>)}

              </div>
            </div>



            <div className="formbold-input-flex">
              <div>
                <label htmlFor="city" className="formbold-form-label">
                  City
                </label>
                <select name="city" id="city" className="formbold-form-input"
                  value={values?.city}
                  onBlur={handleBlur}
                  onChange={handleChange}>
                  <option value="">--Select--</option>
                  <option value="mum">Mumbai</option>
                  <option value="del">Delhi</option>
                  <option value="ism">Islamabad</option>
                  <option value="lhr">Lahore</option>
                  <option value="bjg">Bejing</option>
                  <option value="dhk">Dhaka</option>
                </select>
                {touched.city && errors.city && (<div style={{ color: "Red", fontSize: "12px" }}>{errors.city}</div>)}

              </div>
              <div>
                <label htmlFor="state" className="formbold-form-label"> State/Prvince </label>
                <select name="state" id="state" className="formbold-form-input"
                  value={values?.state}
                  onBlur={handleBlur}
                  onChange={handleChange}>
                  <option value="">--Select--</option>
                  <option value="MH">MH</option>
                  <option value="DL">DL</option>
                  <option value="PJ">PJ</option>
                  <option value="IS">IS</option>
                  <option value="BJ">BJ</option>
                  <option value="DK">DK</option>
                </select>
                {touched.state && errors.state && (<div style={{ color: "Red", fontSize: "12px" }}>{errors.state}</div>)}

              </div>
            </div>

            <div className="formbold-input-flex">

              <div>
                <label htmlFor="country" className="formbold-form-label"> Country </label>
                <select name="country" id="country" className="formbold-form-input"
                  value={values?.country}
                  onBlur={handleBlur}
                  onChange={handleChange}>

                  <option value="">--Select--</option>
                  <option value="IN">Indai</option>
                  <option value="PK">Pakistan</option>
                  <option value="CH">China</option>
                  <option value="BD">Bangladesh</option>
                </select>
                {touched.country && errors.country && (<div style={{ color: "Red", fontSize: "12px" }}>{errors.country}</div>)}

              </div>
              <div>
                <label htmlFor="post" className="formbold-form-label"> Post/Zip code </label>
                <input
                  type="text"
                  name="post"
                  id="post"
                  className="formbold-form-input"
                  value={values?.post}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {touched.post && errors.post && (<div style={{ color: "Red", fontSize: "12px" }}>{errors.post}</div>)}
              </div>
            </div>

            <div className="formbold-mb-3">
              <label htmlFor="gender" className="formbold-form-label"> Gender </label>
              <label>
                <input type="radio" name="gender" value="male"
                  checked={values.gender === 'male'}
                  onChange={handleChange}
                  onBlur={handleBlur} />
                Male
              </label>

              <label>
                <input type="radio" name="gender" value="female"
                  checked={values.gender === 'female'}
                  onChange={handleChange}
                  onBlur={handleBlur} />
                Female
              </label>

              <label>
                <input type="radio" name="gender" value="other"
                  checked={values.gender === 'other'}
                  onChange={handleChange}
                  onBlur={handleBlur} />
                Other
              </label>
              {touched.gender && errors.gender && (<div style={{ color: "Red", fontSize: "12px" }}>{errors.gender}</div>)}

            </div>

            {/* <div className="formbold-checkbox-wrapper">
              <label htmlFor="supportCheckbox" className="formbold-checkbox-label">
                <div className="formbold-relative">
                  <input
                    type="checkbox"
                    id="supportCheckbox"
                    className="formbold-input-checkbox"
                  />
                  <div className="formbold-checkbox-inner">
                    <span className="formbold-opacity-0">
                      <svg
                        width="11"
                        height="8"
                        viewBox="0 0 11 8"
                        fill="none"
                        className="formbold-stroke-current"
                      >
                        <path
                          d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                          strokeWidth="0.4"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
                I agree to the defined
                <a href="#"> terms, conditions, and policies</a>
              </label>
            </div> */}

            <button type='submit' className="formbold-btn">Register Now</button>
          </form>
        </div>
      </div>

    </>
  )
}

export default FormValidations
