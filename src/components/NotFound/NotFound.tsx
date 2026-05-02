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
            Page not ready!! Come back in 10 business years!
        </>
      )
}

function PageNeedsAPI() {
  return (
    <>
      Page needs API / Database connection to limit excessive api calls
    </>
  )
}

export {
    NotFound, PageNotReady, PageNeedsAPI
}
