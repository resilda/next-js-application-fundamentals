const ApplicationHeader = () => {
  return (
    <div>
      <h1 className="title">Title</h1>
      {/** @style `jsx` - It is usually used on conditional style rendering because it is not the cleanest styling code to use */}
      <style jsx>
        {`
          .title {
            color: red;
          }
        `}
      </style>
    </div>
  )
}

export default ApplicationHeader
