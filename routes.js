// This file was added by edgio init.
// You should commit this file to source control.
import { Router, edgioRoutes } from '@edgio/core'

export default new Router()
  // Here is an example where we cache api/* at the edge but prevent caching in the browser
  // .match('/api/:path*', {
  //   caching: {
  //     max_age: '1d',
  //     stale_while_revalidate: '1h',
  //     bypass_client_cache: true,
  //     service_worker_max_age: '1d',
  //   },
  // })
  .match('/short', ({proxy}) => {
      proxy('short', {path: '/ejnJZ'})
  })
  .match('/ejnJZ', {
    "url": {
      follow_redirects: true,
    },
   })
  // plugin enabling basic Edgio functionality
  .use(edgioRoutes)
