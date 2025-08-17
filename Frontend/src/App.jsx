

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/listings" element={<Listings />} />
      </Routes>
    </>
  )
}

export default App
