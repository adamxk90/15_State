function Person(props) {
  const { firstName, lastName, email, img } = props
  return (
    <div className="card">
      <img src={img} alt={firstName} />
      <h3>
        {firstName} {lastName}
      </h3>
      <h4>
        {'Email: '}
        {email}
      </h4>
    </div>
  )
}

export default Person
