import { useState } from 'react'


function App() {
  const [name, setName] = useState('')

  return (
    <div className='flex items-center justify-center w-full h-screen bg-center bg-cover bg-emerald-700 bg-login'>
      <div className='w-[90%] sm:max-w-[380px] px-6 py-8 sm:px-10 sm:py-12 shadow-xl bg-teal-100/50 backdrop-blur backdrop-brightness-175 rounded-3xl shadow-grey-900'>
        <form className='flex flex-col items-center gap-0 sm:items-start' onSubmit={(event) => {
          event.preventDefault();
        }}>
          <h1 className='mb-5 text-2xl font-black text-center text-teal-900 font-playfair'>Iniciar Sesión</h1>
          <label className='mb-1 font-sans text-xs font-medium uppercase text-grey-950 opacity-60' htmlFor='userEmail'>Correo Electrónico</label>
          <input type="mail" id='userEmail' value={name}
          onChange={event => {
            setName(event.target.value);
          }} className='w-full p-3 mb-3 text-teal-900 border rounded-lg bg-white/20 border-black/10 outline-0' />
          <label className='mb-1 font-sans text-xs font-medium uppercase text-grey-950 opacity-60' htmlFor='userPassword'>Constraseña</label>
          <input type="password" id='userPassword' className='w-full p-3 mb-5 text-teal-900 border rounded-lg bg-white/20 border-black/10 outline-0' />
          <button type='submit' className='py-3 text-sm tracking-wide text-white uppercase bg-teal-900 rounded-lg px-7 hover:bg-teal-950'>Ingresar</button>
        </form>

        {/* <p>
          <strong>Current value:</strong>
          {name || ' Nada aún'}
        </p> */}
      </div>
    </div>
  )
}

export default App
