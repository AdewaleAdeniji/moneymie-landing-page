import React from 'react';
import Head from 'next/head';
const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>{props.pageTitle}</title>
        <link rel="shortcut icon" href="/images/favicon.png" type="image/x-icon"/>
        <link rel="icon" href="/images/favicon.png" type="image/x-icon"/> 
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"/>
        <meta
        name="description"
        content="$ and ₦ instant accounts, transfers from $ to ₦ and back, naira debit cards, savings and more..."
        />
        <link rel="manifest" href="/images/manifest.json"/>
        <link rel="apple-touch-icon" href="/images/favicon.png"/>
      </Head>
      <div>
        {props.children}
      </div>
        </div>
  )
}
export default Layout;