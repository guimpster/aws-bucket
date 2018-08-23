export const getSignedUrlPromise = (s3, operation, params) =>
  new Promise((resolve, reject) => {
    s3.getSignedUrl(operation, params, (err, url) => {
      err ? reject(err) : resolve(url);
    });
  })


export const getObject = (s3, params) =>
  new Promise((resolve, reject) => {
    s3.getObject(params, (err, url) => {
      err ? reject(err) : resolve(url);
    });
  })

export const parseStream = (res, dest) => new Promise((resolve, reject) => {
    if(res.status !== 200)
        throw new Error('Could not retrieve AWS response')

    res.body.pipe(dest);
    res.body.on('error', err => {
        reject(err);
    });
    dest.on('finish', () => {
        resolve();
    });
    dest.on('error', err => {
        reject(err);
    });
})

export const asyncMiddleware = fn =>
  (req, res, next) => {
    Promise.resolve(fn(req, res, next))
      .catch(next);
  }