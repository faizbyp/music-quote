function App() {
  const handleRand = () => {
    alert("Randomize not working yet");
  }

  return (
    <main className='container-fluid bg-success position-relative' style={{height: "100svh"}}>
      <small className="position-absolute top-0 end-0 px-4 py-3 text-white-50">Music Quote</small>
        <div className="row h-100 justify-content-center align-items-center">
          <figure id='quote-box' className="col-11 col-md-8 col-lg-6 col-xxl-4 bg-white px-4 py-3 rounded-4 shadow">
            <h1 id="text">Change from vim.</h1>
            <p id='author' className="text-body-secondary">— Langit Biru Cinta Searah</p>
            <section id="buttons" className='text-end mb-2'>
              <a id='tweet-quote' href="https://twitter.com/intent/tweet" target='_blank' className='btn btn-secondary'>Share</a>
              <button id='new-quote' className='btn btn-success ms-3' onClick={handleRand}>Randomize</button>
            </section>
          </figure>
        </div>
    </main>
  )
}

export default App
