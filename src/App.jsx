function App() {
  const quotes = [
    {
      quote: "Teruslah mekar tanpa menjadi layu",
      author: "Langit Biru Cinta Searah"
    },
    {
      quote: "Akan ada masa depan bagi semua yang bertahan",
      author: "Satu-satu"
    }
  ]

  const handleRand = () => {
    alert("Randomize not working yet");
  }


  return (
    <main className='container-fluid bg-success position-relative' style={{height: "100svh"}}>
      <small className="position-absolute top-0 end-0 px-4 py-3 text-white-50">Music Quote</small>
        <div className="row h-100 justify-content-center align-items-center">
          <figure id='quote-box' className="col-11 col-md-8 col-lg-6 col-xxl-4 bg-white px-4 py-3 rounded-4 shadow">
            <h1 id="text">{quotes[1].quote}</h1>
            <p id='author' className="text-body-secondary">{`— ${quotes[1].author}`}</p>
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
