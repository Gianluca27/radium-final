import React, { useState } from 'react';
import styles from './form.module.css';

const Form = ({ addMember }) => {
  const [member, setMember] = useState({
    firstName: '',
    lastName: '',
    dni: '',
    phone: '',
    email: '',
    city: '',
    birthDate: '',
    postalCode: '',
    memberships: 'Only Classes'
  });

  const onChange = (event) => {
    setMember({
      ...member,
      [event.target.name]: event.target.value
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    member.birthDate = member.birthDate + 'T03:00:00.000+00:00';
    try {
      addMember(member);
    } catch (error) {
      console.log(error);
    }
    setMember({
      firstName: '',
      lastName: '',
      dni: '',
      phone: '',
      email: '',
      city: '',
      birthDate: '',
      postalCode: '',
      memberships: 'Only Classes'
    });
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.formContainer}>
        <fieldset className={styles.fieldset}>
          <label className={styles.label}>First name</label>
          <input
            className={styles.input}
            name="firstName"
            type="text"
            value={member.firstName}
            onChange={onChange}
            placeholder="First Name"
          />
        </fieldset>
        <fieldset className={styles.fieldset}>
          <label>Last Name</label>
          <input
            className={styles.input}
            name="lastName"
            type="text"
            value={member.lastName}
            onChange={onChange}
            placeholder="Last Name"
          />
        </fieldset>
        <fieldset className={styles.fieldset}>
          <label>DNI</label>
          <input
            className={styles.input}
            name="dni"
            type="number"
            value={member.dni}
            onChange={onChange}
            placeholder="DNI"
          />
        </fieldset>
        <fieldset className={styles.fieldset}>
          <label>Phone</label>
          <input
            className={styles.input}
            name="phone"
            type="number"
            value={member.phone}
            onChange={onChange}
            placeholder="Phone"
          />
        </fieldset>
        <fieldset className={styles.fieldset}>
          <label>Email</label>
          <input
            className={styles.input}
            name="email"
            type="text"
            value={member.email}
            onChange={onChange}
            placeholder="Email"
          />
        </fieldset>
        <fieldset className={styles.fieldset}>
          <label>City</label>
          <input
            className={styles.input}
            name="city"
            type="text"
            value={member.city}
            onChange={onChange}
            placeholder="City"
          />
        </fieldset>
        <fieldset className={styles.fieldset}>
          <label>Birth Day</label>
          <input
            className={styles.input}
            name="birthDate"
            type="date"
            value={member.birthDate}
            onChange={onChange}
            placeholder="Birth Day"
          />
        </fieldset>
        <fieldset className={styles.fieldset}>
          <label>Zip</label>
          <input
            className={styles.input}
            name="postalCode"
            type="number"
            value={member.postalCode}
            onChange={onChange}
            placeholder="Zip"
          />
        </fieldset>
        <fieldset className={styles.fieldset}>
          <label>Membership</label>
          <select name="memberships" value={member.memberships} onChange={onChange}>
            <option value="Only Classes">Only Classes</option>
            <option value="Classic">Classic</option>
            <option value="Black">Black</option>
          </select>
        </fieldset>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Form;
