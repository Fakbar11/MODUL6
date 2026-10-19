function App() {

  const NAMA_PANGILAN = 'JOKER'
  const gayaJudul = {color:'blue', fontSize:'28 px'}
  const jam = 9
  const N = 2
  
  return (
    <>
      
        <h1 className="judul" style={gayaJudul}>Kantin{NAMA_PANGILAN}</h1>
        <p>{jam < 12 ? 'selamat pagi' : 'selamat siang'}</p>
        <p>Saldo awal kantin: Rp {N * 1000}</p>
        <button disabled>Bayar</button>
      
    </>
  )
}

export default App