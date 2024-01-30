import './NotFound.css'

function NotFound() {
  return (
    <>
        Page not found
    </>
  )
}

function PageNotReady() {
    return (
        <>
            Page not ready!!
        </>
      )
}

function PageNeedsAPI() {
  return (
    <>
      Page needs API / Database connection.
    </>
  )
}

export {
    NotFound, PageNotReady, PageNeedsAPI
}
