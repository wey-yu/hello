const {Service, DiscoveryBackend} = require('./pico')

let port = process.env.PORT || 8080;
let externalPort = process.env.EXTERNAL_PORT || port;

let service = new Service({})

service.get({uri:`/`, f: (request, response) => {
  response.sendHtml(`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>Hello World!</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
            .container { min-height: 100vh; display: flex; justify-content: center; align-items: center; text-align: center; }
            .title { font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif; display: block; font-weight: 300; font-size: 100px; color: #35495e; letter-spacing: 1px; }
            .subtitle { font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif; font-weight: 300; font-size: 42px; color: #526488; word-spacing: 5px; padding-bottom: 15px; }
            .links { padding-top: 15px; }
        </style>
      </head>
      <body>
        <section class="container">
          <div>
            <h1 class="title">
              👋 Hello 🌍 World
            </h1>
            <h2 class="subtitle">
              made with ❤️
            </h2>
            <h2 class="subtitle">
              proudly build by GitLab CI
            </h2>            
          </div>
        </section>
      </body>
    </html>  
  `)

}})

service.get({uri:`/api/hi`, f: (request, response) => {
  response.sendJson({message: "Hi 👋 🌍", from:"pico"})
}})

service.post({uri:`/api/hi`, f: (request, response) => {
  response.sendJson({message: "👋", from:"pico"})
}})

service.start({port: port}, res => {
  res.when({
    Failure: error => console.log("😡 Houston? We have a problem!", error),
    Success: port => console.log(`🌍 pico service is listening on ${port}`)
  })
})
