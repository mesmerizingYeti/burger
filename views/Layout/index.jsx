const React = require('react')

module.exports = props => {
  return(
    <html lang="en">
    <head>
      <meta charSet="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <link rel="stylesheet" href="./style.css"/>
      <title>Document</title>
    </head>
    <body>
      {props.children}
      <script src="./app.js"></script>
    </body>
    </html>
  )
}