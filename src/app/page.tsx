'use client'
export default function Home() { 

  const executar = async () => {
    fetch('/api/logger', {
      method: 'POST', })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
      })
      .catch((error) => {
        console.error('Erro ao registrar o log:', error);
      });
      console.log("testado")
  };
  

  return(
    <>
    <h1>teste</h1>
    <button onClick={executar}>teste</button>
    </>
  )
}
