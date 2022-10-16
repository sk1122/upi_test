import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import axios from 'axios'

const Home = () => {
  const [qr, setQR] = useState('')

  const [bank, setBank] = useState('462515070367913966')

  const generateQR = async () => {
    var data = JSON.stringify({
      "reference_id": "0000-0000-0000-0111",
      "payee_account": "462515070367913966",
      "amount": 100,
      "purpose_message": "welcome to Decentro",
      "generate_qr": 1,
      "expiry_time": 10,
      "customized_qr_with_logo": 1,
      "generate_uri": 0
    });
    
    var config = {
      method: 'post',
      url: 'https://in.staging.decentro.tech/v2/payments/upi/link',
      headers: { 
        'client_id': 'oneupi_staging', 
        'client_secret': 'gC7N3S0KGhNE3x9ToEqAlZOw5bp2Rq4P', 
        'module_secret': 'ZoqvXD0cltCxnuB1DaBkwaB1c8xnPqgI', 
        'provider_secret': 'HRJaexZmROg4sPHUIrDpVM0lH8ALTCFx', 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
    

    // const res = await axios({
    //   url: "https://in.staging.decentro.tech/v2/payments/upi/link",
    //   method: 'POST',
    //   data: {
    //     reference_id: '0000-0000-0000-1111',
    //     payee_account: '462515070367913966',
    //     amount: 100,
    //     purpose_message: 'Welome to ONEUPI',
    //     generate_qr: 1
    //   },
    //   headers: {
    //     "accept": "application/json",
    // "client_id": "oneupi_staging",
    // "client_secret": "gC7N3S0KGhNE3x9ToEqAlZOw5bp2Rq4P",
    // "module_secret": "ZoqvXD0cltCxnuB1DaBkwaB1c8xnPqgI",
    // "provider_secret": "HRJaexZmROg4sPHUIrDpVM0lH8ALTCFx",
    // "content-type": "application/json",
    // "Access-Control-Allow-Origin": '*'
    //   }
    // })
    
    // // const res = await fetch("https://in.staging.decentro.tech/v2/payments/upi/link", {
    // //   body: `\n{\n     "reference_id": "0000-0000-0000-1001",\n     "payee_account": "462515070367913966",\n     "amount": 100,\n     "purpose_message": "Welome to ONEUPI",\n     "generate_qr": 1\n}\n`,
    // //   headers: {
    // //     Accept: "application/json",
    // //     Client_id: "oneupi_staging",
    // //     Client_secret: "gC7N3S0KGhNE3x9ToEqAlZOw5bp2Rq4P",
    // //     "Content-Type": "application/json",
    // //     Module_secret: "ZoqvXD0cltCxnuB1DaBkwaB1c8xnPqgI",
    // //     Provider_secret: "HRJaexZmROg4sPHUIrDpVM0lH8ALTCFx"
    // //   },
    // //   method: "POST"
    // // })

    // const data = await res.data()

    // // const data = await sdk.payments_apiGenerateUpiPaymentLink({
    // //   reference_id: '0000-0000-0000-0001',
    // //   payee_account: '462515XXXX',
    // //   amount: 100,
    // //   purpose_message: 'welcome to Decentro',
    // //   generate_qr: 0,
    // //   generate_uri: 1
    // // }, {
    // //   client_id: 'oneupi_staging',
    // //   client_secret: 'gC7N3S0KGhNE3x9ToEqAlZOw5bp2Rq4P',
    // //   module_secret: 'ZoqvXD0cltCxnuB1DaBkwaB1c8xnPqgI',
    // //   provider_secret: 'HRJaexZmROg4sPHUIrDpVM0lH8ALTCFx'
    // // })

    // console.log(data)

    // setQR(`data:image/png;base64,${data.data.encodedDynamicQrCode}`)
  }
  
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            OneUPI
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          Get started by editing{' '}
          <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
            pages/index.tsx
          </code>
        </p>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <div className='mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600'>
            <a
              href="https://nextjs.org/docs"
              className="mt-6 w-96 p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
              <img className='w-full h-96' src="https://www.whatsappimages.in/wp-content/uploads/2021/07/Top-HD-sad-quotes-for-whatsapp-status-in-hindi-Pics-Images-Download-Free.gif" alt="" />
            </a>

            <a
              href="https://nextjs.org/learn"
              className="mt-6 w-96  p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Product Name &rarr;</h3>
              <p className="mt-4 text-xl">
                Learn about Next.js in an interactive course with quizzes!
              </p>
            </a>
          </div>

          <div className='mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600'> 
            <button
              onClick={() => generateQR()}
              className="mt-6 w-96 p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Buy &rarr;</h3>
            </button>

            <a
              href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className="mt-6 w-96 p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
             {qr && <img src={qr} />}
            </a>
          </div>
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}

export default Home
